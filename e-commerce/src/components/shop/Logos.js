import { imageData } from "../../assets/imageData";

export default function Logos() {
  return (
    <div className="flex justify-center items-center gap-12 my-12">
      {imageData.logos.map((logo, i) => (
        <div className="w-16" key={i}>
          <img src={logo} />
        </div>
      ))}
    </div>
  );
}
