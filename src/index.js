import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Component from "views/Components/Components.js"
import LandingPage from "views/LandingPage/LandingPage.js";
import Custom from "views/Custom/Custom.js";
import Remodel from "views/Remodel/Remodel.js";
import Review from "views/Review/review.js";
import Walk from "views/WalkinPage/Walkin.js";
import ContactPage from "views/ContactPage/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/custom" component={Custom} />
      <Route path="/remodel" component={Remodel} />
      <Route path="/review" component={Review} />
      <Route path="/walk" component={Walk} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/" component={LandingPage} />

    </Switch>
  </Router>,
  document.getElementById("root")
);
