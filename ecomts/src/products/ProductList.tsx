import { useEffect } from "react";
import { useState } from "react"
import axios from "axios";
import ProductCard from './ProductCard';
import type { Product } from "../model/types"

export default function ProductList() {
  let [products, setProducts] = useState<Product[]>([]);

  // componentDidMount
  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=8")
    .then(response => setProducts(response.data.products));
  }, []);

  return (
    <div className="row">
      {
        products && products.map(product => <ProductCard product={product} key={product.id} />)
      }
    </div>
  )
}
