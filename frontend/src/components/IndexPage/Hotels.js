import React, {useState, useEffect} from 'react';
import UtilsService from '../UtilsService';
import Hotel from './Hotel';
import '../../style/IndexPage.css';
import { ObjectId } from 'mongoose';
    
export default function Hotels() {
    const [hotels,setHotels]= useState([]);
    const utilsService = new UtilsService();
  
    useEffect(() => {     
       utilsService.getItems("http://localhost:3001/api/hotels").then(data => {setHotels(data);  console.log(data)});
      
    },[]);

    
    return(
        <div className="grid-container">
            {hotels.map((hotel) => (   
                <div className="grid-item">
                <Hotel 
                       hotelName={hotel.name} 
                       address={hotel.address} 
                       image={hotel.img}                       
                       stars={hotel.stars} 
                       dsc={hotel.description}/>   
                </div>
            ))}
        </div>
)}
    