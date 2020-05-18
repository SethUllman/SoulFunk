import { RECEIVE_MEMBERS, RECEIVE_MEMBER, CREATE_MEMBER, REMOVE_MEMBER, UPDATE_MEMBER } from '../actions/member_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_MEMBERS:
      return action.members;
    case RECEIVE_MEMBER:
      debugger;
      return action.member
    case CREATE_MEMBER:
      return Object.assign([], state, {[action.member.id]: action.member});
    case REMOVE_MEMBER:
      return action.memberId;
    case UPDATE_MEMBER:
      return state;
    default:
      return state;
  }
};