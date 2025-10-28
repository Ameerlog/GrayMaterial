import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo.png";
import { navigationData, megaMenuData } from "../db/navBar";

const Navbar = ({ toggleTheme, darkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const megaMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll detection for navbar glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (link) => {
    if (link.type === "scroll") {
      scrollToSection(link.sectionId);
    } else if (link.type === "link") {
      navigate(link.path);
    }
  };

  // Animation Variants
  const megaMenuVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: { 
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg shadow-lg"
            : "bg-white dark:bg-zinc-900 shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                src={Logo}
                alt="Gray Material Logo"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationData.mainLinks.map((link) => (
                <div 
                  key={link.id} 
                  className="relative" 
                  ref={link.type === "mega" ? megaMenuRef : null}
                >
                  {link.type === "mega" ? (
                    <button
                      onMouseEnter={() => setMegaMenuOpen(true)}
                      onMouseLeave={() => setMegaMenuOpen(false)}
                      className="flex items-center space-x-1 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800"
                    >
                      <span>{link.label}</span>
                      <motion.div
                        animate={{ rotate: megaMenuOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link)}
                      className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800"
                    >
                      {link.label}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? 
                  <Sun className="w-5 h-5 text-yellow-500" /> : 
                  <Moon className="w-5 h-5 text-gray-700" />
                }
              </motion.button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Menu"
              >
                {mobileMenuOpen ? 
                  <X className="w-6 h-6" /> : 
                  <Menu className="w-6 h-6" />
                }
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Mega Menu */}
        <AnimatePresence>
          {megaMenuOpen && (
            <motion.div
              variants={megaMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
              className="absolute left-0 right-0 top-full bg-white dark:bg-zinc-900 shadow-2xl border-t border-gray-100 dark:border-gray-800 z-50"
            >
              <div className="max-w-7xl mx-auto px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Featured Section */}
                  <div className="md:col-span-1 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-800 dark:to-zinc-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                      {megaMenuData.featured.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                      {megaMenuData.featured.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        navigate(megaMenuData.featured.ctaPath);
                        setMegaMenuOpen(false);
                      }}
                      className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-md"
                    >
                      {megaMenuData.featured.ctaText}
                    </motion.button>
                  </div>

                  {/* Products Grid */}
                  <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {megaMenuData.products.map((product) => (
  <motion.button
    key={product.id}
    variants={itemVariants}
    whileHover={{ scale: 1.02, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
    onClick={() => {
      navigate(`/product/${product.id}`);
      setMegaMenuOpen(false);
    }}
    className="flex items-start space-x-4 p-4 rounded-lg text-left transition-all hover:shadow-md border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
  >
    <div className="flex-shrink-0">
      {product.icon && React.createElement(product.icon, { size: 28, className: "text-blue-600 dark:text-blue-400" })}
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 truncate">
        {product.name}
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
        {product.description}
      </p>
    </div>
  </motion.button>
))}

                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Slide-in Menu */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-zinc-900 shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-bold">Menu</h2>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                {navigationData.mainLinks.map((link) => (
                  <div key={link.id}>
                    {link.type === "mega" ? (
                      <div>
                        <button
                          onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                          className="flex items-center justify-between w-full text-lg font-medium hover:text-blue-600 transition-colors"
                        >
                          <span>{link.label}</span>
                          <motion.div
                            animate={{ rotate: mobileProductsOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {mobileProductsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden mt-3 space-y-2 pl-4"
                            >
                              {megaMenuData.products.map((product) => (
                                <button
                                  key={product.id}
                                  onClick={() => {
                                    navigate(`/product/${product.id}`);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors py-2 text-left"
                                >
                                  <span className="mr-2">{product.icon}</span>
                                  {product.name}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          handleNavClick(link);
                          setMobileMenuOpen(false);
                        }}
                        className="text-lg font-medium hover:text-blue-600 transition-colors block w-full text-left"
                      >
                        {link.label}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
