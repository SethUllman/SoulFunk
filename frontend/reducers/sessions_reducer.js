import { RECEIVE_CURRENT_ADMIN, LOGOUT_CURRENT_ADMIN } from '../actions/session_actions';

const _nullSession = {
  currentAdmin: null
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVVE_CURRENT_ADMIN:
      return Object.assign({}, { currentAdmin: action.user.admin});
    case LOGOUT_CURRENT_ADMIN:
      return state;
    default:
      return state;
  }
};