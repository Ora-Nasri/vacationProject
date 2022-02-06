import React, {useState, useEffect} from 'react';
import UtilsService from '../UtilsService';
import '../../style/Reviews.css';
  



export default function Reviews(props) {
    const [reviews,setReviews]= useState([]);
    const utilsService = new UtilsService();
  
    useEffect(() => {     
       utilsService.getItems("http://localhost:3001/api/reviews").then(data => {setReviews(data);  console.log(data)});
      
    },[]);

    
    return(
        <div className="grid-container">
            {reviews.map((review) => (   
                <div className="grid-item">
               <Reviews 
               hotelName={review.hotelName}
               userName={review.userName}
               comment={review.comment}
               rate={review.rate}/>
                </div>
            ))}
        </div>  
        )
}
    