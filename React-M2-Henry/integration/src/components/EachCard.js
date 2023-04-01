import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavContext } from '../context/favContext';
import ClickCard from './ClickCard';


const EachCard = () => {
    
    const params = useParams();
    const {dataB} = useContext(FavContext);
    
    
    const {id} = params;
    
    let item = dataB.results.filter(el => el.id.toString() === id);
    
    return ( 
        <div>
            <ClickCard el={item[0]}/>
        </div>
     );
}
 
export default EachCard;