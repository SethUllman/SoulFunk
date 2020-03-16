import { combineReducers } from 'redux';
import sessionReducer from './sessions_reducer';
import errorsReducer from './session_errors_reducer';

export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});