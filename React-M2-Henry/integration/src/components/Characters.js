import React, {useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { FavContext } from '../context/favContext';
import MoldCharacters from './MoldCharacters';

const Characters = () => {
    
    const {dataB, setDataB} = useContext(FavContext);
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character`)
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => setDataB(json))
        .catch(err => console.log(err));
    }, []);

    return ( 
        <div>
            <Link to="/favorites" className="link">Favorites</Link>
            <div className="container">
            {dataB.results && dataB.results.map((el, index)=> <MoldCharacters key={index} el={el}/>)}
            </div>
        </div>
     );
}
 
export default Characters;