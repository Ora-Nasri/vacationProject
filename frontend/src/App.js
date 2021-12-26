import User from "./components/User";
import React, {useState, useEffect} from 'react';
import "./App.css";

export default function App(props){

  const [userID,setUserID]=useState();
  
  return (
    <div className="App">
      <input class="Input" type={Text} value={userID} onChange={(e) => setUserID(e.target.value)}  placeholder="enter hotel's id"></input>
      <User userID={userID}></User> 
    </div>
  );
}