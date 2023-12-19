import { data } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function FeaturedPosts() {
  return (
    <div className="pt-24 gap-20 flex-col flex justify-center items-center max-sm:pt-12">
      <div className="text-center flex flex-col gap-5">
        <h6 className="text-sky-500 text-sm font-bold max-sm:text-xs">
          Practice Advice
        </h6>
        <h2 className="text-slate-800 text-5xl font-bold max-sm:text-xl">
          Featured Posts
        </h2>
        <p className=" text-neutral-500 text-xl max-sm:text-sm">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-wrap max-sm:flex-col justify-center items-center gap-7 w-[90%]">
        {data.featuredPosts.map((value, i) => (
          <div key={i} className="flex flex-col border basis-[30%]">
            <div className="relative">
              <img
                src={value.image}
                className="h-[400px] w-full object-cover"
              />
              <div className="absolute rounded-sm shadow px-2.5 left-5 top-5 bg-red-500 text-white text-sm max-sm:text-xs font-bold leading-normal tracking-tight">
                NEW
              </div>
            </div>
            <div className="flex flex-col p-6 gap-3">
              <div className="flex gap-4">
                <h6 className="text-blue-300 text-xs font-medium leading-none tracking-tight">
                  Google
                </h6>
                <h6 className="text-neutral-500 text-xs font-medium leading-none tracking-tight">
                  Trending
                </h6>
                <h6 className="text-neutral-500 text-xs font-medium leading-none tracking-tight">
                  New
                </h6>
              </div>
              <div className="flex flex-col gap-2 text-start">
                <h4 className="text-slate-800 text-xl max-sm:text-sm max-sm:w-full max-sm:font-bold w-[60%]">
                  {value.title}
                </h4>
                <p className="text-neutral-500 text-sm max-sm:text-xs max-sm:w-full w-[60%]">
                  {value.description}
                </p>
              </div>
              <div className="flex justify-between ">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faClock} size="sm" className="p-1" />
                  <p className="text-neutral-500 text-xs">{value.date}</p>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faChartSimple}
                    size="xs"
                    className="p-1"
                  />
                  <p className="text-neutral-500 text-xs">
                    {value.comment} comments
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center cursor-pointer">
                <p className="text-neutral-500 text-sm max-sm:text-xs font-bold">
                  Learn More
                </p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="xs"
                  className="p-1 text-[#23A6F0]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
