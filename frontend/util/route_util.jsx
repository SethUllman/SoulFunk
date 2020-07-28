import React from 'react';
import {useSelector} from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';



const AuthRoute = ({path, component: Component}) => {
  const admin = useSelector(state => state.session.currentAdmin);
  return <Route
    path={path}
    render={(props) => (
      admin ? <Component {...props}/> : <Redirect to="/" />
    )}
  />

};

export default AuthRoute;