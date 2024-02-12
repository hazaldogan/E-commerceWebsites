import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartAdd, updateCartItemPiece } from "../store/actions/shopCartActions";
import { toast } from "react-toastify";

export default function ProductCard({ value }) {
  const categories = useSelector((store) => store.globalReducer.categories);
  const nameSlug = value.name.toLowerCase().replaceAll(" ", "-");
  const categoryCode = categories.find((c) => c.id == value.category_id)?.code;
  const gender = categoryCode?.slice(0, 1) == "k" ? "kadin" : "erkek";
  const category = categoryCode?.slice(2);
  const productURL = `/shopping/${gender}/${category}/${value.id}/${nameSlug}`;
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.shopCartReducer);

  const addToCartHandler = () => {
    let isAvailable = false;
    cart.map((item) => {
      if (item.id === value.id) isAvailable = true;
      return item;
    });
    if (isAvailable) {
      dispatch(updateCartItemPiece(value.id, true));
      toast.success("Add to cart successful!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      dispatch(cartAdd(value));
    }
  };

  return (
    <Link
      className="flex flex-col text-center w-[20%] max-sm:w-full items-center justify-center no-underline shadow-md rounded-md"
      to={productURL}
    >
      <div className="h-[300px] max-sm:h-full">
        <img
          src={value.images[0].url}
          className="max-w-full h-[300px] object-cover items-center"
        />
      </div>
      <div className="p-6 flex-col gap-2">
        <h5 className="text-slate-800 text-base font-bold ">{value.name}</h5>
        <h5 className="text-neutral-400 text-sm font-bold ">
          {value.description}
        </h5>
        <div className="flex gap-1 justify-center">
          <h5 className="text-teal-700 text-base font-bold">{value.price}</h5>
        </div>
        <button
          className="border p-2 rounded-md bg-sky-300 text-white text-sm"
          onClick={addToCartHandler}
        >
          Add To Cart
        </button>
      </div>
    </Link>
  );
}
