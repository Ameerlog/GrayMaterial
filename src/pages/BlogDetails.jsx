import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { blogs } from "../db/blogs";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 dark:bg-zinc-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Blog Not Found
          </h2>
          <Link to="/blogs" className="text-blue-600 hover:underline">
            Back to Blog List
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const relatedBlogs = blogs.filter(
    b => b.category === blog.category && b.id !== blog.id
  );

  return (
    <div className="px-6 md:px-16 py-16 bg-white dark:bg-zinc-900">
      {/* Breadcrumb */}
      <nav className="flex text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link to="/" className="hover:text-gray-800 dark:hover:text-white">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/blogs" className="hover:text-gray-800 dark:hover:text-white">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 dark:text-white font-medium">
          {blog.title}
        </span>
      </nav>

      {/* Blog Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {blog.title}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mb-4">
          {formattedDate} by {blog.author}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {blog.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <img
          src={blog.image}
          alt={`Image for blog: ${blog.title}`}
          width={1200}
          height={500}
          className="w-full h-96 md:h-[500px] object-cover rounded-xl shadow-lg mb-8"
        />

        {/* Blog Content */}
        <div className="prose dark:prose-invert max-w-full text-gray-700 dark:text-gray-300 leading-relaxed">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
      </div>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Related Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedBlogs.map(rb => (
              <Link
                key={rb.id}
                to={`/blogs/${rb.id}`}
                className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-zinc-800"
              >
                <div className="overflow-hidden h-48 md:h-56">
                  <img
                    src={rb.image}
                    alt={`Image for blog: ${rb.title}`}
                    width={400}
                     height={250}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {rb.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {new Date(rb.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    by {rb.author}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm line-clamp-3">
                    {rb.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <Link
          to="/blogs"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          ← Back to Blog List
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
