import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY < 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'nav.home' },
    { path: '/about', label: 'nav.about' },
    { path: '/products', label: 'nav.products' },
    { path: '/contact', label: 'nav.contact' },
    // { path: '/dashboard/add-product', label: 'nav.dashboard' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black backdrop-blur-lg shadow-lg'
          : 'bg-black backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img 
                  className="h-12 w-auto transform hover:scale-105 transition-transform duration-300" 
                  src="6.jpg" 
                  alt="Masya" 
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              {navItems.map(({ path, label }) => (
                <Link 
                  key={path}
                  to={path} 
                  className={`relative px-3 py-2 text-lg font-medium transition-colors duration-200
                    ${isActive(path) 
                      ? 'text-primary-400'
                      : 'text-gray-300 hover:text-primary-400'
                    }
                    after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-0.5
                    after:bg-primary-400 after:transition-all after:duration-300
                    ${isActive(path) ? 'after:w-full' : 'after:w-0'} hover:after:w-full`}
                >
                  {t(label)}
                </Link>
              ))}
              <ThemeToggle />
              <button
                onClick={toggleLanguage}
                className="px-6 py-2.5 rounded-full bg-[#5C3D2E] text-primary-400 
                         hover:bg-[#4A3121] transform hover:-translate-y-0.5 
                         transition-all duration-300 font-medium text-sm"
              >
                {i18n.language === 'ar' ? 'English' : 'عربي'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-300 hover:bg-wood-light 
                         transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`sm:hidden absolute w-full bg-wood-dark shadow-lg 
                     transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map(({ path, label }) => (
              <Link 
                key={path}
                to={path} 
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200
                  ${isActive(path)
                    ? 'bg-wood text-primary-400'
                    : 'text-gray-300 hover:bg-wood hover:text-primary-400'
                  }`}
              >
                {t(label)}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="w-full mt-4 px-6 py-3 rounded-full bg-[#5C3D2E] text-primary-400
                       hover:bg-[#4A3121] transition-all duration-300 font-medium text-sm
                       hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {i18n.language === 'ar' ? 'English' : 'عربي'}
            </button>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20" />
    </>
  );
}

export default Navbar;