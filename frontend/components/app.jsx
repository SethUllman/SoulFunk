import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Login from './session/login';
import Home from './home/home';
import Nav from './navigation/navigation';
import Footer from './footer/footer';

const App = () => {
    
  return (
    <div>
      <Nav/>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer/>
    </div>
  );
};

export default App;
