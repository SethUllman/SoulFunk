import { combineReducers } from 'redux';
import sessionReducer from './sessions_reducer';
import errorsReducer from './session_errors_reducer';
import memberReducer from './members_reducer';

export default combineReducers({
  members: memberReducer,
  session: sessionReducer,
  errors: errorsReducer
});