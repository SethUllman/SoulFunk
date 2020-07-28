import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthRoute from '../util/route_util';
import Login from './session/login';
import Home from './home/home';
import Nav from './navigation/navigation';
import MembersIndex from './members/members_index';
import MemberForm from './members/member_form';
import MemberUpdateForm from './members/member_update_form';
import ShowsIndex from './shows/show_index';
import ShowForm from './shows/show_form';
import Footer from './footer/footer';
import Contact from './contact/contact';

const App = () => {
    
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/shows" component={ShowsIndex} />
        <Route path="/contact" component={Contact} />
        <Route path="/new-show" component={ShowForm} />
        <Route exact path="/members" component={MembersIndex} />
        <Route path="/members/:memberId" component={MemberUpdateForm} />
        <AuthRoute path="/new-member" component={MemberForm} />
      </Switch>
      <Footer/>
    </div>
  );
};

export default App;

