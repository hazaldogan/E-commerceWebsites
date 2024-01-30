import { Link } from "react-router-dom";

export default function ProductCard({ value, i }) {
  return (
    <Link
      className="flex flex-col text-center w-[20%] max-sm:w-full max-sm:justify-center max-sm:items-center no-underline"
      to={`/product/${i}`}
    >
      <div className="h-[300px] max-sm:h-full">
        <img
          src={value.images[0].url}
          className="max-w-full h-[300px] object-cover"
        />
      </div>
      <div className="p-6 flex-col gap-2">
        <h5 className="text-slate-800 text-base font-bold ">{value.name}</h5>
        <h5 className="text-neutral-400 text-sm font-bold ">
          {value.description}
        </h5>
        <div className="flex gap-1 justify-center">
          <h5 className="text-teal-700 text-base font-bold">{value.price}</h5>
        </div>
      </div>
    </Link>
  );
}
