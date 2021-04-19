import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from '../../pages/Login/login';
import Register from '../../pages/Register/register';
import Dashboard from '../../dashboard';
import About from '../../about';
import Inputdata from '../../pages/inputdata';

const Routes = () => {
    return (
      <Router>
        <Switch>
          <Route path="/login">
             <Login />
          </Route>
          <Route path="/register">
             <Register />
          </Route>
          <Route exact path="/">
             <Dashboard />
          </Route>
          <Route path="/about">
             <About />
          </Route>
          <Route path="/inputdata">
             <Inputdata />
          </Route>
        </Switch>
      </Router>
    );
};

export default Routes;
