import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ShieldCheckIcon,
  CubeTransparentIcon,
  SparklesIcon,
  TruckIcon,
  UserGroupIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import LogosSection from '../components/LogosSection';

function Home() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
       image: "slider1.jpg",
      title: t('home.hero.slides.1.title'),
      subtitle: t('home.hero.slides.1.subtitle'),
      description: t('home.hero.slides.1.description')
    },
    {
      image: "slider2.jpg",
      title: t('home.hero.slides.2.title'),
      subtitle: t('home.hero.slides.2.subtitle'),
      description: t('home.hero.slides.2.description')
    },
    {
      image: "slider3.jpg",
      title: t('home.hero.slides.3.title'),
      subtitle: t('home.hero.slides.3.subtitle'),
      description: t('home.hero.slides.3.description')
    },
    {
      image: "slider4.jpg",
      title: t('home.hero.slides.4.title'),
      subtitle: t('home.hero.slides.4.subtitle'),
      description: t('home.hero.slides.4.description')
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-wood">
        <div className="absolute inset-0 bg-[url('/wood-pattern.png')] opacity-10" />
        <AnimatePresence initial={false} custom={currentSlide}>
          <motion.div
            key={currentSlide}
            custom={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
           
       
              <div className="relative h-full w-full">
                <div className="absolute inset-0 bg-wood/80" />
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
              </div>
         
          </motion.div>
        </AnimatePresence>

        {/* Slide Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${currentSlide === index 
                  ? 'bg-primary-400 w-8' 
                  : 'bg-primary-900/30 hover:bg-primary-400/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {slides[currentSlide].title}
              <span className="block text-3xl sm:text-4xl md:text-5xl text-primary-400 mt-4 font-light">
                {slides[currentSlide].subtitle}
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {slides[currentSlide].description}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/products"
                className="px-8 py-4 rounded-full bg-primary-500 text-white
                         hover:bg-primary-600 transition-colors duration-300 text-lg font-medium
                         relative overflow-hidden group"
              >
                <span className="relative z-10">{t('home.hero.cta.products')}</span>
                <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 
                             transform translate-x-full group-hover:translate-x-0 transition-all duration-1000" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full border-2 border-primary-400 
                         text-primary-400 hover:bg-primary-500/10
                         transition-colors duration-300 text-lg font-medium"
              >
                {t('home.hero.cta.contact')}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Arrow Navigation */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full
                   bg-wood-light/50 text-primary-400 hover:bg-wood-light 
                   transition-all duration-300 z-20 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full
                   bg-wood-light/50 text-primary-400 hover:bg-wood-light
                   transition-all duration-300 z-20 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-wood">
        <div className="absolute inset-0 bg-[url('/wood-pattern.png')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-primary-400">
              {t('home.whyChooseUs')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              {t('home.experienceExcellence')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheckIcon className="w-8 h-8" />,
                title: t('home.features.quality.title'),
                description: t('home.features.quality.description')
              },
              {
                icon: <CubeTransparentIcon className="w-8 h-8" />,
                title: t('home.features.design.title'),
                description: t('home.features.design.description')
              },
              {
                icon: <SparklesIcon className="w-8 h-8" />,
                title: t('home.features.maintenance.title'),
                description: t('home.features.maintenance.description')
              },
              {
                icon: <TruckIcon className="w-8 h-8" />,
                title: t('home.features.delivery.title'),
                description: t('home.features.delivery.description')
              },
              {
                icon: <UserGroupIcon className="w-8 h-8" />,
                title: t('home.features.support.title'),
                description: t('home.features.support.description')
              },
              {
                icon: <PhoneIcon className="w-8 h-8" />,
                title: t('home.features.service.title'),
                description: t('home.features.service.description')
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-wood-light rounded-2xl p-8 shadow-lg
                         hover:shadow-xl transition-all duration-500
                         transform hover:-translate-y-2 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-10 
                             transform translate-x-full group-hover:translate-x-0 transition-all duration-1000" />
                <div className="text-primary-400 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-wood">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba"
            alt="Kitchen Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-wood to-wood/95" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-wood-light/90 backdrop-blur-sm rounded-2xl p-12 border border-primary-500/10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-400 mb-6">
              {t('home.readyToTransform')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('home.letCreate')}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/KitchenDesigner"
                className="inline-block px-8 py-4 rounded-full bg-primary-500 text-white
                         hover:bg-primary-600 transition-colors duration-300 font-medium text-lg
                         transform hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group"
              >
                <span className="relative z-10">{t('home.hero.cta.getStarted')}</span>
                <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 
                             transform translate-x-full group-hover:translate-x-0 transition-all duration-1000" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
        {/* Logos Section */}
        <LogosSection />

    </div>
  );
}

export default Home;