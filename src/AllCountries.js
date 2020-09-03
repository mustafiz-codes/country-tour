import React, { useEffect, useState } from "react";
import Country from "./Country";

function AllCountries() {
  const API_URL = `https://restcountries.eu/rest/v2/all`;

  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);

  const [state, setstate] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setstate(data);
    // console.log(state);
    // console.log(data);
  };

  return (
    <div>
      {/* <h1 className="text-primary text-center">All Countries</h1> */}
      <div className="container">
        <div className="row">
          {state.map((country) => (
            <Country name={country.name} flag={country.flag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllCountries;
