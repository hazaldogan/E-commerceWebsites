import { data } from "../../data";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function SliderProducts() {
  return (
    <>
      <AwesomeSlider style={{ "--slider-height-percentage": "49.5%" }}>
        <div className="flex items-center ">
          <div>
            <img
              className="h-[750px] w-[1550px]"
              src={data.sliderProduct[0].image}
            />
          </div>
          <div className="w-1/3 flex flex-col gap-9 my-9 ml-[15%] absolute text-start">
            <h5 className="text-white font-bold ">
              {data.sliderProduct[0].collection}
            </h5>
            <h1 className="text-white text-6xl font-bold ">
              {data.sliderProduct[0].title}
            </h1>
            <h4 className="text-white text-xl font-normal ">
              {data.sliderProduct[0].description}
            </h4>
            <div className="flex gap-6 items-center">
              <h1 className=" text-white text-2xl font-bold">
                {data.sliderProduct[0].price}
              </h1>
              <button className="rounded-md bg-green-500 py-4 w-1/3 text-center text-white text-xl font-bold">
                {data.sliderProduct[0].button}
              </button>
            </div>
          </div>
        </div>
      </AwesomeSlider>
    </>
  );
}
