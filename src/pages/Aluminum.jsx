import { X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { t } from 'i18next';

function Aluminum() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('led-profiles');
  const [imageLoadStates, setImageLoadStates] = useState({});
  const [modalImageLoaded, setModalImageLoaded] = useState(false);

  const aluminumCategories = [
    {
      id: 'led-profiles',
      name: t('home.features.aluminum.products.LED Profiles'),
      description: 'Premium LED aluminum profiles for modern lighting solutions',
      products: [
        {
          id: 1,
          name: "Premium Aluminum Handle",
          description: "Modern aluminum handle with brushed finish",
          images: ["/images/LED_profile.jpg"],
          category: 'led-profiles'
        },
        {
          id: 2,
          name: "Aluminum Profile Strip",
          description: "High-quality aluminum profile for cabinet edges",
          images: ["/images/LED_profile2.jpg"],
          category: 'led-profiles'
        },
      ]
    },
    {
      id: '8 mm Aluminum sliding system  Silver Color Turkish',
      name: t('home.features.aluminum.products.8 mm Aluminum sliding system  Silver Color Turkish'),
      description: '',
      products: [
        {
          id: 4,
          name: "Closet Profile Modern",
          description: "Contemporary closet aluminum profile",
          images: ["/images/Closets_profile_new.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 1,
          name: "8 mm Aluminum sliding system  Silver Color Turkish",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/8 mm Aluminum sliding system  Silver Color Turkish/DSC_3224.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 2,
          name: "8 mm Aluminum sliding system  Silver Color Turkish",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/8 mm Aluminum sliding system  Silver Color Turkish/DSC_3225.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 3,
          name: "8 mm Aluminum sliding system  Silver Color Turkish",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/8 mm Aluminum sliding system  Silver Color Turkish/DSC_3255.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 4,
          name: "8 mm Aluminum sliding system  Silver Color Turkish",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/8 mm Aluminum sliding system  Silver Color Turkish/DSC_3256.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 5,
          name: "8 mm Aluminum sliding system  Silver Color Turkish",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/8 mm Aluminum sliding system  Silver Color Turkish/DSC_3258.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 6,
          name: "8 mm Aluminum sliding system  Silver Color Turkish",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/8 mm Aluminum sliding system  Silver Color Turkish/DSC_3261.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 7,
          name: "8 mm Aluminum sliding system  Silver Color Turkish",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/8 mm Aluminum sliding system  Silver Color Turkish/snapedit_1747224944164.jpeg"],
          category: 'closet-profiles'
        },
      ]
    },
    {
      id: 'Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm',
      name: t('home.features.aluminum.products.Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm'),
      description: '',
      products: [
        {
          id: 3,
          name: "Closet Profile Classic",
          description: "Traditional closet aluminum profile",
          images: ["/images/Closets_profile.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 1,
          name: "8 mm Aluminum sliding system  Silver Color Turkish",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm/ChatGPT Image 15 مايو 2025، 09_07_44 ص.png"],
          category: 'closet-profiles'
        },
        {
          id: 2,
          name: "Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm/ChatGPT Image 17 مايو 2025، 09_10_26 ص.png"],
          category: 'closet-profiles'
        },
        {
          id: 3,
          name: "Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm/DSC_3209.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 4,
          name: "Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm/DSC_3212.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 5,
          name: "Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm/DSC_3222.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 6,
          name: "Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm/DSC_3235.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 7,
          name: "Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm/DSC_3236.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 8,
          name: "Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm/DSC_3238.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 9,
          name: "Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm/DSC_3246.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 10,
          name: "Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm/DSC_3263.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 11,
          name: "Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding  (black - gold - champagne) Turkish hydraulic 8 mm/snapedit_1747230781289-pica.png"],
          category: 'closet-profiles'
        },
      ]
    },
    {
      id: 'Aluminum sliding system color (black - gold) Turkish hydraulic 18 mm',
      name: t('home.features.aluminum.products.Aluminum sliding system color (black - gold) Turkish hydraulic 18 mm'),
      description: '',
      products: [
        {
          id: 1,
          name: "Aluminum sliding system color (black - gold) Turkish hydraulic 18 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding system color (black - gold) Turkish hydraulic 18 mm/1.png"],
          category: 'closet-profiles'
        },
        {
          id: 2,
          name: "Aluminum sliding system color (black - gold) Turkish hydraulic 18 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding system color (black - gold) Turkish hydraulic 18 mm/2.png"],
          category: 'closet-profiles'
        },
        {
          id: 3,
          name: "Aluminum sliding system color (black - gold) Turkish hydraulic 18 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding system color (black - gold) Turkish hydraulic 18 mm/3.png"],
          category: 'closet-profiles'
        },
        {
          id: 4,
          name: "Aluminum sliding system color (black - gold) Turkish hydraulic 18 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding system color (black - gold) Turkish hydraulic 18 mm/DSC_3209.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 5,
          name: "Aluminum sliding system color (black - gold) Turkish hydraulic 18 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding system color (black - gold) Turkish hydraulic 18 mm/5.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 6,
          name: "Aluminum sliding system color (black - gold) Turkish hydraulic 18 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding system color (black - gold) Turkish hydraulic 18 mm/snapedit_1747231228965-pica.png"],
          category: 'closet-profiles'
        },
      ]
    },
    {
      id: 'Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm',
      name: t('home.features.aluminum.products.Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm'),
      description: '',
      products: [
        {
          id: 1,
          name: "Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm/DSC_3207.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 2,
          name: "Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm/DSC_3214.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 3,
          name: "Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm/DSC_3218.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 4,
          name: "Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm/DSC_3223.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 5,
          name: "Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm/DSC_3229.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 6,
          name: "Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm/DSC_3233.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 7,
          name: "Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm/DSC_3234.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 8,
          name: "Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm/DSC_3249.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 9,
          name: "Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm/DSC_3259.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 10,
          name: "Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm/DSC_3268.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 11,
          name: "Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Aluminum sliding system  colors (shiny silver - bronze) hydraulic 18 mm/snapedit_1747229666424.jpeg"],
          category: 'closet-profiles'
        },
      ]
    },
    {
      id: 'Hinged door Profile',
      name: t('home.features.aluminum.products.Hinged door Profile'),
      description: '',
      products: [
        {
          id: 5,
          name: "Closet Profile Modern",
          description: "Contemporary closet aluminum profile",
          images: ["/images/GLASS_PROFILE.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 1,
          name: "Hinged door Profile",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Hinged door Profile/DSC_3216.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 2,
          name: "Hinged door Profile",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Hinged door Profile/DSC_3239.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 3,
          name: "Hinged door Profile",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Hinged door Profile/DSC_3242.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 4,
          name: "Hinged door Profile",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Hinged door Profile/DSC_3243.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 5,
          name: "Hinged door Profile",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Hinged door Profile/DSC_3262.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 6,
          name: "Hinged door Profile",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Hinged door Profile/DSC_3264.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 7,
          name: "Hinged door Profile",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Hinged door Profile/DSC_3269.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 8,
          name: "Hinged door Profile",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Hinged door Profile/DSC_3270.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 9,
          name: "Hinged door Profile",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Hinged door Profile/DSC_3271.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 10,
          name: "Hinged door Profile",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Hinged door Profile/snapedit_1747470228962-pica.png"],
          category: 'closet-profiles'
        },
      ]
    },
    {
      id: '18 mm Aluminum Handles profile',
      name: t('home.features.aluminum.products.18 mm Aluminum Handles profile'),
      description: '',
      products: [
        {
          id: 1,
          name: "18 mm Aluminum Handles profile",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/18 mm Aluminum Handles profile/1.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 2,
          name: "18 mm Aluminum Handles profile",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/18 mm Aluminum Handles profile/2.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 3,
          name: "18 mm Aluminum Handles profile",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/18 mm Aluminum Handles profile/3.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 4,
          name: "18 mm Aluminum Handles profile",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/18 mm Aluminum Handles profile/4.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 5,
          name: "18 mm Aluminum Handles profile",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/18 mm Aluminum Handles profile/5.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 6,
          name: "18 mm Aluminum Handles profile",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/18 mm Aluminum Handles profile/6.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 7,
          name: "18 mm Aluminum Handles profile",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/18 mm Aluminum Handles profile/7.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 8,
          name: "18 mm Aluminum Handles profile",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/18 mm Aluminum Handles profile/8.jpg"],
          category: 'closet-profiles'
        },
      ]
    },
    {
      id: 'Turkish LED aluminum profiles , colors (black - champagne)',
      name: t('home.features.aluminum.products.Turkish LED aluminum profiles , colors (black - champagne)'),
      description: '',
      products: [
        {
          id: 1,
          name: "Turkish LED aluminum profiles , colors (black - champagne)",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Turkish LED aluminum profiles , colors (black - champagne)/DSC_3228.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 2,
          name: "Turkish LED aluminum profiles , colors (black - champagne)",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Turkish LED aluminum profiles , colors (black - champagne)/DSC_3248.jpg"],
          category: 'closet-profiles'
        },
        {
          id: 3,
          name: "Turkish LED aluminum profiles , colors (black - champagne)",
          description: "Traditional closet aluminum profile",
          images: ["/images/Aluminum/Turkish LED aluminum profiles , colors (black - champagne)/snapedit_1747470062083.jpeg"],
          category: 'closet-profiles'
        }
      ]
    },
  ];

  const activeCategories = aluminumCategories.filter(cat => cat.id === activeCategory);

  const handleImageLoad = (productId) => {
    setImageLoadStates(prev => ({ ...prev, [productId]: true }));
  };

  const openModal = (item, imageIndex = 0) => {
    setSelectedItem(item);
    setCurrentImageIndex(imageIndex);
    setModalImageLoaded(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
    setModalImageLoaded(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedItem) {
      setModalImageLoaded(false);
      setCurrentImageIndex((prev) =>
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedItem) {
      setModalImageLoaded(false);
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-dark-bg dark:to-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent
                        bg-gradient-to-r from-primary-600 to-primary-400">
            {t('products.aluminum')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('home.features.aluminum.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 overflow-x-auto">
            <div className="flex gap-3 min-w-max">
              {aluminumCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all duration-300
                    ${activeCategory === category.id
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30 scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div> */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-5">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center">
    {aluminumCategories.map((category) => {
      const isActive = activeCategory === category.id;
      return (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className={`
            relative flex flex-col justify-center items-center rounded-2xl p-4
            cursor-pointer text-center font-semibold transition-all duration-300 transform
            ${isActive 
              ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-2xl shadow-pink-300/50 scale-105'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105'
            }
          `}
          onClick={() => setActiveCategory(category.id)}
        >
          {/* Optional: Highlight animation */}
          {isActive && (
            <motion.span
              layoutId="highlight"
              className="absolute inset-0 rounded-2xl opacity-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}

          {/* Category Name */}
          <span className="relative z-10 text-sm sm:text-base md:text-lg">
            {category.name}
          </span>
        </motion.div>
      );
    })}
  </div>
</div>

        </motion.div>

        <AnimatePresence mode="wait">
          {activeCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {category.description && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8 text-center"
                >
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.products.map((product, productIndex) => (
                  <motion.div
                    key={`${category.id}-${product.id}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: productIndex * 0.05 }}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md
                             hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                    onClick={() => openModal(product, 0)}
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
                      {!imageLoadStates[`${category.id}-${product.id}`] && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
                        </div>
                      )}
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        loading="lazy"
                        onLoad={() => handleImageLoad(`${category.id}-${product.id}`)}
                        className={`w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ${
                          imageLoadStates[`${category.id}-${product.id}`] ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white text-sm font-medium">انقر للعرض</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-10
                           bg-black bg-opacity-50 rounded-full p-3 backdrop-blur-sm
                           transition-all duration-300 hover:scale-110"
                >
                  <X className="w-6 h-6" />
                </button>

                {selectedItem.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 text-white hover:text-gray-300 z-10
                               bg-black bg-opacity-50 rounded-full p-3 backdrop-blur-sm
                               transition-all duration-300 hover:scale-110"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 text-white hover:text-gray-300 z-10
                               bg-black bg-opacity-50 rounded-full p-3 backdrop-blur-sm
                               transition-all duration-300 hover:scale-110"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </button>
                  </>
                )}

                {!modalImageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="w-12 h-12 text-primary-500 animate-spin" />
                  </div>
                )}

                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  src={selectedItem.images[currentImageIndex]}
                  alt={selectedItem.name}
                  onLoad={() => setModalImageLoaded(true)}
                  className={`max-w-full max-h-[90vh] object-contain transition-opacity duration-300 ${
                    modalImageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onClick={(e) => e.stopPropagation()}
                />

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                             bg-black bg-opacity-70 px-8 py-4 rounded-2xl backdrop-blur-md">
                  <p className="text-white text-base font-medium text-center">
                    {selectedItem.name}
                  </p>
                  {selectedItem.images.length > 1 && (
                    <p className="text-gray-300 text-sm text-center mt-2">
                      {currentImageIndex + 1} / {selectedItem.images.length}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            لماذا تختار منتجات الألومنيوم لدينا؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "جودة عالية",
                description: "مصنوعة من ألومنيوم عالي الجودة للمتانة الدائمة",
                icon: "✓"
              },
              {
                title: "تصميم عصري",
                description: "أنماط معاصرة لتحسين جماليات المساحة الخاصة بك",
                icon: "✦"
              },
              {
                title: "تركيب سهل",
                description: "نظام تركيب بسيط للتثبيت بدون متاعب",
                icon: "⚙"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg
                         hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
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
