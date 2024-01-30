import { data } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "../DropdownMenu";
import ProductCard from "../ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useQueryParams } from "../../hooks/useQueryParams";
import {
  addMoreProducts,
  fetchProduct,
} from "../../store/actions/productActions";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SyncLoader } from "react-spinners";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ProductListDetails() {
  const categories = useSelector((store) => store.globalReducer.categories);
  const { gender, category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer);
  const { productList, total, fetchState } = products;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [queryParams, setQueryParams] = useQueryParams({
    filter: "",
    sort: "",
  });
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const infiniteScrollParams = {
    limit: 24,
    offset: offset,
  };
  const onSubmit = (data) => {
    setOffset(0);
    setQueryParams(data);
  };

  let categoryId;
  let genderCode;
  if ((gender, category)) {
    genderCode = gender[0];
    categoryId = categories.find(
      (c) => c.code === `${genderCode}:${category}`
    )?.id;
  }

  useEffect(() => {
    dispatch(
      fetchProduct({
        ...queryParams,
        limit: infiniteScrollParams.limit,
        offset: 0,
        category: categoryId,
      })
    );
  }, [queryParams, category]);

  const nextProducts = () => {
    let lastLimit = (total - productList.length) % 24;
    if (lastLimit === 0) {
      dispatch(
        addMoreProducts({
          ...queryParams,
          ...infiniteScrollParams,
          category: categoryId,
        })
      );
      setOffset(offset + 8);
    } else {
      dispatch(
        addMoreProducts({
          ...queryParams,
          limit: lastLimit,
          offset: infiniteScrollParams.offset,
          category: categoryId,
        })
      );
    }
  };

  useEffect(() => {
    if (total && productList.length >= total) {
      setOffset(0);
      setHasMore(false);
    } else {
      setHasMore(true);
    }
  }, [total, productList.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="flex max-sm:flex-col justify-around items-center mx-20 my-5 max-sm:gap-4">
        <p className="text-sm max-sm:text-xs font-bold text-gray-500">
          {`Showing ${productList.length} of all ${total} results`}
        </p>
        <div className="flex gap-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center gap-3"
          >
            <input
              type="search"
              placeholder="Search"
              {...register("filter", {})}
              className="bg-white input input-bordered w-full max-w-xs text-neutral-500 text-sm font-semibold leading-normal tracking-tight"
            />
            <select
              {...register("sort")}
              className="select w-full max-w-xs bg-white text-neutral-500 text-sm font-semibold leading-normal tracking-tight"
            >
              <option
                className="text-neutral-500 text-sm font-semibold leading-normal tracking-tight"
                value=""
              >
                Sort By
              </option>
              <option
                className="text-neutral-500 text-sm font-semibold leading-normal tracking-tight"
                value="price:desc"
              >
                Highest Price
              </option>
              <option
                className="text-neutral-500 text-sm font-semibold leading-normal tracking-tight"
                value="price:asc"
              >
                Lowest Price
              </option>
              <option
                className="text-neutral-500 text-sm font-semibold leading-normal tracking-tight"
                value="rating:asc"
              >
                Lowest Rating
              </option>
              <option
                className="text-neutral-500 text-sm font-semibold leading-normal tracking-tight"
                value="rating:desc"
              >
                Highest Rating
              </option>
            </select>
            <button
              type="submit"
              className="bg-[#23A6F0] px-4 py-2 text-white text-sm font-bold leading-normal tracking-tight rounded"
            >
              {" "}
              Filter
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-7 mr-20 ml-24 max-sm:m-0 max-sm:flex-col">
        {fetchState === "FETCHED" && (
          <InfiniteScroll
            dataLength={productList.length && 0}
            next={nextProducts}
            hasMore={hasMore}
            loader={<SyncLoader color="#23a6f0" className="mx-auto" />}
            endMessage={
              <p className="text-center p-4 text-neutral-500 text-lg font-semibold leading-normal tracking-tight">
                There are no more products in this category
              </p>
            }
            className="flex gap-10 flex-wrap overflow-hidden h-full pt-4"
          >
            {productList.map((value, i) => (
              <ProductCard value={value} i={i} />
            ))}
          </InfiniteScroll>
        )}
        {fetchState === "FETCHING" && (
          <>
            <p className="text-center p-4 text-neutral-500 text-lg font-semibold leading-normal tracking-tight">
              Loading...
            </p>
            <SyncLoader color="#23a6f0" />
          </>
        )}
      </div>
    </div>
  );
}
