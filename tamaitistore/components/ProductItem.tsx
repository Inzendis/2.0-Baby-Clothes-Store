import React from "react";
import Link from "next/link";
import { IData } from "../utils/data";

interface ProductDetailsProps {
  product: IData;
}

const ProductItem: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="justify-center flex flex-col items-center py-4">
      <Link href={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="flex rounded shadow w-full object-cover min-h-full h-[250px] md:h-[350px]"
        ></img>
      </Link>
      <div className="flex flex-col items-center justify-center pt-2">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name} </h2>
        </Link>
        <p>${product.price}</p>
        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
