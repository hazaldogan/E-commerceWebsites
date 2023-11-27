import { data } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "../DropdownMenu";
import ProductCard from "../ProductCard";

export default function ProductListDetails() {
  return (
    <div>
      <div className="flex justify-around items-center mx-20 my-5">
        <p className="text-sm font-bold text-gray-500">
          Showing all 12 results
        </p>
        <div className="flex gap-4 items-center">
          <h4 className="text-sm font-bold text-gray-500">Views:</h4>
          <FontAwesomeIcon
            icon={faGrip}
            size="sm"
            className="border-solid p-2 rounded-sm border-gray-300 border"
          />
          <FontAwesomeIcon
            icon={faList}
            size="sm"
            className="border-solid p-2 rounded-sm border-gray-300 border"
          />
        </div>
        <div className="flex gap-2">
          <DropdownMenu />
          <button className="bg-sky-400 px-6 py-2 rounded-md text-white font-bold text-sm">
            Filter
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-7 mr-20 ml-24">
        {data.productListDetail.map((value, i) => (
          <ProductCard value={value} i={i} />
        ))}
      </div>
    </div>
  );
}
