// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer'; // Importing the rootReducer

const store = configureStore({
  reducer: rootReducer,  // The root reducer will combine all reducers
  devTools: process.env.NODE_ENV !== 'production',  // Enable DevTools in non-production environments
});

export default store;
