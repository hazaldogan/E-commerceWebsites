import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faUser,
  faSearch,
  faCartShopping,
  faHeart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  function clickHandler() {
    isActive ? setIsActive(false) : setIsActive(true);
  }

  return (
    <div>
      <div className="bg-[#252B42] text-center items-center justify-between gap-5 flex-wrap flex px-6 max-sm:hidden">
        <div className="flex flex-wrap">
          <div className="text-white items-center  p-2.5 gap-[5px] flex">
            <FontAwesomeIcon icon={faPhone} size="sm" />
            <h6 className="text-sm font-bold">(225) 555-0118</h6>
          </div>
          <div className="text-white items-center  p-2.5 gap-[5px] flex">
            <FontAwesomeIcon icon={faEnvelope} size="sm" />
            <h6 className="text-sm font-bold">michelle.rivera@example.com</h6>
          </div>
        </div>
        <div className="p-2.5">
          <h6 className="text-white text-sm font-bold">
            Follow Us and get a chance to win 80% off
          </h6>
        </div>
        <div className="text-white items-center p-2.5 gap-2.5 flex">
          <h6 className="text-sm font-bold">Follow Us :</h6>
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
      <div className="flex justify-between items-center flex-wrap px-10 max-sm:px-0 max-sm:flex-col">
        <header className="flex justify-between items-center max-sm:w-full max-sm:px-5 max-sm:pt-5 max-sm:pb-0">
          <h3 className="text-2xl max-sm:text-sm text-slate-800 font-bold cursor-pointer">
            Bandage
          </h3>
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
            ["Shop", "/product-list"],
            ["About", "/aboutus"],
            ["Blog", "/blog"],
            ["Contact", "/contactus"],
            ["Pages", "/team"],
          ].map(([title, url], idx) => (
            <NavLink
              to={url}
              key={idx}
              className=" text-neutral-500 font-bold text-sm hover:text-slate-900 max-sm:text-sm "
            >
              {title}
            </NavLink>
          ))}
        </nav>
        <div className=" text-sky-500 items-center flex gap-10 max-sm:hidden">
          <div className="items-center flex">
            <FontAwesomeIcon icon={faUser} size="sm" className="" />
            <div className=" font-bold text-sm">Login / Register</div>
          </div>
          <div className="items-center flex">
            <FontAwesomeIcon icon={faSearch} size="sm" className="p-4" />
            <div className=" flex items-center p-4">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="sm"
                className="pr-1 "
              />
              <div className=" font-normal text-sm ">1</div>
            </div>
            <div className=" flex items-center p-4">
              <FontAwesomeIcon icon={faHeart} size="sm" className="pr-1" />
              <div className="font-normal text-sm ">1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
