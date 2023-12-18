import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { imageData } from "../assets/imageData";

export default function Team() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-5 my-20">
        <h4 className="text-xs font-bold text-gray-500">WHAT WE DO</h4>
        <h1 className="text-4xl font-bold">Innovation tailored for you</h1>
        <div className="flex items-center">
          <h4 className="font-bold text-sm">Home</h4>
          <FontAwesomeIcon
            icon={faChevronRight}
            size="sm"
            className="p-2 text-gray-500"
          />
          <h4 className="text-sm text-gray-500 ">Shop</h4>
        </div>
      </div>
      <div className="w-full flex max-sm:flex-col justify-center gap-2">
        <div className="w-[50%] max-sm:w-full">
          <img className="w-full" src={imageData.teampage[0]} />
        </div>
        <div className="flex flex-wrap gap-2 w-[50%] max-sm:w-full items-center justify-center">
          <img src={imageData.teampage[1]} />
          <img src={imageData.teampage[2]} />
          <img src={imageData.teampage[3]} />
          <img src={imageData.teampage[4]} />
        </div>
      </div>
      <div className="my-20 mx-52 max-sm:mx-5">
        <h2 className="font-bold text-3xl">Meet Our Team</h2>
        <div className="flex gap-7 flex-wrap my-20 justify-center items-center">
          {imageData.teamusers.map((img, i) => (
            <div key={i} className="flex flex-col gap-3 mb-14">
              <img src={img} />
              <h6 className="font-bold text-sm">Username</h6>
              <p className="font-bold text-gray-400 text-xs">Profession</p>
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
      <div className="flex flex-col justify-center items-center gap-6 max-sm:mx-5">
        <h2 className="font-bold text-4xl">Start your 14 days free trial</h2>
        <p className="text-sm text-gray-400 font-bold w-[400px] max-sm:w-full">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="font-bold bg-sky-500 text-white text-xs px-5 py-2 rounded-md">
          Try it free now
        </button>
        <div className="flex gap-4 items-center justify-center">
          <a href="https://www.twitter.com/">
            <FontAwesomeIcon
              icon={faTwitter}
              size="lg"
              color="#23A6F0"
              className="p-1"
            />
          </a>
          <a href="https://www.facebook.com/">
            <img className="w-4" src={imageData.facebook} />
          </a>
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              color="#000000"
              className="p-1"
            />
          </a>
          <a href="https://www.linkedin.com/">
            <img className="w-4" src={imageData.linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}
