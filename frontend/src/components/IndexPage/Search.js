import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import ReactDOM from "react-dom";

import React, { useState, useEffect, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import { Skeleton } from "primereact/skeleton";
import { Button } from "primereact/button";

export default function Search() {
  const [lazyItems, setLazyItems] = useState([]);
  const [lazyLoading, setLazyLoading] = useState(false);
  const [rate, setSelectedRate] = useState(null);
  const [selectedCity2, setSelectedCity2] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedGroupedCity, setSelectedGroupedCity] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);

  let loadLazyTimeout = useRef(null);

  const cities = [
    { name: "Tel Aviv-Yafo", code: "NY" },
    { name: "Tiberias", code: "RM" },
    { name: "Eilat", code: "LDN" },
    { name: "Herzelia", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const rates = [1, 2, 3, 4, 5];

  const items = Array.from({ length: 100000 }).map((_, i) => ({
    label: `Item #${i}`,
    value: i,
  }));

  useEffect(() => {
    setLazyItems(Array.from({ length: 100000 }));
    setLazyLoading(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onRateChange = (e) => {
    setSelectedRate(e.value);
  };

  const onCityChange2 = (e) => {
    setSelectedCity2(e.value.name);
  };


  return (
    <div className="dropdown-demo">
      <div className="card">
        <table>
            <tbody>
          <tr>
            <td>
              <Dropdown
                value={rate}
                options={rates}
                onChange={onRateChange}
                placeholder="rate"
              />
            </td>
            <td>
              <Dropdown
                value={selectedCity2}
                options={cities}
                onChange={onCityChange2}
                optionLabel="name"
                editable
                placeholder="Select a City"
              />
            </td>
            <td>
              <Button
                label="Search"
                className="p-button-outlined p-button-secondary"
              />
            </td>
            <td>
              {selectedCity2}
              {rate}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
