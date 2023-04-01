import React from 'react';

const FavMold = ({el}) => {
    return ( 
        <figure className="container-figure">
            <h3>{el.Name}</h3>
            <img src={el.Image} alt={el.Name} className="container-img"/>
            <figcaption className="container-caption">{el.Origin} - {el.Species}</figcaption>
        </figure>
     );
}
 
export default FavMold;