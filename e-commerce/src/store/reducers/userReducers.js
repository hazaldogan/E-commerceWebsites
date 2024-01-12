import { USER_ERROR, USER_LOGOUT, USER_SUCCESS } from "../actions/userActions";

const initialState = {
  user: {},
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {
        user: {},
        error: "",
      };
    case USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
