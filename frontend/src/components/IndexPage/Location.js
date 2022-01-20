import { getNodeText } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios';
export default function Form(props) {
    const history = useNavigate();
    const [countries,setCountries] = useState([]);
    const [cities,setCities] = useState(null);
    const [city,setCity] = useState("");
    const [country,setCountry] = useState("");
    useEffect(()=>{
        axios.get(`https://countriesnow.space/api/v0.1/countries`)
        .then(function (response) {
          // handle success
          console.log(Object.values(response.data.data));
          setCountries(Object.values(response.data.data))
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      },[])
 function MoveNext()
 {
  sessionStorage.setItem("country", country);
  sessionStorage.setItem("city", city);
     history.push("/displayData");
 }
  return (<>
 <select   onChange={(e)=>{setCities(e.target.value.split(","));console.log(e.target.key);}}>
 {
          countries.map(item =>
            {
              return <option value={item.cities} key={item.id} name={item.country}>{item.country}</option>
            })
        }
 </select>
 <br></br>
{cities!=null? <select onChange={(e)=>setCity(e.target.value)}>
 {
          cities.map(item =>
            {
              return <option value={item} >{item}</option>
            })
        }
 </select>:''
}
<button onClick={MoveNext}>
next
      </button>
</>
  );
}