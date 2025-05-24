import { combineReducers } from 'redux';
import authReducer from './authReducer'; // ✅ Correct import (no curly braces)
import cartReducer from './cartReducer'
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer, 
});

export default rootReducer;
