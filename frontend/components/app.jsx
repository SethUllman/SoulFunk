import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Login from './session/login';
import Home from './home/home';

const App = () => {
    
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  )
};

export default App;

