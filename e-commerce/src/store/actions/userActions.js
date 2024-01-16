import { API } from "../../api/axios";
import { toast } from "react-toastify";

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
      toast.success("Sign-up successful!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      history.push("/");
    })
    .catch((err) => {
      dispatch(userError(err));
      toast.error("An error occurred during the operation", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    });
};

export const login = (data, history) => (dispatch) => {
  API.post("/login", data)
    .then((res) => {
      dispatch(userSuccess(res.data));
      toast.success("Login successful!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      history.push("/");
    })
    .catch((err) => {
      dispatch(userError(err));
      toast.error("An error occurred during the operation", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    });
};

export const logout = (history) => (dispatch) => {
  dispatch(userLogout);
  toast.success("Logout successful!", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
  history.push("/");
};
