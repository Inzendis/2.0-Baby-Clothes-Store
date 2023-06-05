import Head from "next/head";
import Layout from "../../components/Layout";
import NewestProductsCarousel from "../../components/NewestProductsCarousel";
import ProductsCarouselV2 from "../../components/ProductsCarouselV2";
import { useRouter } from "next/router";
import { Data } from "../../utils/data";

export default function Home() {
  return (
    <Layout title="Home" typeHeaderAndFooter="HomePage">
      <div className=" md:pt-8 :mt-6 px-6 lg:px-0">
        <div className="flex justify-between items-end self-center relative  lg:pb-2 lg:px-[120px] pt-4">
          <a className="text-xl lg:text-5xl md:left-0 md:absolute  lg:static font-semibold">
            Latest Releases
          </a>
          <a className="text-xl lg:text-2xl md:right-1 md:absolute lg:pr-4 lg:static font-semibold">
            See All
          </a>
        </div>
        <ProductsCarouselV2 products={Data} />
      </div>

      <div className="flex flex-col justify-center items-center w-full h-[350px] space-y-10 aboutUsContainer text-xl">
        <div className="flex flex-col space-y-6 items-center">
          <a>About Us</a>
          <a>We craft our designs from scratch.</a>
        </div>

        <button className="bg-transparent border-black border-2 w-[215px] h-[46px] text-2xl">
          Find Out More
        </button>
      </div>

      <div></div>
    </Layout>
  );
}
