import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import "./countryDetails.css";

function CountryDetails() {
  let { id } = useParams();
  const API_URL = `https://restcountries.eu/rest/v2/alpha/` + id;

  console.log(API_URL);

  //   Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);

  const [state, setstate] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(API_URL);
    const Data = await response.json();
    setstate(Data);
    console.log(Data);
  };
  return (
    <div className="container countryDetails">
      <div className="row">
        <h2>Country Name: {state.name}</h2>
        <p>Native Name: {state.nativeName}</p>
        <p>Reigon: {state.region}</p>
        <p>Capital: {state.capital}</p>
        <img src={state.flag} />
      </div>
    </div>
  );
}

export default CountryDetails;
