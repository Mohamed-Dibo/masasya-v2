import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Aluminum() {
const [showDetails,setShowDetails] = useState(false);

  // Array of aluminum products with their details
  const aluminumProducts = [
    {
      id: 1,
      name: "Premium Aluminum Handle",
      description: "Modern aluminum handle with brushed finish",
      price: 29.99,
      image: "/images/LED_profile.jpg"
    },
    {
      id: 2,
      name: "Aluminum Profile Strip",
      description: "High-quality aluminum profile for cabinet edges",
      price: 45.99,
      image: "/images/LED_profile2.jpg"
    },
   
    {
      id: 4,
      name: "Aluminum Corner Guard",
      description: "Protective aluminum corner guard with sleek design",
      price: 19.99,
      image: "/images/Closets_profile.jpg"
    },
    
    {
      id: 5,
      name: "Aluminum Corner Guard",
      description: "Protective aluminum corner guard with sleek design",
      price: 19.99,
      image: "/images/GLASS_PROFILE.jpg"
    }
  , {
    id: 3,
    name: "Aluminum Corner Guard",
    description: "Protective aluminum corner guard with sleek design",
    price: 19.99,
    image: "/images/Closets_profile_new.jpg"
  },
    
    // Add more products as needed
  ];

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
            Aluminum Products
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our premium collection of aluminum handles, profiles, and accessories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aluminumProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-lg 
                       hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative h-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {product.name}
                </h2>
                {
                  showDetails && <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {product.description}
                </p>
                }
                
                <div className="flex items-center justify-between">
                  {/* <span className="text-2xl font-bold text-primary-600">
                    ${product.price}
                  </span> */}
                  <button
                    className="px-4 py-2 bg-primary-500 text-white rounded-lg
                             hover:bg-primary-600 transition-colors duration-300"
                             onClick={()=>{
                              setShowDetails(!showDetails)
                            }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Choose Our Aluminum Products?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality",
                description: "Made from high-grade aluminum for lasting durability",
                icon: (
                  <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Modern Design",
                description: "Contemporary styles to enhance your kitchen's aesthetics",
                icon: (
                  <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                )
              },
              {
                title: "Easy Installation",
                description: "Simple mounting system for hassle-free setup",
                icon: (
                  <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="text-center p-6 bg-white dark:bg-dark-card rounded-xl shadow-soft"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Aluminum;