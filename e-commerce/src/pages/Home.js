import CategoryList from "../components/home/CategoryList";
import BestsellerProducts from "../components/home/BestsellerProducts";
import Slider from "../components/home/Slider";
import SliderProducts from "../components/home/SliderProducts";

export default function Home() {
  return (
    <>
      <Slider />
      <CategoryList />
      <BestsellerProducts />
      <SliderProducts />
    </>
  );
}
