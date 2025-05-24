
import axios from 'axios';

// Action Types
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT = 'LOGOUT';

// Signup Action
export const signupUser = (name, email, password) => async (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });

  try {
    const response = await axios.post('http://localhost:5000/api/signup', { name, email, password });

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: response.data, // Assuming response.data contains user info and token
    });

    return response.data; // Return data to handle UI updates
  } catch (error) {
    dispatch({
      type: SIGNUP_FAILURE,
      payload: error.response?.data?.message || 'Signup failed',
    });
    throw error;
  }
};

// Login Action
export const loginUser = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const response = await axios.post('http://localhost:5000/api/login', { email, password });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data, // Assuming response.data contains user info and token
    });

    return response.data;
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response?.data?.message || 'Login failed',
    });
    throw error;
  }
};

// Logout Action
export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
