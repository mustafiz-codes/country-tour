import React from "react";
// import Visited from "./Visited";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./header.css";
// import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/visited">Visited</Link>
          </li>
        </ul>
      </nav>

      <h1 className="text-center text-primary">Know All Countries</h1>
    </div>
  );
}

export default Header;
