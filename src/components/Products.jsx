import React from "react";
import { Link } from "react-router-dom";
import { products } from "../db/product";
import FadeIn from "./ui/FadeIn";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-gray-900 dark:text-white px-6 md:px-12 lg:px-20 py-14">
      
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-600">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <FadeIn key={product.id}>
            <Link
              to={`/product/${product.id}`}
              className="border dark:border-zinc-700 rounded-lg p-4 bg-gray-50 dark:bg-zinc-800 shadow hover:shadow-lg transition flex flex-col h-full"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {product.name}
              </h2>

              <p className="text-gray-700 dark:text-gray-300 flex-1 mb-4">
                {product.description}
              </p>

              <div className="mt-auto flex justify-between items-center">
                {/* <span className="text-blue-600 font-bold text-lg">{product.price}</span> */}
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
