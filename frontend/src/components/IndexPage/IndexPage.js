import React, {useState} from 'react';
import User from './User';
import '../../style/IndexPage.css';
import Search from './Search';
import Hotel from './Hotel';
import Hotels from './Hotels';
import Form from './Location';

export default function IndexPage() {
    
    const [userID,setUserID]=useState();

    return (
      <div className='App'>
          {/* <input className='Input' type={Text} value={userID} onChange={(e) => setUserID(e.target.value)} placeholder="enter hotel's id"></input>
      <User userID={userID}></User> */}  
         <Search/>
         <Hotels/>
         <Form/>
      </div>
    )
}
