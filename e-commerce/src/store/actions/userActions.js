import { API } from "../../api/axios";

export const USER_SUCCESS = "USER SUCCESS";
export const USER_ERROR = "USER ERROR";
export const USER_LOGOUT = "USER LOGOUT";

export const userSuccess = (res) => {
  return {
    type: types.USER_SUCCESS,
    payload: res,
  };
};

export const userError = (message) => {
  return {
    type: types.USER_ERROR,
    payload: message,
  };
};

export const userLogout = () => {
  return {
    type: types.USER_LOGOUT,
  };
};

export const signUp = (data, history) => (dispatch) => {
  API.post("/signup", data)
    .then((res) => {
      dispatch(userSuccess(res.data));
      history.push("/");
    })
    .catch((err) => {
      dispatch(userError(err));
    });
};
