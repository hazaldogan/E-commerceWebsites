import React, { useEffect, useState } from "react";
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
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import ProductCard from "../components/ProductCard";
import Logos from "../components/shop/Logos";
import { API } from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { cartAdd, updateCartItemPiece } from "../store/actions/shopCartActions";
import { toast } from "react-toastify";

export default function Products() {
  const { productId } = useParams();
  const [product, setProduct] = useState({ images: [] });
  const products = useSelector((store) => store.productReducer.productList);
  const productsHome = products
    .sort((a, b) => {
      return b.rating - a.rating;
    })
    .slice(0, 8);

  const history = useHistory();
  const { cart } = useSelector((store) => store.shopCartReducer);
  const dispatch = useDispatch();

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "400px",
  };

  useEffect(() => {
    API.get(`/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [productId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToCartHandler = () => {
    let isAvailable = false;
    cart.map((item) => {
      if (item.id === productId) isAvailable = true;
      return item;
    });
    if (isAvailable) {
      dispatch(updateCartItemPiece(productId, true));
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
      dispatch(cartAdd(product));
    }
  };

  return (
    <div className="mx-52 max-sm:mx-5">
      <div className="flex items-center my-4 justify-between">
        <div>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="lg"
            className="p-2 text-gray-500 cursor-pointer"
            onClick={() => history.goBack()}
          />
        </div>
        <div className="flex">
          <h4 className="font-bold text-sm">Home</h4>
          <FontAwesomeIcon
            icon={faChevronRight}
            size="sm"
            className="p-2 text-gray-500"
          />
          <h4 className="text-sm text-gray-500 ">Shop</h4>
        </div>
      </div>
      <div className="flex gap-10 justify-center items-center max-sm:flex-col">
        <div className="w-[50%] max-sm:w-full">
          {product.images.length > 0 && (
            <Slide>
              {product.images.map((slideImage, index) => (
                <div key={index}>
                  <div
                    style={{
                      ...divStyle,
                      backgroundImage: `url(${slideImage.url})`,
                    }}
                  ></div>
                </div>
              ))}
            </Slide>
          )}
        </div>
        <div className="flex flex-col items-start text-start w-[50%] max-sm:w-full gap-3">
          <h2 className="font-bold text-lg">{product.name}</h2>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon
              icon={faStar}
              size="sm"
              className="text-amber-300"
            />
            <FontAwesomeIcon
              icon={faStar}
              size="sm"
              className="text-amber-300"
            />
            <FontAwesomeIcon
              icon={faStar}
              size="sm"
              className="text-amber-300"
            />
            <FontAwesomeIcon
              icon={faStar}
              size="sm"
              className="text-amber-300"
            />
            <FontAwesomeIcon
              icon={faStarHalfAlt}
              size="sm"
              className="text-amber-300"
            />
            <p className="text-sm font-bold text-gray-500">10 reviews</p>
          </div>
          <div className="my-3 flex flex-col gap-2">
            <p className="font-bold text-2xl">{product.price}</p>
            <p className="text-sm font-bold text-gray-500">
              Availability :{" "}
              <span className="text-sky-500">
                {product.stock > 0 ? "In Stock" : "No Stock"}
              </span>
            </p>
          </div>
          <p className="text-dm text-gray-500">{product.description}</p>
          <div className="mt-6 flex justify-start gap-3">
            <div className=" flex items-center p-2 border rounded-[50%]">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="sm"
                className="p-1 cursor-pointer"
                onClick={addToCartHandler}
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
          {productsHome.map((value, i) => (
            <ProductCard value={value} i={i} />
          ))}
        </div>
      </div>
      <Logos />
    </div>
  );
}
