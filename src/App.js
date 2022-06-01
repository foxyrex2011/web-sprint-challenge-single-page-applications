import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Form from "./Form";

const App = () => {
  return (
    <div className = "App">
      <nav>
        <h1>Lambda Eats</h1>
        <div className = "nav-links">
          <Link to="/" >Home</Link>
          <Link to="/pizza" id="order-pizza">Pizza?</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/pizza">
          <Form />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  )
};
export default App;
