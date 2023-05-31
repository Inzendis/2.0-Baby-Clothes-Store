import Head from "next/head";
import Layout from "../../components/Layout";
import NewestProductsCarousel from "../../components/NewestProductsCarousel";

import { useRouter } from "next/router";

export default function Home() {
  return (
    <Layout title="Home" typeHeader="HomePage" colorHeader="Girl">
      <div className="mt-6">
        <div className="flex px-4 md:px-32 justify-between items-end">
          <a className="lg:text-5xl">Newest Releases</a>
          <a className="lg:text-2xl"> See All</a>
        </div>
        <div className="carouselSize">
          <NewestProductsCarousel />
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
      </div>
      <div></div>
    </Layout>
  );
}
