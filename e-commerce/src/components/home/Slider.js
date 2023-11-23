import { data } from "../../data";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function Slider() {
  return (
    <>
      <AwesomeSlider
        style={{
          "--slider-height-percentage": "47%",
        }}
      >
        <div className="flex items-center ">
          <div>
            <img className="h-[715px] w-[1550px]" src={data.slider[0].image} />
          </div>
          <div className=" flex flex-col gap-9 my-9 ml-[15%] absolute text-start">
            <h5 className="text-white font-bold ">
              {data.slider[0].collection}
            </h5>
            <h1 className="text-white text-6xl font-bold ">
              {data.slider[0].title}
            </h1>
            <h4 className="text-white text-xl font-normal ">
              {data.slider[0].description}
            </h4>
            <button className="bg-green-500 py-4 w-1/3 text-center text-white text-2xl font-bold">
              {data.slider[0].button}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <div>
            <img className="h-[715px] w-[1550px]" src={data.slider[1].image} />
          </div>
          <div className=" flex flex-col gap-9 justify-center items-center absolute">
            <h1 className="text-white text-6xl font-bold ">
              {data.slider[1].title}
            </h1>
            <h4 className="text-white text-xl ">
              {data.slider[1].description}
            </h4>
            <button className="bg-green-500 py-4 w-1/3 text-center text-white text-2xl font-bold">
              {data.slider[1].button}
            </button>
          </div>
          <div></div>
        </div>
      </AwesomeSlider>
    </>
  );
}
