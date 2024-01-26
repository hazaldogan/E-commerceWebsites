import { SET_STORE } from "../actions/storeActions";

const initialState = {};

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORE:
      return {
        state: action.payload,
      };
    default:
      return state;
  }
};
