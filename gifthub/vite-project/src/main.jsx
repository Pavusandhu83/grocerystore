import React from 'react';
import ReactDOM from 'react-dom/client'; // Change this line
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App'; // Assuming you have an App component

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
