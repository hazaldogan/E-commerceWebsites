import { API } from "../../api/axios";
import { toast } from "react-toastify";

export const PRODUCT_SUCCESS = "PRODUCT SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";
export const PRODUCT_ERROR = "PRODUCT ERROR";
export const FETCH_MORE_PRODUCTS = "FETCH_MORE_PRODUCTS";

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

export const fetchProduct = (params) => (dispatch) => {
  dispatch(fetchLoading());
  toast.loading("Please wait...", {
    autoClose: 2000,
    closeOnClick: true,
  });
  API.get("/products", { params })
    .then((res) => {
      dispatch(productSuccess(res.data));
    })
    .catch((err) => {
      dispatch(productError(err.message));
    });
};

const fetchMoreProducts = (productList, total) => ({
  type: FETCH_MORE_PRODUCTS,
  payload: {
    productList,
    total,
  },
});

export const addMoreProducts = (params) => {
  return (dispatch) => {
    dispatch(fetchLoading());
    API.get("/products", { params })
      .then((response) => {
        dispatch(
          fetchMoreProducts(response.data.products, response.data.total)
        );
      })
      .catch((error) => {
        dispatch(productError(error.message));
      });
  };
};
