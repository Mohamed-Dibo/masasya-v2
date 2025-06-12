import  { useState, useEffect } from 'react';
import { Download, FileText, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Catalogues = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');


  const catalogues = [
    {
      id: 1,
      title: 'Modern Kitchen Collection 2025',
      description: 'Explore our latest modern kitchen designs with smart features and elegant finishes.',
      thumbnail: './kithen_accessories_cover.png',
      pdfUrl: '/catalogs/123.pdf',
      category: 'kitchens',
      date: 'January 2025',
      featured: true
    },
    {
      id: 2,
      title: 'Cabinet Hardware Catalogue',
      description: 'Premium cabinet handles, knobs, and hardware accessories for your kitchen renovation.',
      thumbnail: './WOODkUTCHEN.jpg',
      pdfUrl: '/catalogs/anka_merged (1).pdf',
      category: 'accessories',
      date: 'December 2024'
    },
    {
      id: 3,
      title: 'Classic Kitchen Catalogue',
      description: 'Timeless kitchen designs with traditional elements and quality craftsmanship.',
      thumbnail: './balck_white_mat.png',
      pdfUrl: '/catalogs/ÇERCEVE KAPAK SİSTEMLERİ.pdf',
      category: 'kitchens',
      date: 'October 2024',
      featured: true
    },
    {
      id: 4,
      title: 'Kitchen Storage Solutions',
      description: 'Innovative storage solutions to maximize your kitchen space and functionality.',
      thumbnail: './kitchen-storage-solutions.png',
      pdfUrl: '/catalogs/MAS-ASYA_Wooden-colors.pdf',
      category: 'storage',
      date: 'September 2024'
    },
    {
      id: 5,
      title: 'Kitchen Material Guide',
      description: 'Comprehensive guide to kitchen materials, finishes, and maintenance tips.',
      thumbnail: './new_catalogues.png',
      pdfUrl: '/catalogs/MAS-ASYA.pdf',
      category: 'guides',
      date: 'August 2024'
    },
    {
      id: 6,
      title: 'Kitchen Lighting Collection',
      description: 'Designer lighting solutions for modern and traditional kitchen spaces.',
      thumbnail: './black_golden_mat.png',
      pdfUrl: '/catalogs/SÜLEYMAN İRONA SİSTEM DETAYLARI-Model.pdf',
      category: 'accessories',
      date: 'July 2024'
    }
  ];


  

  const downloadCatalogue = (e, url, title) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = url;
    link.download = title.replace(/\s+/g, '-').toLowerCase() + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // const featuredCatalogues = catalogues.filter(cat => cat.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-wood text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-wood opacity-90"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight">{t('products.ProductCatalogues')}</h1>
            <p className="text-xl text-blue-100 mb-8">
              {t('products.ProductCatalogues.desc')}
            </p>
            <div className="relative max-w-2xl mx-auto">
              {/* <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div> */}
              {/* <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 rounded-xl border-0 bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 transition duration-200"
                // placeholder={t('Search catalogues...')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Catalogues */}
      {catalogues.length > 0 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl text-center font-bold text-gray-900 mb-8">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {catalogues.map(catalogue => (
              <div
                key={catalogue.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={catalogue.thumbnail}
                    alt={catalogue.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end text-white">
                  {/* <h3 className="text-2xl font-bold mb-2">{catalogue.title}</h3> */}
                  {/* <p className="text-gray-200 mb-4">{catalogue.description}</p> */}
                  <button
                    onClick={(e) => downloadCatalogue(e, catalogue.pdfUrl, catalogue.title)}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-fit"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    {t('Download')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      </div>
  );
};

export default Catalogues;