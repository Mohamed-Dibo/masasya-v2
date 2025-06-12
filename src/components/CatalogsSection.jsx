
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CatalogsSection() {
  const { t } = useTranslation();


  return (
    <section className="py-16 bg-gray-50">
     
       <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 shadow-sm">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4"> {t('catalogues')}</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
             {/* If you can\'t find what you\'re looking for, our team is here to help. Request a specific catalogue and we\'ll send it directly to your inbox. */}
            </p>
         
             <Link
            to="/Catalogues"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-500 hover:bg-primary-600 transition-colors duration-300"
          >
             {t('RequestCatalogue')}
          </Link>
          </div>
        </div>
    </section>
  );
}

export default CatalogsSection;