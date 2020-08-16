import React from "react";
import "./App.css";
import Topnav from "./components/Topnav";
import Banner from "./components/Banner";
import MainBody from "./components/MainBody";
import Authorization from "./components/Athorization";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Athorization from "./components/Athorization";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <Athorization />
            <Link to="/">Back to Home</Link>
          </Route>
          <Route path="/cart">
            <h1>Our Cart</h1>
            <Link to="/">Back to Home</Link>
          </Route>
          <Route path="/">
            <Topnav />
            <Banner />
            <MainBody />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
