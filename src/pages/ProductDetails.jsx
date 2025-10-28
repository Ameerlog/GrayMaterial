import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../db/product";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 dark:bg-zinc-900">
        <div className="text-center bg-white dark:bg-zinc-800 p-12 rounded-2xl shadow-lg max-w-md">
          <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              role="img"
              aria-label="Not Found Icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2M4 13h2m4-8v2m4-2v2"
              ></path>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Sorry, the product you're looking for doesn't exist.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id);

  const tabs = [
    { id: "description", label: "Description", icon: "📋" },
    { id: "specifications", label: "Specifications", icon: "⚙️" },
    { id: "features", label: "Features", icon: "✨" },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">
      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav
            className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300"
            aria-label="Breadcrumb"
          >
            <Link
              to="/"
              className="hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
            >
              Home
            </Link>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <Link
              to="/products"
              className="hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
            >
              Products
            </Link>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="text-gray-900 dark:text-white font-medium">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative group cursor-zoom-in">
              <div
                className={`relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-700 transition-transform duration-300 ${
                  isImageZoomed ? "scale-105" : ""
                }`}
                onClick={() => setIsImageZoomed(!isImageZoomed)}
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 hover:shadow-md ${
                    selectedImage === index
                      ? "border-blue-700 ring-2 ring-blue-200 dark:ring-blue-500"
                      : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-400"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-20 lg:h-24 object-cover"
                  />
                  {selectedImage === index && (
                    <div className="absolute inset-0 bg-blue-600/20"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 text-xs font-semibold rounded-full uppercase tracking-wider">
                  {product.category}
                </span>
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                    (4.8)
                  </span>
                </div>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  {product.price}
                </span>
                <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                  ₹
                  {(
                    parseInt(product.price.replace(/[₹,]/g, "")) * 1.2
                  ).toLocaleString()}
                </span>
                <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 text-sm font-semibold rounded">
                  20% OFF
                </span>
              </div>
            </div>

            {/* Information Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-xl">
                <div className="text-2xl mb-2">🚚</div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Free Delivery
                </p>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  On orders above ₹5,000
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-xl">
                <div className="text-2xl mb-2">✅</div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Quality Assured
                </p>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  ISO certified materials
                </p>
              </div>
            </div>

            {/* Contact Button */}
            <button
              onClick={() => navigate("/contact")}
              className="w-full h-12 sm:w-full bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
              Get in Touch for More Details
            </button>

            {/* Tabs */}
            <div className="mt-16">
              <div className="border-b border-gray-200 dark:border-zinc-700">
                <nav className="flex space-x-8" aria-label="Product tabs">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 py-4 px-1 border-b-2 font-semibold text-base transition-colors ${
                        activeTab === tab.id
                          ? "border-blue-700 text-blue-800 dark:text-blue-200"
                          : "border-transparent text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                      }`}
                      aria-current={activeTab === tab.id ? "page" : undefined}
                    >
                      <span className="text-lg" aria-hidden="true">
                        {tab.icon}
                      </span>
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="py-8">
                {activeTab === "description" && (
                  <section className="prose dark:prose-invert max-w-none">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {product.description}
                    </p>
                  </section>
                )}
                {activeTab === "specifications" && (
                  <section className="grid md:grid-cols-2 gap-6">
                    {product.technicalSpecs.map((spec, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {spec.label}
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {spec.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </section>
                )}
                {activeTab === "features" && (
                  <section className="grid md:grid-cols-2 gap-6">
                    {product.keyFeatures.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-blue-700 dark:bg-blue-400 rounded-full flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-gray-700 dark:text-gray-200">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="bg-gray-50 dark:bg-zinc-800 py-16 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Related Products
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Discover more quality construction materials
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {relatedProducts.slice(0, 4).map((rp) => (
                  <Link
                    key={rp.id}
                    to={`/product/${rp.id}`}
                    className="group"
                  >
                    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:-translate-y-1">
                      <div className="relative overflow-hidden">
                        <img
                          src={rp.images[0]}
                          alt={rp.name}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                          {rp.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-gray-900 dark:text-white">
                            {rp.price}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            View Details
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
