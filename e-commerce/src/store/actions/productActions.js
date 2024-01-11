export const PRODUCT_SUCCESS = "PRODUCT SUCCESS";
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
