import { combineReducers } from 'redux';
import sessionReducer from './sessions_reducer';
import errorsReducer from './session_errors_reducer';
import memberReducer from './members_reducer';
import showReducer from './shows_reducer';

export default combineReducers({
  shows: showReducer,
  members: memberReducer,
  session: sessionReducer,
  errors: errorsReducer
});