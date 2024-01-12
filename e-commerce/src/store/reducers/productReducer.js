import { PRODUCT_SUCCESS, PRODUCT_ERROR } from "../actions/productActions";

const initialState = {
  productList: [],
  error: "",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_SUCCESS:
      return {
        ...state,
        productList: action.payload,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
