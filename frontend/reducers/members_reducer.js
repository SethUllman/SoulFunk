import { RECEIVE_MEMBERS, CREATE_MEMBER, REMOVE_MEMBER, UPDATE_MEMBER } from '../actions/member_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_MEMBERS:
      return action.members;
    case CREATE_MEMBER:
      return state;
    case REMOVE_MEMBER:
      return action.memberId;
    case UPDATE_MEMBER:
      return state;
    default:
      return state;
  }
};