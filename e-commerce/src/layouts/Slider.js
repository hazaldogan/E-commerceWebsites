import { imageData } from "../assets/imageData";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function Slider() {
  return (
    <>
      <AwesomeSlider style={{ "--slider-height-percentage": "49.5%" }}>
        {imageData.slider.map((slide, i) => (
          <div className="h-full" key={i}>
            <img className="h-full" src={slide} />
          </div>
        ))}
      </AwesomeSlider>
    </>
  );
}
