// 'use client'
import Image from "next/image";
import Featuredproduct from "./-componants/featureproduct/featuredproduct";
import Slider from "./-componants/slidder/slider";
import img1 from '../assets/images/banner-4.jpeg'
import img2 from '../assets/images/blog-img-1.jpeg'
import img3 from '../assets/images/grocery-banner-2.jpeg'
import Shopcategories from "./-componants/shopcategories/shopcategories";
export default async function Home() {
  return (
    <div className="mt-5">
      <div className="mb-10">

        <Slider spaceBetween={0} slidesPerView={1} pagelist={[img1.src, img2.src, img3.src]} />

      </div>
      <Shopcategories />
      <Featuredproduct />

    </div>
  );
}
