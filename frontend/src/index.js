import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react'

import "./styles/main.css";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth.js"
import Dashboard from "./pages/User/Dashboard.js"


ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider domain={'khalea-dev.us.auth0.com'} 
      clientId={'BN3cdFv8UYVeJwHftMn9yhXOWHIUhBde'} 
      redirectUri={window.location.origin}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Auth" component={Auth} />
          <Route exact path="/Dashboard" component={Dashboard} />
        </Switch>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
