import {Component} from 'react';
import React, {useState, useEffect} from 'react';
import UtilsService from './UtilsService';


export default function User(props){
  const [name,setName]= useState([]);
  const utilsService = new UtilsService();

  useEffect(() => {
     utilsService.getItemsById("http://localhost:3001/api/hotels",props.userID).then(data => {setName(data.name);});
  }, [props.userID]);
  
  return(<div>{name}</div>)
}