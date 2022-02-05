import React, {useState, useEffect} from 'react';
import UtilsService from '../UtilsService';
import Hotel from './Hotel';
import '../../style/IndexPage.css';

    
export default function Hotels(props)
{
    const [hotels,setHotels]= useState([]);
    const utilsService = new UtilsService();
  
    useEffect(() => {     
       utilsService.getItems("http://localhost:3001/api/hotels").then(data => {setHotels(data);  console.log(data)});
      
    },[]);

    
    return(
        <div className="grid-container">          
            {console.log(props.stars)}
            {hotels.filter(hotel => (
                props.stars === undefined && props.stars === undefined ||           
                hotel.stars === props.stars &&  props.country === undefined || 
                props.stars === undefined && hotel.address.toString().toLowerCase().includes(props.country.toString().toLowerCase()) ||
                hotel.stars === props.stars && hotel.address.toString().toLowerCase().includes(props.country.toString().toLowerCase())
                ))
            .map((hotel, i) => (   
                <div className="grid-item" key={i}> 
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
    