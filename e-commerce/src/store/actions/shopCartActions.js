import { toast } from "react-toastify";
import axiosWithAuth from "../../api/axiosWithAuth";

export const CART_ADD = "CART_ADD";
export const CART_REMOVE = "CART_REMOVE";
export const UPDATE_CART_ITEM_PIECE = "UPDATE_CART_ITEM_PIECE";
export const ADDRESS_ADD = "ADDRESS_ADD";
export const CART_CLEAR = "CART_CLEAR";
export const UPDATE_PAYMENT = "UPDATE_PAYMENT";

export const cartAdd = (product) => {
  return {
    type: CART_ADD,
    payload: product,
  };
};

export const cartRemove = (productId) => {
  return {
    type: CART_REMOVE,
    payload: productId,
  };
};

export const updateCartItemPiece = (productId, count) => {
  return {
    type: UPDATE_CART_ITEM_PIECE,
    payload: { productId, count },
  };
};

export const updatePayment = (payment) => {
  return {
    type: UPDATE_PAYMENT,
    payload: payment,
  };
};

export const cartClear = () => {
  return {
    type: CART_CLEAR,
  };
};

export const addressAdd = (address) => {
  return {
    type: ADDRESS_ADD,
    payload: address,
  };
};

export const addAdress = (address) => {
  axiosWithAuth
    .post("/user/address", address)
    .then((res) => {
      console.log(res);
      toast.success("Address registered successfully!", {
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
    })
    .catch((err) => {
      console.log(err);
      toast.error("Address registered failed", {
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
