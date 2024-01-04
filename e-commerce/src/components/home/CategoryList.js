import { data } from "../../data";

export default function CategoryList() {
  return (
    <div className="w-3/4 gap-12 items-center flex-col inline-flex mt-12 max-sm:w-full max-sm:px-2">
      <div className="text-center flex flex-col">
        <h2 className="text-slate-800 text-2xl font-bold ">EDITOR'S PICK</h2>
        <p className="text-neutral-500 text-sm font-normal ">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="flex gap-8 h-[500px] max-sm:flex-col max-sm:h-full">
        <div className="w-[50%] relative max-sm:w-full">
          <img
            src={data.categories[0].image}
            className="w-full h-full object-cover"
          />
          <button className=" absolute bottom-[5%] left-[5%] w-44 text-slate-800 max-sm:px-8 max-sm:uppercase text-base font-bold py-3 bg-white">
            {data.categories[0].name}
          </button>
        </div>
        <div className="w-[50%] flex gap-8 max-sm:w-full max-sm:flex-col">
          <div className="w-[50%] relative max-sm:w-full">
            <img
              src={data.categories[1].image}
              className="w-full h-full object-cover"
            />
            <button className=" absolute bottom-[5%] left-[5%] w-44 text-slate-800 max-sm:px-8 max-sm:uppercase text-base font-bold  py-3 bg-white">
              {data.categories[1].name}
            </button>
          </div>
          <div className="w-[50%] flex flex-col gap-[2%] max-sm:w-full max-sm:gap-4">
            <div className="w-full h-[49%] relative max-sm:w-full">
              <img
                src={data.categories[2].image}
                className="w-full h-full object-cover"
              />
              <button className=" absolute bottom-[5%] left-[5%] w-44 text-slate-800 max-sm:px-8 max-sm:uppercase text-base font-bold py-3 bg-white">
                {data.categories[2].name}
              </button>
            </div>
            <div className="w-full h-[49%] relative max-sm:w-full">
              <img
                src={data.categories[3].image}
                className="w-full h-full object-cover"
              />
              <button className=" absolute bottom-[5%] left-[5%] w-44 text-slate-800 max-sm:px-8 max-sm:uppercase text-base font-bold py-3 bg-white">
                {data.categories[3].name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
