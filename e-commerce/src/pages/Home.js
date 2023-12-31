import CategoryList from "../components/home/CategoryList";
import BestsellerProducts from "../components/home/BestsellerProducts";
import Slider from "../components/home/Slider";
import SliderProducts from "../components/home/SliderProducts";
import PopularProduct from "../components/home/PopularProduct";
import FeaturedPosts from "../components/home/FeaturedPosts";

export default function Home() {
  return (
    <>
      <Slider />
      <CategoryList />
      <BestsellerProducts />
      <SliderProducts />
      <PopularProduct />
      <FeaturedPosts />
    </>
  );
}
