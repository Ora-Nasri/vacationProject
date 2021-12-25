import User from "./components/User";
import React, {useState, useEffect} from 'react';

export default function App(props){

  const [userID,setUserID]=useState();
  
  return (
    <div className="App">
      <input type={Text} value={userID} onChange={(e) => setUserID(e.target.value)}></input>
      <User userID={userID}></User> 
    </div>
  );
}