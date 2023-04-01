import React, {useContext, useState} from 'react';
import { FavContext } from '../context/favContext';

const Header = () => {
    
    const [input, setInput] = useState("");
    const {dataB, setDataB} = useContext(FavContext)

    const handleChange = (e) =>{
        setInput(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch(`https://rickandmortyapi.com/api/character/?name=${input.toLowerCase()}`)
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => {
            let filter = dataB.results.find(el => el.name === json.results[0].name);
            if(filter){
                return alert("Character is already on the list");            
            }else{
                setDataB({
                    ...dataB,
                    results: [...dataB.results, json.results[0]]
            });
            alert("Succesfully added!");
        }})
        .catch(err => console.log(err));
    }

    return ( 
        <header className="header">
            <h1>Rick & Morty API</h1>

            <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Character" onChange={handleChange} value={input} required/>
            <input type="submit" value="Add"/>
            </form>

        </header>
     );
}
 
export default Header;