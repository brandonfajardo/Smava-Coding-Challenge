import { combineReducers } from 'redux';
import registerReducer from './register'

const rootReducer = combineReducers({
  register: registerReducer
});

export default rootReducer;
