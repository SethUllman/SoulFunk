import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Login from './session/login.jsx';

export default () => (
  <Switch>
    <Route path="/home" component={Login} />
  </Switch>
);