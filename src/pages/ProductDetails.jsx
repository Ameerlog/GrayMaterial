import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../db/product";
import { Download, FileText, ChevronRight } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
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
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/products" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Products
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 dark:text-white font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar */}
          <aside className="lg:col-span-3 space-y-6">
            
            {/* Products Navigation */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 overflow-hidden">
              <div className="px-5 py-4 bg-gray-50 dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Our Products</h3>
              </div>
              <div className="p-2">
                {products.map((p) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.id}`}
                    className={`flex items-center gap-3 p-3 rounded-md transition-all ${
                      p.id === product.id
                        ? "bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600"
                        : "hover:bg-gray-50 dark:hover:bg-zinc-800 border-l-4 border-transparent"
                    }`}
                  >
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate ${
                        p.id === product.id
                          ? "text-blue-700 dark:text-blue-400"
                          : "text-gray-900 dark:text-white"
                      }`}>
                        {p.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {p.category}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Brochure Download */}
            <div className="bg-blue-600 dark:bg-blue-700 rounded-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Product Brochure</h3>
                  <p className="text-xs text-blue-100">Technical Documentation</p>
                </div>
              </div>
              <p className="text-sm text-blue-50 mb-4">
                Download detailed specifications and product information.
              </p>
              <button className="w-full flex items-center justify-center gap-2 bg-white text-blue-600 font-medium py-2.5 rounded-md hover:bg-blue-50 transition-colors text-sm">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>

            {/* Contact Section */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Need Help?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Get in touch for product inquiries and support.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium py-2.5 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm"
              >
                Contact Us
              </button>
            </div>
          </aside>

          {/* Right Content - Product Details */}
          <main className="lg:col-span-9">
            
            {/* Product Header */}
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full mb-3">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {product.description}
              </p>
            </div>

          
            <div className="mb-8">
              <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>

            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
              <div className="space-y-3">
                {product.keyFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 py-3 border-b border-gray-200 dark:border-zinc-800 last:border-0">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Specifications</h2>
              <div className="bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200 dark:divide-zinc-800">
                    {product.technicalSpecs.map((spec, i) => (
                      <tr key={i} className="hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                          {spec.label}
                        </td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300 text-right">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Request a Quote</h3>
              <p className="text-blue-50 mb-6 max-w-2xl mx-auto">
                Contact our team for pricing, availability, and bulk order inquiries.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-blue-50 transition-colors"
              >
                Get in Touch
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
