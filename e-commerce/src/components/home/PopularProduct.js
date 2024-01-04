import { imageData } from "../../assets/imageData";

export default function PopularProduct() {
  return (
    <div className="flex mx-12 my-12 max-sm:flex-col-reverse max-sm:items-center max-sm:gap-0 max-sm:m-0 max-sm:p-2">
      <div className="max-sm:w-full">
        <img
          src={imageData.wintercouple}
          className="max-sm:w-full max-sm:h-96"
        />
      </div>
      <div className="flex flex-col text-start py-40 pl-20 gap-6 max-sm:py-12 max-sm:px-2 max-sm:text-center max-sm:w-full max-sm:items-center">
        <h6 className="font-bold text-gray-500 max-sm:text-xs">SUMMER 2020</h6>
        <h2 className="font-bold text-6xl max-sm:text-xl">
          Part of the Neural Universe
        </h2>
        <p className=" text-gray-500 text-sm">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex gap-2 text-sm font-bold max-sm:items-center max-sm:flex-col">
          <button className="bg-green-500 w-1/6 text-white rounded-sm h-11 max-sm:h-7 max-sm:w-full max-sm:text-xs max-sm:px-2">
            BUY NOW
          </button>
          <button className="border-green-500 border-solid w-1/6 border-2 text-green-500 rounded-sm max-sm:h-7 max-sm:w-full  max-sm:text-xs max-sm:px-2">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
