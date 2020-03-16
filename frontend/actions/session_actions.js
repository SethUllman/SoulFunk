import {postAdmin, postSession, deleteSession} from '../util/session_api_util';

export const RECEIVE_CURRENT_ADMIN = 'RECEIVE_CURRENT_ADMIN';
export const LOGOUT_CURRENT_ADMIN = 'LOGOUT_CURRENT_ADMIN';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentAdmin = admin => {
  return {
    type: RECEIVE_CURRENT_ADMIN,
    admin
  }
}

const logoutCurrentAdmin = () => {
  return {
    type: LOGOUT_CURRENT_ADMIN
  }
}

const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}

export const login = admin => dispatch => (postSession(admin)
    .then( admin => (dispatch(receiveCurrentAdmin(admin))), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  )));

export const logout = () => dispatch => deleteSession()
    .then( () => dispatch(logoutCurrentAdmin()));