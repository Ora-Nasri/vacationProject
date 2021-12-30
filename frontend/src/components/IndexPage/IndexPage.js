import React, {useState} from 'react';
import User from './User';
import '../../style/IndexPage.css'

export default function IndexPage() {
    
    const [userID,setUserID]=useState();

    return (
      <div className='App'>
         <input className='Input' type={Text} value={userID} onChange={(e) => setUserID(e.target.value)} placeholder="enter hotel's id"></input>
         <User userID={userID}></User> 
      </div>
    )
}
