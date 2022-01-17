import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import ReactDOM from 'react-dom';

import React, { useState, useEffect, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Skeleton } from 'primereact/skeleton';


export default function Search(){

    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [selectedCity1, setSelectedCity1] = useState(null);
    const [selectedCity2, setSelectedCity2] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedGroupedCity, setSelectedGroupedCity] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItem2, setSelectedItem2] = useState(null);

    let loadLazyTimeout = useRef(null);

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    const rate = [1,2,3,4,5];

   

    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    },[]); // eslint-disable-line react-hooks/exhaustive-deps

    const onCityChange = (e) => {
        setSelectedCity1(e.value);
    }

    const onCityChange2 = (e) => {
        setSelectedCity2(e.value);
    }

    const handleSearch = (e) => {
        setSelectedCity2(e.value);
    }



    return (
        <div className="dropdown-demo">
            <div className="card">
            <table>
                <tr><td>
                <Dropdown value={selectedCity1} options={rate} onChange={onCityChange}  placeholder="rate" />
                </td><td>
                <Dropdown value={selectedCity2} options={cities} onChange={onCityChange2} optionLabel="name" editable placeholder="Select a City"/>
            </td>
            <td>
                <button on onClick={handleSearch}>search</button>
            </td></tr>
            </table>
               
            </div>
        </div>
    );
}
                

    