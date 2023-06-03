import React, { useState, useRef } from "react";
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";
import { Data } from "../../../utils/data";
import Link from "next/link";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = Data.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product not Found</div>;
  }

  return (
    <Layout title={product.name} typeHeaderAndFooter={product.gender}>
      <div className="py-2">
        <Link href="/">back to products</Link>
        <div className="flex flex-col pt-4 px-4">
          <div className="flex flex-col lg:flex-row-reverse justify-center lg:justify-end">
            <div className="flex flex-row justify-between flex-grow">
              <div className="lg:flex flex-col justify-between lg:justify-start text-xl hidden flex-grow">
                <div className="flex flex-row justify-between text-5xl">
                  <h1>{product.name}</h1>
                  <h1>${product.price}</h1>
                </div>
                <ul className="pt-4 text-2xl">
                  Includes:
                  {product.description.map((item) => (
                    <li key={item}>&bull; {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mx-12 lg:mx-0 lg:w-1/2 justify-center flex">
              <TransformWrapper>
                <TransformComponent>
                  <img src={product.image} alt={product.name}></img>
                </TransformComponent>
              </TransformWrapper>
            </div>
          </div>
          <div className="flex flex-col justify-between lg:hidden">
            <div className="flex flex-row justify-between py-4 text-3xl">
              <h1>{product.name}</h1>
              <h1 className="flex lg:self-end">${product.price}</h1>
            </div>
            <ul className="text-xl">
              Includes:
              {product.description.map((item) => (
                <li key={item}>&bull; {item}</li>
              ))}
            </ul>
            <div className="flex justify-center h-16">
              <button className="w-28 rounded-xl bg-slate-400">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
