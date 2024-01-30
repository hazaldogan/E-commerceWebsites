import { useSelector } from "react-redux";
import { data } from "../../data";
import ProductCard from "../ProductCard";

export default function BestsellerProducts() {
  const products = useSelector((store) => store.productReducer.productList);
  const productsHome = products
    .sort((a, b) => {
      return b.rating - a.rating;
    })
    .slice(0, 8);
  return (
    <div className="w-5/6 gap-12 flex-col inline-flex mt-14">
      <div className="text-center flex flex-col gap-2">
        <h2 className="text-neutral-500 text-xl font-normal leading-7 tracking-tight">
          Featured Products
        </h2>
        <h2 className="text-slate-800 text-2xl font-bold leading-loose tracking-tight">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-neutral-500 text-sm font-normal leading-tight tracking-tight">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-7">
        {productsHome.map((value, i) => (
          <ProductCard value={value} i={i} />
        ))}
      </div>
    </div>
  );
}
