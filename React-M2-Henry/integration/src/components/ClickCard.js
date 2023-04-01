import React from 'react';

const ClickCard = ({el}) => {
    return ( 
        <div className="click-card">
            <h2>{el.name}</h2>
            <img src={el.image} alt={el.name}/>
            <ul>
                <li><b>Gender:</b> {el.gender}</li>
                <li><b>Specie:</b> {el.species}</li>
                <li><b>Origin:</b> {el.origin.name}</li>
                <li><b>Status:</b> {el.status}</li>
                <li><b>Location:</b> {el.location.name}</li>
            </ul>
        </div>
     );
}
 
export default ClickCard;