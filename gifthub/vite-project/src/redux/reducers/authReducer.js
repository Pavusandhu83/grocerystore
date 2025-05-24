
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/authActions';

const initialState = {
  loading: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { ...state, loading: true, error: null };

    case SIGNUP_SUCCESS:
      return { ...state, loading: false, user: action.payload };

    case SIGNUP_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default authReducer; // ✅ Correct default export
