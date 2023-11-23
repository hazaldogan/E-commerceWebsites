import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faUser,
  faSearch,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="bg-[#252B42] text-center items-center justify-between gap-5 flex-wrap flex px-6">
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
      <div className="flex justify-between items-center flex-wrap px-10">
        <header>
          <h3 className="text-2xl text-slate-800 font-bold leading-loose tracking-tight">
            Bandage
          </h3>
        </header>
        <nav className="justify-start items-start gap-4 flex ">
          {[
            ["Home", "/"],
            ["Shop", "/product-list"],
            ["About", "/about"],
            ["Blog", "/blog"],
            ["Contact", "/contact"],
            ["Pages", "/pages"],
          ].map(([title, url], idx) => (
            <NavLink
              to={url}
              key={idx}
              className=" text-neutral-500 font-bold text-sm leading-normal tracking-tigh hover:text-slate-900"
            >
              {title}
            </NavLink>
          ))}
        </nav>
        <div className=" text-sky-500 items-center flex gap-10">
          <div className="items-center flex ">
            <FontAwesomeIcon icon={faUser} size="sm" className="" />
            <div className=" font-bold leading-normal text-sm tracking-tight ">
              Login / Register
            </div>
          </div>
          <div className="items-center flex">
            <FontAwesomeIcon icon={faSearch} size="sm" className="p-4" />
            <div className=" flex items-center p-4">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="sm"
                className="pr-1 "
              />
              <div className=" font-normal leading-none text-sm tracking-tight ">
                1
              </div>
            </div>
            <div className=" flex items-center p-4">
              <FontAwesomeIcon icon={faHeart} size="sm" className="pr-1" />
              <div className="font-normal leading-none text-sm tracking-tight">
                1
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
