import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { supabase } from '../lib/supabase';

function Logos() {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/images/LOGO`);
        const data = await response.json(); // assuming the data is in JSON format
        console.log(data);
        setLogos(data)
      } catch (err) {
            console.error('Error fetching logos:', err);
            setError('Failed to load logos');
          } finally {
            setLoading(false);
          }
    };
  
    fetchData();
  
    return () => {
      // Optional cleanup code if needed
    };
  }, []);

  // const fetchLogos = async () => {
  //   try {
  //     const { data, error: supabaseError } = await supabase
  //       .from('products')
  //       .select('id, name, images')
  //       .eq('category', 'logo')
  //       .order('created_at', { ascending: true });

  //     if (supabaseError) {
  //       throw supabaseError;
  //     }

  //     const transformedLogos = data.map(logo => ({
  //       id: logo.id,
  //       name: logo.name,
  //       image_url: logo.images[0]
  //     }));

  //     setLogos(transformedLogos);
  //   } catch (err) {
  //     console.error('Error fetching logos:', err);
  //     setError('Failed to load logos');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent 
                       bg-gradient-to-r from-primary-600 to-primary-400">
            Our Logos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the brands we work with to deliver excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl 
                       transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-square relative mb-4">
                <img
                  src={`http://localhost:3000/${logo.imageURL}`}
                  alt={logo.productName}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900">
                {logo.productName}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Logos;