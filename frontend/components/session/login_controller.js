import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';

const mapDispatchToProps = dispatch => ({
  login: admin => dispatch(login(admin))
});

const mapStateToProps = state => ({
  errors: state.errors.session
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);