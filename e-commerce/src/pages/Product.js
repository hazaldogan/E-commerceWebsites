import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { data } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faStar,
  faStarHalfAlt,
  faHeart,
  faCartShopping,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ProductCard from "../components/ProductCard";
import Logos from "../components/shop/Logos";
import { imageData } from "../assets/imageData";

export default function Products() {
  const { id } = useParams();
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "400px",
  };
  return (
    <div className="mx-52 max-sm:mx-5">
      <div className="flex items-center my-4 justify-center">
        <h4 className="font-bold text-sm">Home</h4>
        <FontAwesomeIcon
          icon={faChevronRight}
          size="sm"
          className="p-2 text-gray-500"
        />
        <h4 className="text-sm text-gray-500 ">Shop</h4>
      </div>
      <div className="flex gap-10 justify-center items-center max-sm:flex-col">
        <div className="w-[50%] max-sm:w-full">
          {/* <img className="w-full" src={data.productListDetail[id].image} /> */}
          <Slide>
            {imageData.productslide.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage})`,
                  }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
        <div className="flex flex-col items-start text-start w-[50%] max-sm:w-full gap-3">
          <h2 className="font-bold text-lg">
            {data.productListDetail[id].name}
          </h2>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon
              icon={faStar}
              size="md"
              className="text-amber-300"
            />
            <FontAwesomeIcon
              icon={faStar}
              size="md"
              className="text-amber-300"
            />
            <FontAwesomeIcon
              icon={faStar}
              size="md"
              className="text-amber-300"
            />
            <FontAwesomeIcon
              icon={faStar}
              size="md"
              className="text-amber-300"
            />
            <FontAwesomeIcon
              icon={faStarHalfAlt}
              size="md"
              className="text-amber-300"
            />
            <p className="text-sm font-bold text-gray-500">10 reviews</p>
          </div>
          <div className="my-3 flex flex-col gap-2">
            <p className="font-bold text-2xl">
              {data.productListDetail[id].price}
            </p>
            <p className="text-sm font-bold text-gray-500">
              Availability : <span className="text-sky-500">In Stock</span>
            </p>
          </div>
          <p className="text-dm text-gray-500">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <hr />
          <div className="w-20 h-4 justify-start items-center gap-1.5 inline-flex my-3">
            {data.productListDetail[id].colors.map((color, i) => (
              <div key={i} className={color} />
            ))}
          </div>
          <div className="mt-6 flex justify-start gap-3">
            <button className="bg-sky-500 text-white text-sm px-3 py-2 rounded-md">
              Select Options
            </button>
            <div className=" flex items-center p-2 border rounded-[50%]">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="sm"
                className="p-1"
              />
            </div>
            <div className=" flex items-center p-2 border rounded-[50%]">
              <FontAwesomeIcon icon={faHeart} size="sm" className="p-1" />
            </div>
            <div className=" flex items-center p-2 border rounded-[50%]">
              <FontAwesomeIcon icon={faEye} size="sm" className="p-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly my-10">
        <h6 className="font-bold text-sm text-gray-500">Description</h6>
        <h6 className="font-bold text-sm text-gray-500">
          Additional Information
        </h6>
        <h6 className="font-bold text-sm text-gray-500">
          Rewievs <span className="text-emerald-600">(0)</span>
        </h6>
      </div>
      <div className="flex justify-center items-center gap-10 max-sm:flex-col">
        <div className="w-[25%] max-sm:w-full flex justify-end">
          <img className="w-[100%]" src={data.productListDetail[3].image} />
        </div>
        <div className="w-[30%] max-sm:w-full flex flex-col justify-start items-start text-start gap-3 text-sm">
          <h4 className="font-bold text-lg">the quick fox jumps over </h4>
          <div className="flex flex-col gap-2">
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>

            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie.Excitation
              venial consequent sent nostrum met.
            </p>

            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
        </div>
        <div className="w-[30%] max-sm:w-full flex flex-col justify-center items-start text-start gap-2">
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-lg">the quick fox jumps over </h4>
            <div className="flex flex-col gap-1">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="xs"
                  className="p-2 text-gray-500"
                />
                <p>the quick fox jumps over the lazy dog</p>
              </div>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="xs"
                  className="p-2 text-gray-500"
                />
                <p>the quick fox jumps over the lazy dog</p>
              </div>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="xs"
                  className="p-2 text-gray-500"
                />
                <p>the quick fox jumps over the lazy dog</p>
              </div>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="xs"
                  className="p-2 text-gray-500"
                />
                <p>the quick fox jumps over the lazy dog</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-lg">the quick fox jumps over </h4>
            <div className="flex flex-col gap-1">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="xs"
                  className="p-2 text-gray-500"
                />
                <p>the quick fox jumps over the lazy dog</p>
              </div>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="xs"
                  className="p-2 text-gray-500"
                />
                <p>the quick fox jumps over the lazy dog</p>
              </div>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="xs"
                  className="p-2 text-gray-500"
                />
                <p>the quick fox jumps over the lazy dog</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <h2 className="font-bold text-xl text-start max-sm:text-center mx-16 max-sm:mx-5">
          BESTSELLER PRODUCTS
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-7 mt-10">
          {data.bestsellers.map((value, i) => (
            <ProductCard value={value} i={i} />
          ))}
        </div>
      </div>
      <Logos />
    </div>
  );
}
