import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Login from './session/login_container';

class App extends React.Component{
  render(){
    return(
      <Login/>
    );
  }
  // <Switch>
  //   <Route path="/" component={Login} />
  // </Switch>
};

export default App;