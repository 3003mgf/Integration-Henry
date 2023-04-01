import React, {useContext, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { FavContext } from '../context/favContext';


const MoldCharacters = ({el}) => {

    const history = useHistory();

    let obj = {
        Name: el.name,
        Image: el.image,
        Origin: el.origin.name,
        Species: el.species,
        id: el.id
    };


    const {dataB, setDataB} = useContext(FavContext);
    const [fav, setFav] = useState(false);
    const {favData, setFavData} = useContext(FavContext); 

    const handleFav = (e)=>{
       fav ? setFav(false) : setFav(true);
       if(e.target.className !== "fav-span is-active"){
        console.log(obj);
        setFavData([...favData, obj]);
       }else{
        let filter = favData.filter(el => el.id !== obj.id);
        setFavData(filter);
       }
       };
    
    const handleClick = () =>{
       history.push(`/${obj.id}`)
    }

    const handleRemove = (e) =>{
        setDataB({
            ...dataB,
            results: dataB.results.filter(el => el.name !== obj.Name)
        })
    }
    
    return ( 
        <figure className="container-figure">
            <div className="container-h4">
                <p>{el.name}</p>
                <span onClick={(e)=>handleFav(e)} className={`fav-span ${(fav || favData.find(el=> el.id === obj.id)) && "is-active"}`} data-id={el.id}>{favData.find(el=> el.id === obj.id) ? "Favs" : "Add to Favorites"}</span>
            </div>
            <img onClick={()=>handleClick()} src={el.image} alt={el.name} className="container-img" style={{cursor: "pointer"}}/>
            <figcaption className="container-caption">{el.origin.name} - {el.species}</figcaption>
            <button onClick={handleRemove}>Remove</button>
        </figure>
     );
}
 
export default MoldCharacters;