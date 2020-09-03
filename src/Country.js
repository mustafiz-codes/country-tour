import React from "react";
import "./country.css";

const Country = ({ name, flag }) => {
  // viewDetails
  return (
    <div className="col-md-4 col-sm-6">
      <div className="text-center country">
        <h3>{name}</h3>
        <img className="countryFlag" src={flag} alt={name} />
        <br />
        <button className="btn btn-sm btn-info">View Details</button>
      </div>
    </div>
  );
};

export default Country;
