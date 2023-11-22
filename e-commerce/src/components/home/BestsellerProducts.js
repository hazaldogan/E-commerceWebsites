import { imageData } from "../../assets/imageData";

export default function BestsellerProducts() {
  return (
    <div className="w-5/6 gap-12 flex-col inline-flex">
      <div className="text-center flex flex-col gap-2">
        <h2 className="text-neutral-500 text-xl font-normal leading-7 tracking-tight">
          Featured Products
        </h2>
        <h2 className="text-slate-800 text-2xl font-bold leading-loose tracking-tight">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-neutral-500 text-sm font-normal leading-tight tracking-tight">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-7">
        {imageData.bestsellers.map((img, i) => (
          <div key={i} className="flex flex-col text-center w-[20%]">
            <div className="h-4/5 ">
              <img src={img} className="max-w-full h-full object-cover" />
            </div>
            <div className="p-6 flex-col gap-2">
              <h5 className="text-slate-800 text-base font-bold leading-normal tracking-tight">
                Graphic Design
              </h5>
              <h5 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">
                English Department
              </h5>
              <div className="flex gap-1 justify-center">
                <h5 className="text-stone-300 text-base font-bold leading-normal tracking-tight">
                  $16.48
                </h5>
                <h5 className="text-teal-700 text-base font-bold leading-normal tracking-tight">
                  $6.48
                </h5>
              </div>
              <div className="w-20 h-4 justify-start items-center gap-1.5 inline-flex">
                <div className="w-4 h-4 bg-sky-500 rounded-full" />
                <div className="w-4 h-4 bg-teal-700 rounded-full" />
                <div className="w-4 h-4 bg-orange-400 rounded-full" />
                <div className="w-4 h-4 bg-slate-800 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
