import React from 'react'
import Link from 'next/link'
import { IData } from '../utils/data'

interface ProductDetailsProps {
    product: IData;
  }

const ProductItem: React.FC<ProductDetailsProps> = ({product}) => {
  return (
    <div className='card'>
        <Link href={`/product/${product.slug}`}>
            <a><img src={product.image} alt={product.name} className="rounded shadow"></img></a>
        </Link>
        <div className='flex flex-col items-center justify-center p-5'>
            <Link href={`/product/${product.slug}`}><a><h2>{product.name} </h2></a></Link></div>
            
        </div>
  );
};

export default ProductItem;
