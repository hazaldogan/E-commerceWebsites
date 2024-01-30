import {
  PRODUCT_SUCCESS,
  PRODUCT_ERROR,
  FETCH_LOADING,
  FETCH_MORE_PRODUCTS,
} from "../actions/productActions";

const NOT_FETCHED = "NOT_FETCHED";
const FETCHING = "FETCHING";
const FETCHED = "FETCHED";
const FETCH_FAILED = "FETCH_FAILED";

const initialState = {
  productList: [],
  error: "",
  isLoading: false,
  total: 0,
  fetchState: NOT_FETCHED,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_SUCCESS:
      return {
        ...state,
        productList: action.payload.products,
        total: action.payload.total,
        isLoading: false,
        error: "",
        fetchState: FETCHED,
      };
    case FETCH_MORE_PRODUCTS:
      return {
        ...state,
        fetchState: FETCHED,
        productList: [...state.productList, ...action.payload.productList],
        total: action.payload.total,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        fetchState: FETCH_FAILED,
      };
    case FETCH_LOADING:
      return {
        ...state,
        isLoading: true,
        fetchState: FETCHING,
      };
    default:
      return state;
  }
};
