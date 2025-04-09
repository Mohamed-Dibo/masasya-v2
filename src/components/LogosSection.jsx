import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function LogosSection() {

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Our lOGOS</h2>
          <p className="mt-4 text-lg text-gray-600">Trusted by leading brands worldwide</p>
        </motion.div>

        
        <div className="text-center mt-12">
          <Link
            to="/logos"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-500 hover:bg-primary-600 transition-colors duration-300"
          >
            View All Logos brands
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LogosSection;