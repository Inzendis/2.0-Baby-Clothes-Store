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
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">back to products</Link>
        <div className="flex flex-col pt-4 px-4">
          <div className="flex flex-col md:flex-row-reverse justify-center">
            <div className="flex flex-row">
              <h1>{product.name}</h1>
              <h1>${product.price}</h1>
            </div>
            <div className="mx-12">
              <TransformWrapper
                defaultScale={1}
                defaultPositionX={100}
                defaultPositionY={200}
              >
                <TransformComponent>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="lg:w-[380px] lg:h-[520px]"
                  ></img>
                </TransformComponent>
              </TransformWrapper>
            </div>
          </div>
          <div className="flex flex-row justify-between px-4 text-xl">
            <ul>
              Includes:
              {product.description.map((item) => (
                <li key={item}>&bull; {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
