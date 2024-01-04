import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="mx-52 my-10 max-sm:mx-6">
      <div className="flex justify-between items-center text-center max-sm:block max-sm:text-start">
        <h2 className="text-2xl max-sm:text-sm text-slate-800 font-bold ">
          Bandage
        </h2>
        <div className="flex gap-4 max-sm:gap-2 max-sm:pt-3">
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
              color="#23A6F0"
              className="p-1"
            />
          </a>
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              color="#23A6F0"
              className="p-1"
            />
          </a>
          <a href="https://www.twitter.com/">
            <FontAwesomeIcon
              icon={faTwitter}
              size="lg"
              color="#23A6F0"
              className="p-1"
            />
          </a>
        </div>
      </div>
      <div className="flex text-start justify-between mt-8 text-sm max-sm:text-xs  max-sm:flex-col max-sm:gap-5">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Company Info</h2>
          <div className="flex flex-col gap-1.5 ">
            <a href="#">About Us</a>
            <a href="#">Carrier</a>
            <a href="#">We are hiring</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Legal</h2>
          <div className="flex flex-col gap-1.5">
            <a href="#">About Us</a>
            <a href="#">Carrier</a>
            <a href="#">We are hiring</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Features</h2>
          <div className="flex flex-col gap-1.5">
            <a href="#">About Us</a>
            <a href="#">Carrier</a>
            <a href="#">We are hiring</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Resources</h2>
          <div className="flex flex-col gap-1.5">
            <a href="#">About Us</a>
            <a href="#">Carrier</a>
            <a href="#">We are hiring</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-sm:gap-2">
          <h5 className="text-slate-800 text-base font-bold  max-sm:text-sm">
            Get in Touch
          </h5>
          <div className="flex flex-col items-start">
            <div className="flex items-center ">
              <input
                type="text"
                placeholder="Your Email"
                className="p-3 border rounded-l-md text-neutral-500 bg-stone-50 "
              />
              <button className="py-3 px-6 border border-neutral-200 bg-[#23A6F0] text-white rounded-r-md">
                Subscribe
              </button>
            </div>
            <p className="text-neutral-500 text-xs ">Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>
      <div className="mt-14 flex items-center">
        <p className="text-neutral-500 text-sm  max-sm:text-xs font-bold">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </div>
  );
}
