import { useDispatch, useSelector } from "react-redux";
import {
  cartRemove,
  updateCartItemPiece,
} from "../store/actions/shopCartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const { cart } = useSelector((store) => store.shopCartReducer);
  const dispatch = useDispatch();
  function decreaseHandler(id) {
    dispatch(updateCartItemPiece(id, false));
  }
  function increaseHandler(id) {
    dispatch(updateCartItemPiece(id, true));
  }
  return (
    <div className="mt-10">
      <p className="mx-40 text-start text-sm border-2 bg-slate-500 text-white p-2 rounded-md border-slate-700">
        You can purchase the products in your cart by selecting an individual or
        corporate invoice.
      </p>
      {cart.map((item) => (
        <div className="mx-40 mt-10 shadow-md rounded-md flex justify-around items-center text-center gap-3">
          <img src={item.images[0].url} className="w-[75px]" />
          <p className="m-0">{item.name}</p>
          <div className="bg-white flex justify-center gap-2 text-[#344151]">
            <button
              onClick={() => decreaseHandler(item.id)}
              className="border-r-2 text-center w-10 border-[#bfbfbf] text-sm"
            >
              -
            </button>

            <div className="font-bold gap-12 text-sm">{item.count}</div>

            <button
              onClick={() => increaseHandler(item.id)}
              className="border-l-2 text-center w-10 border-[#bfbfbf] text-sm"
            >
              +
            </button>
          </div>
          <p className="m-0">{item.price}</p>
          <FontAwesomeIcon
            icon={faTrash}
            className=" text-neutral hover:text-error cursor-pointer"
            onClick={() => {
              dispatch(cartRemove(item.id));
            }}
          />
        </div>
      ))}
    </div>
  );
}
