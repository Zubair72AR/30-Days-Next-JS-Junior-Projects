"use client";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
}

interface ProductResponse {
  products: Product[];
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data: ProductResponse = await response.json();
      setProducts(data.products);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (products.length === 0) {
    return (
      <div className="text-center my-10">
        <h1>No products found.</h1>
        <p>Check your Internet Connection</p>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center flex-wrap my-6 mx-auto w-[80vw]">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-200 border-2 border-slate-300 m-2 p-8 w-[500px] min-h-[300px] rounded-2xl shadow-md"
          >
            <h2 className="font-bold text-2xl uppercase">{product.title}</h2>
            <h3 className="font-bold my-2 text-red-700 text-3xl">
              <span className="text-black font-normal">Price: </span>$
              {product.price}
            </h3>
            <h4 className="font-bold text-blue-800">
              Category: {product.category}
            </h4>
            <p className="mt-2">
              <span className="font-medium">Description: </span>
              {product.description}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
