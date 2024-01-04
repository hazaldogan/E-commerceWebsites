import { data } from "../../data";
import { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === data.slider.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? data.slider.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const newSlides = data.slider.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <div className="flex items-center text-start relative max-sm:justify-center max-sm:text-center">
          <div className="w-full">
            <img src={item.image} className="w-full h-screen object-cover" />
          </div>
          <div className=" flex flex-col gap-9 my-9 ml-[15%] max-sm:justify-center max-sm:m-0 max-sm:w-[70%] absolute max-sm:text-center max-sm:items-center">
            <h5 className="text-white text-base font-bold">
              {item.collection}
            </h5>
            <h1 className="text-white text-6xl max-sm:text-xl font-bold">
              {item.title}
            </h1>
            <h4 className="text-neutral-50 text-xl max-sm:text-sm">
              {item.description}
            </h4>
            <button className="bg-green-500 py-3 px-2 w-[50%] rounded text-white text-2xl max-sm:text-sm font-bold ">
              {item.button}
            </button>
          </div>
          <div></div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={data.slider}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {newSlides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
