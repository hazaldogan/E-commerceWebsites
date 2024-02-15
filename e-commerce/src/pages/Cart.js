import { useDispatch, useSelector } from "react-redux";
import {
  cartRemove,
  setCheck,
  updateCartItemPiece,
} from "../store/actions/shopCartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

export default function Cart() {
  const { cart } = useSelector((store) => store.shopCartReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  function decreaseHandler(id) {
    dispatch(updateCartItemPiece(id, false));
  }
  function increaseHandler(id) {
    dispatch(updateCartItemPiece(id, true));
  }
  let total = cart
    .reduce((sum, item) => {
      return item.checked
        ? sum + item.count * item.product.price.toFixed(2)
        : sum.toFixed(2);
    }, 0)
    .toFixed(2);
  const cargo = 39.99;
  return (
    <div className="m-10 flex justify-center items-center gap-4">
      <div className="shadow-md p-10 rounded-md">
        <p className="mx-40 text-sm border-2 bg-slate-500 text-white p-2 rounded-md border-slate-700">
          You can purchase the products in your cart by selecting an individual
          or corporate invoice.
        </p>
        {cart.map((item) => (
          <div className="mx-20 mt-10 shadow-md rounded-md flex justify-around items-center text-center gap-3">
            <input
              name={`${item.product.id}`}
              type="checkbox"
              defaultChecked={true}
              onChange={(e) => {
                dispatch(setCheck(item.product.id, e.target.checked));
              }}
            />
            <img src={item.product.images[0].url} className="w-[75px]" />
            <p className="m-0">{item.product.name}</p>
            <div className="bg-white flex justify-center gap-2 text-[#344151]">
              <button
                onClick={() => decreaseHandler(item.product.id)}
                className="border-r-2 text-center w-10 border-[#bfbfbf] text-sm"
              >
                -
              </button>

              <div className="font-bold gap-12 text-sm">{item.count}</div>

              <button
                onClick={() => increaseHandler(item.product.id)}
                className="border-l-2 text-center w-10 border-[#bfbfbf] text-sm"
              >
                +
              </button>
            </div>
            <p className="m-0">{item.product.price}</p>
            <FontAwesomeIcon
              icon={faTrash}
              className=" text-neutral hover:text-error cursor-pointer"
              onClick={() => {
                dispatch(cartRemove(item.product.id));
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-start text-start gap-3 w-[25%]">
        <button
          className="border bg-sky-400 rounded-md text-white p-2 w-full"
          onClick={() => history.push("/order")}
        >
          Confirm Cart
        </button>
        <div className="shadow-md rounded-md p-3 w-full">
          <p className="font-bold text-gray-500">Order Summary</p>
          <div className=" flex justify-between">
            <p className="text-xs text-gray-500">Total Product</p>
            <p className="font-bold text-sm text-gray-500">{total}</p>
          </div>
          <div className=" flex justify-between">
            <p className="text-xs text-gray-500">Cargo</p>
            <p className="font-bold text-sm text-gray-500">{cargo}</p>
          </div>
          {total > 300 ? (
            <div className=" flex justify-between">
              <p className="w-[50%]  text-xs text-gray-500">
                Free shipping for your purchases of 300 or more
              </p>
              <p className="font-bold text-sm text-red-400">-39.99</p>
            </div>
          ) : (
            ""
          )}
          <hr />
          <div className=" flex justify-between">
            <p className="text-xs text-gray-500">Total</p>
            <p className="font-bold text-sm text-gray-500">
              {total < 300
                ? parseFloat(Number(total) + Number(cargo)).toFixed(2)
                : total}
            </p>
          </div>
        </div>
        <button
          className="border bg-sky-400 rounded-md text-white p-2 w-full"
          onClick={() => history.push("/order")}
        >
          Confirm Cart
        </button>
      </div>
    </div>
  );
}
