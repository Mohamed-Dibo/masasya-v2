import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import html2canvas from 'html2canvas';

function KitchenDesigner() {
  const [section, setSection] = useState('');
  const [material, setMaterial] = useState('');
  const [images, setImages] = useState([]);
  const [designElements, setDesignElements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const designRef = useRef(null);

  const handleSectionChange = (e) => {
    setSection(e.target.value);
    setMaterial('');
    setImages([]);
  };

  const handleMaterialChange = async (e) => {
    const selectedMaterial = e.target.value;
    setMaterial(selectedMaterial);
    
    if (selectedMaterial) {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/api/images/${selectedMaterial}`);
        if (!response.ok) throw new Error('Failed to fetch images');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
        toast.error('Failed to load materials. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleImageClick = async (imageUrl, imageName) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/images/app/${material}/${section}/${imageName}`
      );
      if (!response.ok) throw new Error('Failed to fetch design element');
      const data = await response.json();
      const modifiedURL = data.imageURL.replace('/api', '');
      
      setDesignElements(prev => [...prev, {
        id: Date.now(),
        url: `http://localhost:3000${modifiedURL}`,
        name: imageName,
        section
      }]);
    } catch (error) {
      console.error('Error adding design element:', error);
      toast.error('Failed to add design element. Please try again.');
    }
  };

  const removeDesignElement = (elementId) => {
    setDesignElements(prev => prev.filter(element => element.id !== elementId));
  };

  const downloadDesign = async () => {
    if (!designRef.current || downloading) return;
    
    setDownloading(true);
    try {
      // Wait for all images to load
      const loadImages = async () => {
        const images = [...designRef.current.getElementsByTagName('img')];
        const loadPromises = images.map(img => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
          });
        });
        await Promise.all(loadPromises);
      };

      await loadImages();

      const canvas = await html2canvas(designRef.current, {
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
        width: designRef.current.offsetWidth,
        height: designRef.current.offsetHeight,
        onclone: (clonedDoc) => {
          const clonedDesign = clonedDoc.querySelector('[data-design-container]');
          if (clonedDesign) {
            clonedDesign.style.position = 'relative';
            clonedDesign.style.transform = 'none';
            const clonedImages = clonedDesign.getElementsByTagName('img');
            Array.from(clonedImages).forEach(img => {
              // img.crossOrigin = 'anonymous';
              img.style.position = 'absolute';
              img.style.maxWidth = 'none';
              img.style.width = '100%';
              img.style.height = '100%';
              img.style.objectFit = 'cover';
            });
          }
        }
      });

      canvas.toBlob((blob) => {
        if (!blob) {
          throw new Error('Failed to create image blob');
        }

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `kitchen-design-${new Date().toISOString().slice(0,10)}.png`;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        toast.success('Design downloaded successfully!');
      }, 'image/png', 1.0);
    } catch (error) {
      console.error('Error downloading design:', error);
      toast.error('Failed to download design. Please try again.');
    } finally {
      setDownloading(false);
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
            Kitchen Designer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Design your dream kitchen with our interactive tool
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Design Area */}
          <div className="lg:col-span-8 bg-white dark:bg-dark-card rounded-2xl p-6 shadow-lg">
            <div 
              ref={designRef}
              data-design-container
              className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src="/mutfak.jpg"
                alt="Kitchen Base"
                className="absolute inset-0 w-full h-full object-cover"
                crossOrigin="anonymous"
              />
              {designElements.map(element => (
                <div key={element.id} className="absolute inset-0 group">
                  <img
                    src={element.url}
                    alt={element.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    // crossOrigin="anonymous"
                  />
                  <button
                    onClick={() => removeDesignElement(element.id)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1
                             opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            {/* <button
              onClick={downloadDesign}
              disabled={downloading || designElements.length === 0}
              className="mt-4 w-full px-6 py-3 bg-primary-500 text-white rounded-lg
                       hover:bg-primary-600 transition-colors duration-300 disabled:opacity-50
                       disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {downloading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  <span>Preparing Download...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Save Your Design</span>
                </>
              )}
            </button> */}
          </div>

          {/* Controls */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Design Options
              </h2>
              
              {/* Section Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Section
                </label>
                <select
                  value={section}
                  onChange={handleSectionChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                           focus:ring-2 focus:ring-primary-500 focus:border-transparent
                           dark:bg-dark-bg dark:text-white"
                >
                  <option value="">Choose Section</option>
                  <option value="up">Upper Cabinets</option>
                  <option value="down">Lower Cabinets</option>
                </select>
              </div>

              {/* Material Selection */}
              {section && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Material
                  </label>
                  <select
                    value={material}
                    onChange={handleMaterialChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                             focus:ring-2 focus:ring-primary-500 focus:border-transparent
                             dark:bg-dark-bg dark:text-white"
                  >
                    <option value="">Choose Material</option>
                    <option value="Chipboardpanels">Chipboard Panels</option>
                    <option value="Glossary-Hpl">Glossary HPL</option>
                    <option value="Matthpl">Matt HPL</option>
                    <option value="mdfhighglossy">MDF High Glossy</option>
                  </select>
                </div>
              )}
            </div>

            {/* Material Options */}
            {loading ? (
              <div className="flex items-center justify-center p-12">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent"></div>
              </div>
            ) : images.length > 0 && (
              <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Available Options
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="group cursor-pointer"
                      onClick={() => handleImageClick(image.imageURL, image.productName)}
                    >
                      <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <img
                          src={`http://localhost:3000${image.imageURL}`}
                          alt={image.productName}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          // crossOrigin="anonymous"
                        />
                      </div>
                      <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
                        {image.productName}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KitchenDesigner;