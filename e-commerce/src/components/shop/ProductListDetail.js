import { data } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function ProductListDetails() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mx-44 my-5">
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
      </div>
      <div className="flex flex-wrap justify-center items-center gap-7 mr-20 ml-24">
        {data.productListDetail.map((value, i) => (
          <div key={i} className="flex flex-col text-center w-[20%]">
            <div className="h-4/5 ">
              <img
                src={value.image}
                className="max-w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex-col gap-2">
              <h5 className="text-slate-800 text-base font-bold ">
                {value.name}
              </h5>
              <h5 className="text-neutral-400 text-sm font-bold ">
                {value.description}
              </h5>
              <div className="flex gap-1 justify-center">
                <h5 className="text-stone-300 text-base font-bold ">
                  {value.price}
                </h5>
                <h5 className="text-teal-700 text-base font-bold">
                  {value.discountPrice}
                </h5>
              </div>
              <div className="w-20 h-4 justify-start items-center gap-1.5 inline-flex">
                {value.colors.map((color, i) => (
                  <div key={i} className={color} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
