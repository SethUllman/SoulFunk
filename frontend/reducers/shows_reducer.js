import { RECEIVE_SHOWS, CREATE_SHOW, REMOVE_SHOW, UPDATE_SHOW } from '../actions/show_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SHOWS:
      debugger;
      return action.shows;
    case CREATE_SHOW:
      return Object.assign([], state, {[action.show.id]: action.show});
    case REMOVE_SHOW:
      return state;
    case UPDATE_SHOW:
      return state;
    default:
      return state;
  }
};