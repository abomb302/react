import React from 'react'
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

var routes = (
  <Router>
    <Route exact path="/" component={Login} />
    <Route exact path="/home" component={Home} />
  </Router>);


export default routes;