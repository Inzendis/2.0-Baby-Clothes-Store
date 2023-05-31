import Head from "next/head";
import Layout from "../../components/Layout";
import ProductsCarousel from "../../components/ProductsCarousel";
import { Data } from "../../utils/data";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <Layout title="Home" typeHeader="HomePage" colourHeader="">
      <div className="mt-6">
        <div className="flex px-4 md:px-32 justify-between items-end">
          <a className="lg:text-5xl">Newest Releases</a>
          <a className="lg:text-2xl"> See All</a>
        </div>
        <div className="px-[100px] pt-4 flex items-center justify-between">
          <div className="">
            <ProductsCarousel products={Data} />
          </div>
        </div>
      </div>
      <div></div>
    </Layout>
  );
}
