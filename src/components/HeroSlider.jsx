import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: 'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg',
    title: 'Modern Kitchen Solutions',
    description: 'Transform your kitchen with our premium materials and expert design',
    link: '/products/kitchenCabinets'
  },
  {
    image: 'https://images.pexels.com/photos/6207014/pexels-photo-6207014.jpeg',
    title: 'Elegant Wardrobes',
    description: 'Custom wardrobe solutions that blend style with functionality',
    link: '/products/wardrobes'
  },
  {
    image: 'https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg',
    title: 'Premium Materials',
    description: 'High-quality materials for lasting beauty and durability',
    link: '/products'
  },
  {
    image: "slider157..png",
   title: '',
   subtitle:'',
   description:''
 },
 {
   image: "slider157.png",
   title: '',
   subtitle: '',
   description: ''
 },
 {
   image: "slider227..png",
   title: '',
   subtitle: '',
   description: ''
 },
 {
   image: "slider227.png",
   title: '',
   subtitle:'',
   description: ''
 },
 {
   image: "slider232.png",
   title: '',
   subtitle:'',
   description: ''
 }
];

function HeroSlider() {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = slides.map(slide => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoaded(true); // Show slider anyway
      }
    };

    preloadImages();
  }, []);

  if (!isLoaded) {
    return (
      <div className="h-screen flex items-center justify-center bg-wood">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} bg-primary-500"></span>`;
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                  >
                    <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
                      {slide.title}
                    </h2>
                    <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                    {/* <Link
                to="/products"
                className="px-8 py-4 rounded-full bg-primary-500 text-white
                         hover:bg-primary-600 transition-colors duration-300 text-lg font-medium
                         relative overflow-hidden group"
              >
                <span className="relative z-10">{t('home.hero.cta.products')}</span>
                <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 
                             transform translate-x-full group-hover:translate-x-0 transition-all duration-1000" />
              </Link> */}
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev !text-primary-500 !w-12 !h-12 !bg-white/10 !rounded-full
                      hover:!bg-white/20 transition-colors duration-300"></div>
        <div className="swiper-button-next !text-primary-500 !w-12 !h-12 !bg-white/10 !rounded-full
                      hover:!bg-white/20 transition-colors duration-300"></div>
      </Swiper>
    </div>
  );
}

export default HeroSlider;