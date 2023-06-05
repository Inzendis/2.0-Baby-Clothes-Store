import React, { useState, useRef } from "react";
import Link from "next/link";
import { IData } from "../utils/data";

interface ProductDetailsProps {
  product: IData;
}

const ProductItem: React.FC<ProductDetailsProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Create state
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleTouchStart = () => {
    // Start a timeout
    timeoutRef.current = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % product.variants.length
      );
    }, 500);
  };

  const handleTouchEnd = () => {
    // Clear the timeout
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
      timeoutRef.current = null;
    }
    setCurrentImageIndex(0);
  };

  const handleMouseEnter = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(0);
  };

  return (
    <div className="justify-center flex flex-col items-center py-4">
      <Link href={`/product/${product.slug}`}>
        <div className="relative">
          <img
            src={product.variants[currentImageIndex].image}
            alt={product.name}
            className="flex rounded shadow w-full object-cover min-h-full h-[250px] md:h-[350px]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          />
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center pt-2">
        <div className="flex flex-row space-x-2">
          {product.variants.map((variant, index) => (
            <div
              key={index}
              className="h-4 w-4 rounded-full outline-black outline outline-[1px]"
              style={{ backgroundColor: variant.colors[0] }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
        <Link href={`/product/${product.slug}`}>
          <div className="flex flex-row">
            <h2 className="text-lg">{product.name} </h2>
          </div>
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
