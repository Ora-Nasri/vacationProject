import React, {useState, useEffect} from 'react';
import UtilsService from '../UtilsService';
    
export default function Hotels() {
    const [hotels,setHotels]= useState([]);
    const utilsService = new UtilsService();
  
    useEffect(() => {     
       utilsService.getItems("http://localhost:3001/api/hotels").then(data => {setHotels(data.name);});
    });
    
    return(<div>
        {hotels}
        
    </div>)   
}
    