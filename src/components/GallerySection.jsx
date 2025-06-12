import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Gallery images with categories
  const galleryImages = [
    {
      id: 1,
      src: './gallary/144.jpg',
      category: 'kitchen',
    //   title: 'Modern Kitchen Design',
    //   description: 'Sleek contemporary kitchen with premium finishes'
    },
    {
      id: 2,
      src: './gallary/157..png',
      category: 'wardrobe',
    //   title: 'Custom Wardrobe',
    //   description: 'Elegant wardrobe solution with smart storage'
    },
    {
      id: 3,
      src: './gallary/157.png',
      category: 'kitchen',
    //   title: 'Luxury Kitchen',
    //   description: 'High-end kitchen with marble countertops'
    },
    {
      id: 4,
      src:'./gallary/207.png',
      category: 'living',
    //   title: 'Living Room Design',
    //   description: 'Modern living space with custom furniture'
    },
    {
      id: 5,
      src: './gallary/208.png',
      category: 'wardrobe',
    //   title: 'Walk-in Closet',
    //   description: 'Spacious walk-in closet with LED lighting'
    },
    {
      id: 6,
      src: './gallary/212.png',
      category: 'kitchen',
    //   title: 'Minimalist Kitchen',
    //   description: 'Clean lines and minimalist design'
    },
    {
      id: 7,
      src: './gallary/213.png',
      category: 'living',
    //   title: 'Contemporary Living',
    //   description: 'Stylish contemporary living room'
    },
    {
      id: 8,
      src: './gallary/223.jpg',
      category: 'kitchen',
    //   title: 'Industrial Kitchen',
    //   description: 'Industrial style kitchen design'
    },
    {
      id: 9,
      src: './gallary/227.png',
      category: 'wardrobe',
    //   title: 'Bedroom Storage',
    //   description: 'Integrated bedroom storage solutions'
    },
    {
      id: 10,
      src: './gallary/227..png',
      category: 'wardrobe',
    //   title: 'Bedroom Storage',
    //   description: 'Integrated bedroom storage solutions'
    }
    ,
    {
      id: 11,
      src: './gallary/232.png',
      category: 'wardrobe',
    //   title: 'Bedroom Storage',
    //   description: 'Integrated bedroom storage solutions'
    }
    ,
    {
      id: 12,
      src: './gallary/newcolors.png',
      category: 'wardrobe',
    //   title: 'Bedroom Storage',
    //   description: 'Integrated bedroom storage solutions'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'kitchen', name: 'Kitchens' },
    { id: 'wardrobe', name: 'Wardrobes' },
    { id: 'living', name: 'Living Spaces' }
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || filteredImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredImages.length]);

  // Reset slide when filter changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [filter]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-bg dark:to-dark-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent 
                       bg-gradient-to-r from-primary-600 to-primary-400">
            Our Gallery
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our stunning collection of completed projects and design inspirations
          </p>
        </motion.div>

        {/* Filter Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105
                ${filter === category.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 shadow-md'
                }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div> */}

        {/* Slider Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Slider */}
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait" custom={currentSlide}>
              {filteredImages.length > 0 && (
                <motion.div
                  key={`${filteredImages[currentSlide].id}-${filter}`}
                  custom={currentSlide}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.4 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      nextSlide();
                    } else if (swipe > swipeConfidenceThreshold) {
                      prevSlide();
                    }
                  }}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                  onClick={() => setSelectedImage(filteredImages[currentSlide])}
                >
                  <img
                    src={filteredImages[currentSlide].src}
                    alt={filteredImages[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <span className="inline-block px-3 py-1 bg-primary-500 text-white text-sm 
                                     font-medium rounded-full mb-4">
                        {categories.find(cat => cat.id === filteredImages[currentSlide].category)?.name}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold mb-3">
                        {filteredImages[currentSlide].title}
                      </h3>
                      <p className="text-lg text-gray-200 max-w-2xl">
                        {filteredImages[currentSlide].description}
                      </p>
                    </motion.div>
                  </div>

                  {/* View Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm 
                                rounded-full flex items-center justify-center hover:bg-white/30 
                                transition-colors duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 
                       backdrop-blur-sm rounded-full flex items-center justify-center 
                       hover:bg-white/30 transition-all duration-300 text-white group"
            >
              <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-200" 
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 
                       backdrop-blur-sm rounded-full flex items-center justify-center 
                       hover:bg-white/30 transition-all duration-300 text-white group"
            >
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-200" 
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-6 left-6 w-10 h-10 bg-white/20 backdrop-blur-sm 
                       rounded-full flex items-center justify-center hover:bg-white/30 
                       transition-colors duration-300 text-white"
            >
              {isAutoPlaying ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1" />
                </svg>
              )}
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {filteredImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary-500 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-300'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-8 flex justify-center space-x-4 overflow-x-auto pb-4">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentSlide
                    ? 'ring-4 ring-primary-500 scale-110'
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-dark-card rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedImage.description}
                </p>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 
                         text-white rounded-full flex items-center justify-center 
                         transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default GallerySection;