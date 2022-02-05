import React, { useState, useEffect } from "react";
import Hotels from "./Hotels";
import UtilsService from "../UtilsService";
import "../../style/IndexPage.css";

import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

export default function Search() {
  const [rate, setSelectedRate] = useState(null);
  const [county, setCountry] = useState([]);
  const [cliked, setCliked] = useState(0);
  const [hotels, setHotels] = useState([]);

  const rates = [3, 4, 5];

  useEffect(() => {
    const utilsService = new UtilsService();
    utilsService.getItems("http://localhost:3001/api/hotels").then((data) => {
      setHotels(data);
      console.log(data);
    });
  }, []);

  const onRateChange = (e) => {
    setSelectedRate(e.value);
  };

  return (
    <div>
      <div className="dropdown-demo">
        <div className="card">
          <table className="select">
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
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => {
                      setCountry(e.target.value);
                      console.log(e.target.value);
                    }}
                    placeholder="Select a City"
                  >
                    {" "}
                    <option defaultValue>Select a City</option>
                    {hotels.map((item, index) => {              
                          <option
                            value={item.address.split(", ").pop()}
                            key={item.address.split(", ").pop()}
                            name={item.address.split(", ").pop()}
                          >
                            {item.address.split(", ").pop()}
                          </option>                    
                    })}
                  </select>
                </td>
                <td>
                  <Button
                    label="Search"
                    className="p-button-outlined p-button-secondary"
                    onClick={() => setCliked(1)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {cliked === 1 ? <Hotels country={county} stars={rate} /> : <Hotels />}
    </div>
  );
}
