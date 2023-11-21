import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="mx-52 my-10">
      <div className="flex justify-between items-center text-center">
        <h2 className="text-2xl text-slate-800 font-bold leading-loose tracking-tight">
          Bandage
        </h2>
        <div className="flex gap-4">
          <FontAwesomeIcon
            icon={faFacebook}
            size="lg"
            color="#23A6F0"
            className="p-1"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="lg"
            color="#23A6F0"
            className="p-1"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            size="lg"
            color="#23A6F0"
            className="p-1"
          />
        </div>
      </div>
      <div className="flex text-start justify-between">
        <div className="flex flex-col">
          <h2 className="font-bold">Company Info</h2>
          <a href="#">About Us</a>
          <a href="#">Carrier</a>
          <a href="#">We are hiring</a>
          <a href="#">Blog</a>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold">Legal</h2>
          <a href="#">About Us</a>
          <a href="#">Carrier</a>
          <a href="#">We are hiring</a>
          <a href="#">Blog</a>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold">Features</h2>
          <a href="#">About Us</a>
          <a href="#">Carrier</a>
          <a href="#">We are hiring</a>
          <a href="#">Blog</a>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold">Resources</h2>
          <a href="#">About Us</a>
          <a href="#">Carrier</a>
          <a href="#">We are hiring</a>
          <a href="#">Blog</a>
        </div>
      </div>
    </div>
  );
}
