import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { data } from "../data";
import ProductListDetails from "../components/shop/ProductListDetail";
import Logos from "../components/shop/Logos";
import Pagination from "../components/Pagination";

export default function ProductList() {
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
        {data.productcategories.map((value, i) => (
          <div
            key={i}
            className="flex justify-center items-center relative max-sm:text-xs"
          >
            <img className="object-cover" src={value.image} />
            <div className="absolute text-white">
              <h4 className="font-bold">{value.title}</h4>
              <p>{value.items}</p>
            </div>
          </div>
        ))}
      </div>
      <ProductListDetails />
      <Logos />
    </div>
  );
}
