import React, { useState, useRef } from "react";
import Link from "next/link";
import { IData } from "../utils/data";

interface ProductDetailsProps {
  product: IData;
}

const ProductItem: React.FC<ProductDetailsProps> = ({ product }) => {
  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleTouchStart = () => {
    timeoutRef.current = setInterval(() => {
      setCurrentVariantIndex(
        (prevIndex) => (prevIndex + 1) % product.variants.length
      );
    }, 1000);
  };

  const handleTouchEnd = () => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
      timeoutRef.current = null;
    }
    setCurrentVariantIndex(0);
  };

  const handleMouseEnter = (index: number) => {
    setCurrentVariantIndex(index);
  };

  const handleMouseLeave = () => {
    setCurrentVariantIndex(0);
  };

  // Calculate the possibly discounted price
  const variant = product.variants[currentVariantIndex];
  const currentDate = new Date();
  const originalPrice = variant.price;
  let displayedPrice = originalPrice;

  if (variant.discount && currentDate <= variant.discount.endDate) {
    const discountAmount = originalPrice * (variant.discount.percent / 100);
    displayedPrice = originalPrice - discountAmount;
  }

  return (
    <div className="justify-center flex flex-col items-center py-4">
      <Link href={`/product/${product.slug}`}>
        <div className="relative">
          <img
            src={variant.image}
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
        {variant.discount && currentDate <= variant.discount.endDate && (
          <p className="text-red-500">
            ${originalPrice.toFixed(2)} (-{variant.discount.percent}%)
          </p>
        )}
        <p>${displayedPrice.toFixed(2)}</p>

        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
