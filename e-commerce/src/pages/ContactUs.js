import { imageData } from "../assets/imageData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ContactForm from "../components/ContactForm";

export default function ContactUs() {
  return (
    <div className="mx-52">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-start text-start gap-7 w-[50%]">
          <h4 className="text-xs font-bold">CONTACT US</h4>
          <h1 className="text-6xl font-bold">Get in touch today!</h1>
          <p className="text-sm w-[60%] font-bold text-gray-400">
            We know how large objects will act, but things on a small scale
          </p>
          <div className="flex flex-col gap-2">
            <h6 className="font-bold text-sm">Phone : +451 215 215 </h6>
            <h6 className="font-bold text-sm">Fax : +451 215 215 </h6>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <a href="https://www.twitter.com/">
              <FontAwesomeIcon
                icon={faTwitter}
                size="lg"
                color="#000000"
                className="p-1"
              />
            </a>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon
                icon={faSquareFacebook}
                size="lg"
                color="#000000"
                className="p-1"
              />
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
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                color="#000000"
                className="p-1"
              />
            </a>
          </div>
        </div>
        <div className="relative inline-block w-[50%]">
          <div className="w-[65px] h-[65px] bg-red-100 rounded-full absolute top-20"></div>
          <div className="w-[25px] h-[25px] bg-red-100 rounded-full absolute top-72 left-full"></div>
          <div className="w-[10px] h-[10px] bg-violet-500 rounded-full absolute top-40 left-full"></div>
          <img className="relative" src={imageData.contactus} />
          <div className="w-[450px] h-[450px] bg-red-100 rounded-full absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/3 -z-20"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 mt-20">
        <h4 className="text-xs font-bold">VISIT OUR OFFICE</h4>
        <h1 className="text-4xl font-bold w-[50%]">
          We help small businesses with big ideas
        </h1>
        <div className="flex justify-center items-center my-16">
          <div className="flex flex-col justify-center items-center gap-6  hover:bg-sky-950 hover:text-white  px-10 py-16">
            <img src={imageData.phoneicon} />
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-xs font-bold">georgia.young@example.com</p>
              <p className="text-xs font-bold">georgia.young@ple.com</p>
            </div>
            <h4 className="text-sm font-bold">Get Support</h4>
            <button className="text-xs font-bold text-sky-500 border-sky-500 border rounded-[20px] bg-transparent px-4 py-3">
              Submit Request
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-6  hover:bg-sky-950 hover:text-white  px-10 py-16">
            <img src={imageData.locationicon} />
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-xs font-bold">georgia.young@example.com</p>
              <p className="text-xs font-bold">georgia.young@ple.com</p>
            </div>
            <h4 className="text-sm font-bold">Get Support</h4>
            <button className="text-xs font-bold text-sky-500 border-sky-500 border rounded-[20px] bg-transparent px-4 py-3">
              Submit Request
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-6  hover:bg-sky-950 hover:text-white  px-10 py-16">
            <img src={imageData.postaicon} />
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-xs font-bold">georgia.young@example.com</p>
              <p className="text-xs font-bold">georgia.young@ple.com</p>
            </div>
            <h4 className="text-sm font-bold">Get Support</h4>
            <button className="text-xs font-bold text-sky-500 border-sky-500 border rounded-[20px] bg-transparent px-4 py-3">
              Submit Request
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <img src={imageData.arrow} />
        <h4 className="font-bold text-xs">WE CAN'T WAIT TO MEET YOU</h4>
        <h2 className="font-bold text-5xl">Let’s Talk</h2>
        <button className="font-bold bg-sky-500 text-white text-xs px-6 py-3 rounded-sm">
          Try it free now
        </button>
      </div>
      <ContactForm />
    </div>
  );
}
