import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MagnifyingGlassIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function ProductCategory() {
  const { category } = useParams();
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch regular products
        const regularResponse = await fetch(`http://localhost:3000/api/images/${category}`);
        if (!regularResponse.ok) throw new Error('Failed to fetch regular products');
        const regularData = await regularResponse.json();
        
        // If category is handles, fetch new handles
        let newHandlesData = [];
        if (category.toLowerCase() === 'handles') {
          const newHandlesResponse = await fetch('http://localhost:3000/api/images/HANDLES/newhandels');
          if (newHandlesResponse.ok) {
            newHandlesData = await newHandlesResponse.json();
            // Add isNew flag to new handles
            newHandlesData = newHandlesData.map(product => ({
              ...product,
              isNew: true,
              images: [product.imageURL]
            }));
          }
        }

        // Transform regular data
        const transformedRegularData = regularData.map(product => ({
          ...product,
          images: [product.imageURL],
          isNew: false
        }));

        // Combine and set products
        const allProducts = [...newHandlesData, ...transformedRegularData];
        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  const filteredProducts = products
    .filter(product => 
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.Note && product.Note.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      // Always show new products first
      if (a.isNew && !b.isNew) return -1;
      if (!a.isNew && b.isNew) return 1;
      
      // Then apply selected sort
      if (sortBy === 'name') return a.productName.localeCompare(b.productName);
      if (sortBy === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
      return 0;
    });

  const openModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedProduct && selectedProduct.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProduct.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedProduct && selectedProduct.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 
                     transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-gray-50 to-white dark:from-dark-bg dark:to-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent 
                       bg-gradient-to-r from-primary-600 to-primary-400">
            {t(`products.${category}`)}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our collection of premium {t(`products.${category}`)}
          </p>
        </motion.div>

        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-64">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                       focus:ring-2 focus:ring-primary-500 focus:border-transparent
                       dark:bg-dark-bg dark:text-white"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full md:w-48 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                     focus:ring-2 focus:ring-primary-500 focus:border-transparent
                     dark:bg-dark-bg dark:text-white"
          >
            <option value="name">Sort by Name</option>
            <option value="newest">Sort by Newest</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-lg 
                       hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              <div 
                className="relative aspect-square overflow-hidden cursor-pointer"
                onClick={() => openModal(product)}
              >
                <img
                  src={`http://localhost:3000/${product.imageURL}`}
                  alt={product.productName}
                  className="w-full h-full object-cover transform group-hover:scale-110 
                           transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full 
                               text-sm font-semibold shadow-lg z-10">
                    New
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 
                             group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-6 py-3 bg-white/20 text-white rounded-full backdrop-blur-sm">
                    View 
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 
                             group-hover:text-primary-600 dark:group-hover:text-primary-400 
                             transition-colors duration-300">
                  {product.productName}
                </h2>
                {product.Note && (
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {product.Note}
                  </p>
                )}
                {product.MEG1 && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {product.MEG1}
                  </p>
                )}
                {product.MEG2 && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {product.MEG2}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProduct && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                  }}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-10
                           bg-black bg-opacity-50 rounded-full p-2 backdrop-blur-sm"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                {selectedProduct.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10
                               bg-black bg-opacity-50 rounded-full p-2 backdrop-blur-sm"
                    >
                      <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10
                               bg-black bg-opacity-50 rounded-full p-2 backdrop-blur-sm"
                    >
                      <ChevronRightIcon className="w-6 h-6" />
                    </button>
                  </>
                )}

                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  src={`http://localhost:3000/${selectedProduct.imageURL}`}
                  alt={selectedProduct.productName}
                  className="max-w-full max-h-[90vh] object-contain"
                  onClick={(e) => e.stopPropagation()}
                />

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                             bg-black bg-opacity-50 px-4 py-2 rounded-full backdrop-blur-sm">
                  <p className="text-white text-sm">
                    {selectedProduct.productName}
                    {selectedProduct.isNew && (
                      <span className="ml-2 text-primary-400">• New</span>
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ProductCategory;