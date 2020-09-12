import React from "react";
import "./country.css";
import { Link } from "react-router-dom";

const Country = ({ alpha2Code, name, flag }) => {
  // viewDetails

  // function showAlpha(alpha2Code) {
  //   console.log(alpha2Code);
  // }

  return (
    <div className="col-md-4 col-sm-6">
      <div className="text-center country">
        <h3>{name}</h3>
        <img className="countryFlag" src={flag} alt={name} />
        <br />

        <Link className="btn btn-sm btn-info" to={alpha2Code} alp={alpha2Code}>
          Get Info
        </Link>

        {/* <CountryDetails alp={alpha2Code} /> */}

        <br />
        {/* <Link className="btn btn-sm btn-info" to={alpha2Code}>
          Send
        </Link> */}

        <Link className="btn btn-sm btn-primary" to="/Visited">
          Mark as visited
        </Link>
      </div>
    </div>
  );
};

export default Country;
