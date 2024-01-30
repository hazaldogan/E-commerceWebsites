import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { data } from "../data";
import ProductListDetails from "../components/shop/ProductListDetail";
import Logos from "../components/shop/Logos";
import Pagination from "../components/Pagination";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";

export default function ProductList() {
  const categories = useSelector((store) => store.globalReducer.categories);
  const { search } = useLocation();
  const sortedCategories = categories
    .sort((a, b) => {
      return b.rating - a.rating;
    })
    .slice(0, 5)
    .map((value, i) => {
      return (
        <div
          key={i}
          className="flex justify-center items-center relative max-sm:text-xs w-[100%]"
        >
          <img className="object-cover h-[75%]" src={value.img} />
          <div className="absolute text-white">
            <Link
              className="no-underline text-white"
              to={`/shopping/kadin/${value.code.slice(2)}${search}`}
            >
              <h4 className="font-bold">{value.title}</h4>
            </Link>
          </div>
        </div>
      );
    });

  return (
    <div className="mx-12">
      <div className="flex max-sm:flex-col max-sm:gap-5 max-sm:pb-5 justify-around h-14 items-center my-4">
        <h2 className="font-bold text-xl  max-sm:text-sm">Shop</h2>
        <div className="flex items-center">
          <h4 className="font-bold text-sm  max-sm:text-xs">Home</h4>
          <FontAwesomeIcon
            icon={faChevronRight}
            size="sm"
            className="p-2 text-gray-500"
          />
          <h4 className="text-sm text-gray-500 ">Shop</h4>
        </div>
      </div>
      <div className="flex max-sm:flex-col gap-3 justify-center">
        {sortedCategories}
      </div>
      <ProductListDetails />
      <Logos />
    </div>
  );
}
