import { createContext } from "react";
import React, {useState} from 'react';



const FavContext = createContext();

const FavProvider = ({children}) =>{
    
    const [favData, setFavData] = useState([]);
    const [dataB, setDataB] = useState({});

    const data = {favData, setFavData, dataB, setDataB};
    return <FavContext.Provider value={data}>{children}</FavContext.Provider>
}

export {FavContext};
export {FavProvider};