import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Login from './session/login.jsx';

export default () => (
  <Switch>
    <AuthRoute path="/home" component={Login} />
  </Switch>
)