import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
