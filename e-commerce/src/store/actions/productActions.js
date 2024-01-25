import { API } from "../../api/axios";
import { toast } from "react-toastify";

export const PRODUCT_SUCCESS = "PRODUCT SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";
export const PRODUCT_ERROR = "PRODUCT ERROR";

export const productSuccess = (productList) => {
  return {
    type: PRODUCT_SUCCESS,
    payload: productList,
  };
};

export const productError = (message) => {
  return {
    type: PRODUCT_ERROR,
    payload: message,
  };
};

export const fetchLoading = () => {
  return {
    type: FETCH_LOADING,
  };
};

export const fetchProduct = (data) => (dispatch) => {
  dispatch(fetchLoading());
  toast.loading("Please wait...", {
    autoClose: 2000,
    closeOnClick: true,
  });
  API.get("/products", data)
    .then((res) => {
      dispatch(productSuccess(res.data));
    })
    .catch((err) => {
      dispatch(productError(err.message));
    });
};
