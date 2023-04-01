import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavContext } from '../context/favContext';
import FavMold from './FavMold';
import MoldCharacters from './MoldCharacters';

const Favorites = () => {
   
    const {favData} = useContext(FavContext);

    return ( 
        <div>
            <div>
            <Link to="/" className="link">Home</Link>
            </div>
    <div className="container">
       {favData && favData.map((el, index) => <FavMold key={index} el={el}/>)}
       {!favData && <h2>No Favorites</h2>}
    </div> 
    </div>
    );
}
 
export default Favorites;