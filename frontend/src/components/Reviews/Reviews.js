import React, {useState, useEffect} from 'react';
import UtilsService from '../UtilsService';
import '../../style/Reviews.css';
  



export default function Reviews() {
    const [reviews,setReviews]= useState([]);
    const utilsService = new UtilsService();
  
    useEffect(() => {     
       utilsService.getItems("http://localhost:3001/api/reviews").then(data => {setReviews(data);  console.log(data)});
      
    },[]);

    
    return(
        <div className="grid-container">
            {reviews.map((hotel) => (   
                <div className="grid-item">
               
                </div>
            ))}
        </div>  )
}
    