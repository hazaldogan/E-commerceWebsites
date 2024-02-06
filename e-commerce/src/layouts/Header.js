import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faUser,
  faSearch,
  faCartShopping,
  faHeart,
  faBars,
  faAngleDown,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Gravatar from "react-gravatar";
import { cartRemove } from "../store/actions/shopCartActions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const user = useSelector((state) => state.userReducer.user);
  const categories = useSelector((store) => store.globalReducer.categories);
  const { pathname, search } = useLocation();
  const womanCategories = categories.filter(
    (category) => category.gender === "k"
  );
  const manCategories = categories.filter(
    (category) => category.gender === "e"
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const { cart } = useSelector((store) => store.shopCartReducer);
  const productURL = (productName, productId, categoryId) => {
    const catCode = categories.find((c) => c.id == categoryId)?.code;
    const nameSlug = productName.toLowerCase().replaceAll(" ", "-");
    const gender = catCode?.slice(0, 1) == "k" ? "kadin" : "erkek";
    const category = catCode?.slice(2);
    const productURL = `/shopping/${gender}/${category}/${productId}/${nameSlug}`;
    return productURL;
  };
  let productCount = cart.reduce((sum, product) => {
    return sum + product.count;
  }, 0);

  function clickHandler() {
    isActive ? setIsActive(false) : setIsActive(true);
  }

  return (
    <div>
      <div className="bg-[#252B42] text-center items-center justify-between gap-5 flex-wrap flex px-6 max-sm:hidden">
        <div className="flex flex-wrap">
          <div className="text-white items-center  p-2.5 gap-[5px] flex">
            <FontAwesomeIcon icon={faPhone} size="sm" />
            <h6 className="text-sm">(225) 555-0118</h6>
          </div>
          <div className="text-white items-center  p-2.5 gap-[5px] flex">
            <FontAwesomeIcon icon={faEnvelope} size="sm" />
            <h6 className="text-sm">michelle.rivera@example.com</h6>
          </div>
        </div>
        <div className="p-2.5">
          <h6 className="text-white text-sm">
            Follow Us and get a chance to win 80% off
          </h6>
        </div>
        <div className="text-white items-center p-2.5 gap-2.5 flex">
          <h6 className="text-sm ">Follow Us :</h6>
          <div className="items-center pt-1 gap-1 flex flex-wrap">
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} size="sm" className="p-1" />
            </a>
            <a href="https://www.youtube.com/">
              <FontAwesomeIcon icon={faYoutube} size="sm" className="p-1" />
            </a>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} size="sm" className="p-1" />
            </a>
            <a href="https://www.twitter.com/">
              <FontAwesomeIcon icon={faTwitter} size="sm" className="p-1" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap px-10 max-sm:px-0">
        <header className="flex justify-between items-center max-sm:w-full max-sm:px-5 max-sm:pt-5 max-sm:pb-0">
          <Link className="no-underline" to="/">
            <h3 className="text-2xl max-sm:text-sm text-slate-800 font-bold">
              Bandage
            </h3>
          </Link>
          <div className="flex flex-row gap-5">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="sm"
              className="hidden max-sm:block"
            />
            <FontAwesomeIcon
              icon={faSearch}
              size="sm"
              className="hidden max-sm:block"
            />
            <FontAwesomeIcon
              icon={faBars}
              size="sm"
              className="hidden max-sm:block"
              onClick={clickHandler}
            />
          </div>
        </header>
        <nav className="justify-start items-start gap-4 flex max-sm:flex-col max-sm:w-full max-sm:justify-center max-sm:items-center max-sm:gap-5 max-sm:py-8">
          {[
            ["Home", "/"],
            ["Shop", "/shopping"],
            ["About", "/aboutus"],
            ["Blog", "/blog"],
            ["Contact", "/contactus"],
            ["Team", "/team"],
          ].map(([title, url], idx) =>
            title === "Shop" ? (
              <div className="dropdown dropdown-hover">
                <label
                  tabIndex={0}
                  className="text-neutral-500 font-bold text-sm max-sm:text-sm max-sm:font-bold hover:text-slate-900"
                >
                  <Link
                    to="/shopping"
                    className="no-underline text-neutral-500"
                  >
                    Shop
                  </Link>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-neutral-500 font-bold text-sm pl-2"
                  />
                </label>
                <div tabIndex={0} className="dropdown-content z-[1] menu">
                  <div className="p-2 shadow bg-white flex rounded-box gap-4 divide-x-[12px]">
                    <ul>
                      <li className="font-bold text-gray-800">
                        <Link
                          to="/shopping/kadin"
                          className="no-underline text-neutral-500"
                        >
                          Women
                        </Link>
                      </li>
                      {womanCategories.map((category, idx) => {
                        return (
                          <li key={idx}>
                            <Link
                              to={`/shopping/kadin/${category.code.slice(
                                2
                              )}${search}`}
                              className="no-underline text-gray-500"
                            >
                              {category.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <ul>
                      <li className="font-bold text-gray-800">
                        <Link
                          to="/shopping/erkek"
                          className="no-underline text-neutral-500"
                        >
                          Men
                        </Link>
                      </li>
                      {manCategories.map((category, idx) => {
                        return (
                          <li key={idx}>
                            <Link
                              to={`/shopping/erkek/${category.code.slice(
                                2
                              )}${search}`}
                              className="no-underline text-gray-500"
                            >
                              {category.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                to={url}
                key={idx}
                className=" text-neutral-500 font-bold text-sm hover:text-slate-900 max-sm:text-sm no-underline"
              >
                {title}
              </NavLink>
            )
          )}
        </nav>
        <div className=" text-sky-500 items-center flex gap-10 max-sm:hidden">
          {Object.keys(user).length < 1 ? (
            <div className="items-center flex">
              <FontAwesomeIcon icon={faUser} size="sm" />
              <div className=" font-bold text-sm">
                <Link className="no-underline text-sky-500" to="/login">
                  Login{" "}
                </Link>{" "}
                /{" "}
                <Link className="no-underline text-sky-500" to="/signup">
                  Register
                </Link>
              </div>
            </div>
          ) : (
            <div className="items-center flex text-sky-500 font-bold gap-2">
              <div className="h-10 w-10">
                <Gravatar className="rounded-full" email={user.email} />
              </div>
              {user.name}
            </div>
          )}
          <div className="items-center flex">
            <div className=" flex items-center p-4">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="sm"
                className="pr-1 "
              />
              <div className=" font-normal text-sm ">1</div>
            </div>
            <div
              tabIndex={0}
              className="dropdown-content min-w-[20rem] z-[30] right-[1px] menu p-4 shadow-xl bg-white rounded-box "
            >
              <ul className="w-fit gap-1 flex flex-col py-2 ">
                <h2 className="text-slate-700 font-semibold mb-2">{`My Cart (${productCount} Products)`}</h2>
                {cart.map((item, index) => {
                  console.log(item);
                  return (
                    <li
                      key={index}
                      className="border rounded shadow-md "
                      onClick={() =>
                        history.push(
                          productURL(item.name, item.id, item.category_id)
                        )
                      }
                    >
                      <div className="flex gap-4 justify-between ">
                        <div className="flex gap-4 h-fit my-1">
                          <img
                            src={item.images[0] ? item.images[0].url : ""}
                            className="h-16 object-cover "
                          />
                          <div className="flex flex-col justify-center text-slate-700 ">
                            <h3 className=" font-semibold ">{item.name}</h3>
                            <p className="font-normal text-xs text-slate-500">
                              Amount: {item.count}
                            </p>
                            <p className="font-semibold ">
                              {`$${(item.price * item.count).toFixed(2)}`}
                            </p>
                          </div>
                        </div>
                        <FontAwesomeIcon
                          icon={faTrash}
                          className=" text-neutral hover:text-error cursor-pointer"
                          onClick={() => {
                            dispatch(cartRemove(item.id));
                          }}
                        />
                      </div>
                    </li>
                  );
                })}
                {/* {cart.length ? (
                  <div className="flex gap-2 justify-between">
                    <Link to="/cart">
                      <button className="ring-1 bg-[#0ea5e9] ring-slate-100 text-white font-semibold rounded-md py-2 px-4">
                        Go to Cart
                      </button>
                    </Link>
                    <button
                      className="ring-1 bg-[#0ea5e9] ring-slate-100 text-white font-semibold rounded-md py-2 px-4"
                      onClick={() => {
                        history.push("/order");
                      }}
                    >
                      Confirm Order
                    </button>
                  </div>
                ) : (
                  <p className="pt-3 text-error font-semibold">
                    Your cart is empty.
                  </p>
                )} */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
