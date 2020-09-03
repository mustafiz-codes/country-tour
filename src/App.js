import React from "react";
import AllCountries from "./AllCountries";
import Header from "./Header";
import Visited from "./Visited";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/visited">
            <Header />
            <Visited />
          </Route>
          {/* <Route path="/login">
            <h1>Login</h1>
          </Route> */}
          <Route path="/">
            <Header />
            <AllCountries />
            {/* <Product /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
