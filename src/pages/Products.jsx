import {  useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Products() {
  const { t } = useTranslation();
  const [categories] = useState([
  
    {
      id: 'kitchenAccessories',
      name: 'Kitchen Accessories',
      image: 'accessories.jpg',
      description: 'Essential accessories to enhance kitchen functionality'
    },
    {
      id: 'handles',
      name: 'Handles',
      image: 'handle.jpg',
      description: 'Elegant handles and knobs for cabinets and drawers'
    },
    {
      id: 'mattHpl',
      name: 'Matt HPL',
      image: 'mathpl.jpg',
      description: 'Premium matt finish HPL surfaces for modern kitchens'
    },
    {
      id: 'mdfHighGlossy',
      name: 'MDF High Glossy',
      image: 'mdfhighglossy.jpg',
      description: 'Sleek and glossy MDF panels for luxurious designs'
    },
    {
      id: 'Aluminum',
      name: 'Aluminum',
      image: 'images/LED_profile2.jpg',
      description: 'Contemporary aluminum profiles and accessories'
    },
    {
      id: 'Glossary-Hpl',
      name: 'Glossary HPL',
      image: 'glossyhpl.jpg',
      description: 'High-gloss HPL finishes for stunning surfaces'
    },
    {
      id: 'basicHardware',
      name: 'Basic Hardware',
      image: 'basichardware.jpg',
      description: 'Quality hardware solutions for installations'
    },
    {
      id: 'chipboardPanels',
      name: 'Chipboard Panels',
      image: 'chipboard.jpg',
      description: 'Durable chipboard panels for construction'
    }
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

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
            {t('nav.products')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our extensive collection of premium kitchen and wardrobe solutions
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="product-grid"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="group product-card"
            >
              <Link to={`/products/${category.id}`} className="block">
                <div className="product-image">
                  <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/0 transition-colors duration-300" />
                  <img
                    src={category.image}
                    alt={category.name}
                    className="img-loading group-hover:scale-110 transition-transform duration-700"
                    onLoad={(e) => e.target.classList.replace('img-loading', 'img-loaded')}
                  />
                  <div className="product-overlay" />
                  
                  <div className="product-content">
                    <h2 className="product-title">
                      {t(`products.${category.id}`)}
                    </h2>
                    <p className="text-white/90 mb-6 opacity-0 group-hover:opacity-100 transform 
                                translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {category.description}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="mt-6 bg-white/20 rounded-full p-4 transform group-hover:translate-y-2 
                              transition-transform duration-300"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;