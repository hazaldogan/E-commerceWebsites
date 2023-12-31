import { imageData } from "../assets/imageData";
import { data } from "../data";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Logos from "../components/shop/Logos";

export default function AboutUs() {
  return (
    <div className="mx-52 max-sm:mx-5">
      <div className="flex max-sm:flex-col">
        <div className="flex flex-col justify-center items-start max-sm:items-center text-start max-sm:text-center gap-5 max-sm:pt-5">
          <h4 className="text-xs font-bold max-sm:text-center max-sm:hidden">
            ABOUT COMPANY
          </h4>
          <h1 className="text-5xl font-bold">ABOUT US</h1>
          <p className="text-sm w-[60%] font-bold text-gray-400">
            We know how large objects will act, but things on a small scale
          </p>
          <button className="font-bold bg-sky-500 text-white text-xs px-5 py-2 rounded-md">
            Get Quote Now
          </button>
        </div>
        <div className="relative inline-block">
          <div className="w-[65px] h-[65px] bg-red-100 rounded-full absolute top-14"></div>
          <div className="w-[10px] h-[10px] bg-violet-500 rounded-full absolute top-96"></div>
          <div className="w-[10px] h-[10px] bg-violet-500 rounded-full absolute top-40 left-full"></div>
          <img className="w-full relative" src={imageData.aboutus} />
          <div className="w-[450px] h-[450px] bg-red-100 rounded-full absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 -z-20"></div>
        </div>
      </div>
      <div className="flex items-center justify-start text-start gap-10 my-14 max-sm:justify-center max-sm:text-center max-sm:flex-col">
        <div className="flex flex-col gap-3 w-[50%] max-sm:w-[70%]">
          <p className="text-red-600 text-xs font-bold">Problems trying</p>
          <p className="font-bold text-2xl max-sm:text-lg">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
        </div>
        <div className="flex items-center justify-center w-[50%] max-sm:w-[70%]">
          <p className="text-xs font-bold text-gray-400">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
      <div className="flex gap-20 font-bold justify-center items-center my-20 max-sm:flex-col">
        <div className="text-center">
          <h2 className="text-6xl">15K</h2>
          <p className="text-sm text-gray-500">Happy Customers</p>
        </div>
        <div>
          <h2 className="text-6xl">150K</h2>
          <p className="text-sm text-gray-500">Monthly Visitors</p>
        </div>
        <div>
          <h2 className="text-6xl">15</h2>
          <p className="text-sm text-gray-500">Countries Worldwide</p>
        </div>
        <div>
          <h2 className="text-6xl">100+</h2>
          <p className="text-sm text-gray-500">Top Partners</p>
        </div>
      </div>
      <div className="flex justify-center items-center my-32">
        <ReactPlayer url="https://www.youtube.com/watch?v=adQyBxLvYwg" />
      </div>
      <div>
        <h2 className="font-bold text-3xl">Meet Our Team</h2>
        <p className="text-xs mt-3 font-bold text-gray-400">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="flex gap-7 flex-wrap my-20 justify-center items-center">
          {data.aboutteam.map((team, i) => (
            <div key={i} className="flex flex-col gap-3">
              <img src={team.image} />
              <h6 className="font-bold text-sm">{team.username}</h6>
              <p className="font-bold text-gray-400 text-xs">{team.position}</p>
              <div className="flex gap-2 items-center justify-center">
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
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 my-24">
        <h2 className="font-bold text-3xl">Big Companies Are Here</h2>
        <p className="text-sm text-gray-400">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <Logos />
      <div className="bg-sky-600 flex -mx-52 max-sm:mx-0 max-sm:flex-col max-sm:py-16">
        <div className="text-white flex flex-col text-start justify-center items-start max-sm:text-center max-sm:items-center gap-4 w-[60%] max-sm:w-full max-sm:p-5 p-52">
          <h4 className="font-bold max-sm:text-sm">WORK WITH US</h4>
          <h2 className="font-bold text-4xl max-sm:text-xl">
            Now Let’s grow Yours
          </h2>
          <p className="text-xs w-[75%]">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>
          <button className="font-bold border border-white rounded-md px-7 py-3 text-xs max-sm:text-sm">
            Button
          </button>
        </div>
        <div className="w-[40%] max-sm:hidden">
          <img className="w-full" src={imageData.aboutband} />
        </div>
      </div>
    </div>
  );
}
