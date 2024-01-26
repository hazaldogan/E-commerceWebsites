import {
  CART_ADD,
  CART_REMOVE,
  ADDRESS_ADD,
  UPDATE_CART_ITEM_PIECE,
  CART_CLEAR,
  UPDATE_PAYMENT,
} from "../actions/shopCartActions";

const initialState = {
  cart: [],
  payment: {},
  address: {},
};

export const shopCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            count: 1,
            ...action.payload,
          },
        ],
      };
    case CART_REMOVE:
      const removedCart = state.cart.filter(
        (item) => item.product.id !== action.payload
      );
      return {
        ...state,
        cart: removedCart,
      };
    case UPDATE_CART_ITEM_PIECE:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload.productId
            ? { ...item, count: action.payload.count }
            : item
        ),
      };
    case CART_CLEAR:
      return initialState;
    case UPDATE_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case ADDRESS_ADD:
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};
