import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function KitchenAccessories() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSize, setSelectedSize] = useState('all');

  const accessories = [
    {
      id: "ASY4-924",
      name: "ASY4-924",
      size: "400 MM",
      images: [
        "/images/ASYA/ASY4-924/DSC_0584.JPG",
        "/images/ASYA/ASY4-924/DSC_0586.JPG",
        "/images/ASYA/ASY4-924/DSC_0587.JPG"
      ]
    },
    {
      id: "ASYA-900",
      name: "ASYA-900",
      size: "900 MM",
      images: ["/images/ASYA/ASYA-900/07-衣柜.jpg"]
    },
    {
      id: "ASYA-901",
      name: "ASYA-901",
      size: "900 MM",
      images: ["/images/ASYA/ASYA-901/07-衣柜.jpg"]
    },
    {
      id: "ASYA-902",
      name: "ASYA-902",
      size: "900 MM",
      images: ["/images/ASYA/ASYA-902/07-衣柜.jpg"]
    },
    {
      id: "ASYA-903",
      name: "ASYA-903",
      size: "900 MM",
      images: ["/images/ASYA/ASYA-903/07-衣柜.jpg"]
    },
    {
      id: "ASYA-904",
      name: "ASYA-904",
      size: "900 MM",
      images: ["/images/ASYA/ASYA-904/07-衣柜.jpg"]
    },
    {
      id: "ASYA-905",
      name: "ASYA-905",
      size: "400 MM - 600 MM",
      images: ["/images/ASYA/ASYA-905/07-衣柜.jpg"]
    },
    {
      id: "ASYA-906",
      name: "ASYA-906",
      size: ">/= 300 MM",
      images: [
        "/images/ASYA/ASYA-906/07-衣柜-1.jpg",
        "/images/ASYA/ASYA-906/07-衣柜-2.jpg"
      ]
    },
    {
      id: "ASYA-907",
      name: "ASYA-907",
      size: "400 MM - 600 MM",
      images: ["/images/ASYA/ASYA-907/07-衣柜.jpg"]
    },
    {
      id: "ASYA-908",
      name: "ASYA-908",
      size: "900 MM - 1000 MM",
      images: ["/images/ASYA/ASYA-908/07-衣柜.jpg"]
    },
    {
      id: "ASYA-909",
      name: "ASYA-909",
      size: ">/= 600 MM",
      images: ["/images/ASYA/ASYA-909/07-衣柜.jpg"]
    },
    {
      id: "ASYA-910",
      name: "ASYA-910",
      size: "400 MM - 600 MM",
      images: ["/images/ASYA/ASYA-910/07-衣柜.jpg"]
    },
    {
      id: "ASYA-920",
      name: "ASYA-920",
      size: "900 MM - 1000 MM LEFT",
      images: [
        "/images/ASYA/ASYA-920ASYA-921/03-转角拉篮-4.jpg",
        "/images/ASYA/ASYA-920ASYA-921/MD0201LR 场景图.jpg",
        "/images/ASYA/ASYA-920ASYA-921/MD0201LR场景图 道具.jpg",
        "/images/ASYA/ASYA-920ASYA-921/MD0201LR场景图（道具）.jpg"
      ]
    },
    {
      id: "ASYA-921",
      name: "ASYA-921",
      size: "900 MM - 1000 MM RIGHT",
      images: [
        "/images/ASYA/ASYA-920ASYA-921/03-转角拉篮-4.jpg",
        "/images/ASYA/ASYA-920ASYA-921/MD0201LR 场景图.jpg",
        "/images/ASYA/ASYA-920ASYA-921/MD0201LR场景图 道具.jpg",
        "/images/ASYA/ASYA-920ASYA-921/MD0201LR场景图（道具）.jpg"
      ]
    },
    {
      id: "ASYA-922",
      name: "ASYA-922",
      size: "450 MM",
      images: [
        "/images/ASYA/ASYA-922ASYA-923/DSC_00351.jpg",
        "/images/ASYA/ASYA-922ASYA-923/DSC_0038.jpg",
        "/images/ASYA/ASYA-922ASYA-923/DSC_0040.jpg"
      ]
    },
    {
      id: "ASYA-923",
      name: "ASYA-923",
      size: "600 MM",
      images: [
        "/images/ASYA/ASYA-922ASYA-923/DSC_00351.jpg",
        "/images/ASYA/ASYA-922ASYA-923/DSC_0038.jpg",
        "/images/ASYA/ASYA-922ASYA-923/DSC_0040.jpg"
      ]
    },
    {
      id: "ASYA-925",
      name: "ASYA-925",
      size: "900 MM",
      images: [
        "/images/ASYA/ASYA-925/02-高柜拉篮-1.jpg",
        "/images/ASYA/ASYA-925/02-高柜拉篮-2.jpg",
        "/images/ASYA/ASYA-925/02-高柜拉篮-3.jpg"
      ]
    },
    {
      id: "ASYA-926",
      name: "ASYA-926",
      size: "900 MM - 1000 MM RIGHT",
      images: [
        "/images/ASYA/ASYA-926ASYA-927/DSC_0220.jpg",
        "/images/ASYA/ASYA-926ASYA-927/DSC_0230.jpg",
        "/images/ASYA/ASYA-926ASYA-927/DSC_0232.jpg"
      ]
    },
    {
      id: "ASYA-927",
      name: "ASYA-927",
      size: "900 MM - 1000 MM LEFT",
      images: [
        "/images/ASYA/ASYA-926ASYA-927/DSC_0220.jpg",
        "/images/ASYA/ASYA-926ASYA-927/DSC_0230.jpg",
        "/images/ASYA/ASYA-926ASYA-927/DSC_0232.jpg"
      ]
    },
    {
      id: "ASYA-928",
      name: "ASYA-928",
      size: "900 MM",
      images: [
        "/images/ASYA/ASYA-928/DSC_0072.jpg",
        "/images/ASYA/ASYA-928/DSC_0074.jpg"
      ]
    },
    {
      id: "ASYA-929",
      name: "ASYA-929",
      size: "900 MM",
      images: [
        "/images/ASYA/ASYA-929/DSC_0089.JPG",
        "/images/ASYA/ASYA-929/DSC_0171.JPG",
        "/images/ASYA/ASYA-929/DSC_0177.JPG"
      ]
    },
    {
      id: "ASYA-930",
      name: "ASYA-930",
      size: "900 MM",
      images: [
        "/images/ASYA/ASYA-930ASYA-932/DSC_0035.JPG",
        "/images/ASYA/ASYA-930ASYA-932/DSC_0040.JPG",
        "/images/ASYA/ASYA-930ASYA-932/DSC_0080.JPG"
      ]
    },
    {
      id: "ASYA-932",
      name: "ASYA-932",
      size: "900 MM",
      images: [
        "/images/ASYA/ASYA-930ASYA-932/DSC_0035.JPG",
        "/images/ASYA/ASYA-930ASYA-932/DSC_0040.JPG",
        "/images/ASYA/ASYA-930ASYA-932/DSC_0080.JPG"
      ]
    },
    {
      id: "ASYA-933",
      name: "ASYA-933",
      size: "900 MM",
      images: [
        "/images/ASYA/ASYA-933ASYA-931/DSC_0041.JPG",
        "/images/ASYA/ASYA-933ASYA-931/DSC_0042.JPG",
        "/images/ASYA/ASYA-933ASYA-931/DSC_0081.JPG"
      ]
    },
    {
      id: "ASYA-931",
      name: "ASYA-931",
      size: "900 MM",
      images: [
        "/images/ASYA/ASYA-933ASYA-931/DSC_0041.JPG",
        "/images/ASYA/ASYA-933ASYA-931/DSC_0042.JPG",
        "/images/ASYA/ASYA-933ASYA-931/DSC_0081.JPG"
      ]
    },
    {
      id: "ASYA-934",
      name: "ASYA-934",
      size: "900 MM",
      images: [
        "/images/ASYA/ASYA-934/05-四边炉台拉篮-1.jpg",
        "/images/ASYA/ASYA-934/05-四边炉台拉篮-2.jpg",
        "/images/ASYA/ASYA-934/05-四边炉台拉篮-3.jpg"
      ]
    },
    {
      id: "ASYA-935",
      name: "ASYA-935",
      size: "600 MM",
      images: [
        "/images/ASYA/ASYA-935/DSC_0116.jpg",
        "/images/ASYA/ASYA-935/DSC_0117.jpg",
        "/images/ASYA/ASYA-935/DSC_0119.jpg"
      ]
    },
    {
      id: "ASYA-936",
      name: "ASYA-936",
      size: "900 MM",
      images: [
        "/images/ASYA/ASYA-936/06-地柜拉篮-1.jpg",
        "/images/ASYA/ASYA-936/06-地柜拉篮-2.jpg",
        "/images/ASYA/ASYA-936/06-地柜拉篮-3.jpg"
      ]
    },
    {
      id: "ASYA-937",
      name: "ASYA-937",
      size: "200 MM LEFT",
      images: [
        "/images/ASYA/ASYA-937/DSC_0185.jpg",
        "/images/ASYA/ASYA-937/DSC_0187.jpg"
      ]
    },
    {
      id: "ASYA-938",
      name: "ASYA-938",
      size: "250 MM",
      images: [
        "/images/ASYA/ASYA-938/06-地柜拉篮-4.jpg",
        "/images/ASYA/ASYA-938/09-韩式拉篮.jpg",
        "/images/ASYA/ASYA-938/IMG_3347-OK.jpg",
        "/images/ASYA/ASYA-938/IMG_3349.jpg"
      ]
    },
    {
      id: "ASYA-939",
      name: "ASYA-939",
      size: "900 MM ELECTRICAL",
      images: [
        "/images/ASYA/ASYA-939/未命名-986（改）.jpg",
        "/images/ASYA/ASYA-939/未命名-988（改）.jpg",
        "/images/ASYA/ASYA-939/未命名-989（改）.jpg"
      ]
    },
    {
      id: "ASYA-942",
      name: "ASYA-942",
      size: "300 MM",
      images: [
        "/images/ASYA/ASYA-942/未命名-873（改）.jpg",
        "/images/ASYA/ASYA-942/未命名-875（改）.jpg",
        "/images/ASYA/ASYA-942/未命名-876（改）.jpg"
      ]
    },
    {
      id: "ASYA-943",
      name: "ASYA-943",
      size: "900 MM",
      images: [
        "/images/ASYA/ASYA-943/未命名-832.png",
        "/images/ASYA/ASYA-943/未命名-840（改）.jpg",
        "/images/ASYA/ASYA-943/未命名-841（改）.jpg"
      ]
    },
    {
      id: "ASYA-944",
      name: "ASYA-944",
      size: "400 MM",
      images: [
        "/images/ASYA/ASYA-944/背景样板间-角度1（改）.jpg",
        "/images/ASYA/ASYA-944/背景样板间-角度2（改）.jpg",
        "/images/ASYA/ASYA-944/背景样板间-角度3（改）.jpg"
      ]
    },
    {
      id: "ASYA-945",
      name: "ASYA-945",
      size: "450 MM",
      images: [
        "/images/ASYA/ASYA-945ASYA-946/01-铝合金拉篮-1.jpg",
        "/images/ASYA/ASYA-945ASYA-946/01-铝合金拉篮-2.jpg",
        "/images/ASYA/ASYA-945ASYA-946/01-铝合金拉篮-3.jpg"
      ]
    },
    {
      id: "ACS-908",
      name: "ACS 908 GREY NEW",
      size: "830-1150mm",
      images: ["/images/ASYA/NEW ACCESSORIES/ACS 908 GREY NEW.jpeg"]
    },
    {
      id: "ACS-947",
      name: "ACS 947 GREY NEW",
      size: "630*455*115mm",
      images: ["/images/ASYA/NEW ACCESSORIES/ACS 947 GREY NEW.jpeg"]
    },
    {
      id: "ACS-948",
      name: "ACS 948 GREY NEW",
      size: "864*460*71mm",
      images: ["/images/ASYA/NEW ACCESSORIES/ACS 948 GREY NEW.jpg"]
    },
    {
      id: "ACS-949",
      name: "ACS 949 GREY NEW",
      size: "864*460*175mm",
      images: ["/images/ASYA/NEW ACCESSORIES/ACS 949 GREY NEW.jpg"]
    },
    {
      id: "ACS-950",
      name: "ACS 950 GREY NEW",
      size: "864*460*175mm",
      images: ["/images/ASYA/NEW ACCESSORIES/ACS 950 GREY NEW.jpg"]
    },
    {
      id: "ACS-951",
      name: "ACS 951 GREY NEW",
      size: "700×360×1350-1550mm 8-LAYER",
      images: ["/images/ASYA/NEW ACCESSORIES/ACS 951 GREY NEW.jpeg"]
    }
  ];

  const sizes = [...new Set(accessories.map(item => item.size))];

  const filteredAccessories = accessories.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSize = selectedSize === 'all' || item.size === selectedSize;
    return matchesSearch && matchesSize;
  });

  const openModal = (item, imageIndex = 0) => {
    setSelectedItem(item);
    setCurrentImageIndex(imageIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
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
            Premium Kitchen Accessories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our exclusive collection of ASYA kitchen accessories, designed for both functionality and elegance
          </p>
        </motion.div>

        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-64">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search accessories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                       focus:ring-2 focus:ring-primary-500 focus:border-transparent
                       dark:bg-dark-bg dark:text-white"
            />
          </div>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full md:w-48 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                     focus:ring-2 focus:ring-primary-500 focus:border-transparent
                     dark:bg-dark-bg dark:text-white"
          >
            <option value="all">All Sizes</option>
            {sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAccessories.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-lg 
                       hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div 
                className="relative h-80 overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors duration-300">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Size: {item.size}
                </p>
                
                {item.images.length > 1 && (
                  <div className="mt-4 grid grid-cols-4 gap-2">
                    {item.images.slice(1, 5).map((image, index) => (
                      <div 
                        key={index} 
                        className="aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-pointer
                                 hover:ring-2 hover:ring-primary-500 transition-all duration-300"
                        onClick={() => openModal(item, index + 1)}
                      >
                        <img
                          src={image}
                          alt={`${item.name} view ${index + 2}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedItem && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-10
                           bg-black bg-opacity-50 rounded-full p-2 backdrop-blur-sm"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                {selectedItem.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 text-white hover:text-gray-300 z-10
                               bg-black bg-opacity-50 rounded-full p-2 backdrop-blur-sm"
                    >
                      <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 text-white hover:text-gray-300 z-10
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
                  src={selectedItem.images[currentImageIndex]}
                  alt={selectedItem.name}
                  className="max-w-full max-h-[90vh] object-contain"
                  onClick={(e) => e.stopPropagation()}
                />

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                             bg-black bg-opacity-50 px-4 py-2 rounded-full backdrop-blur-sm">
                  <p className="text-white text-sm">
                    {selectedItem.name} - {selectedItem.size}
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

export default KitchenAccessories;