import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import AddProduct from './pages/Dashboard/AddProduct';
import Login from './pages/Login';
import './i18n';
import Logos from './pages/logos';
import Aluminum from './pages/Aluminum';
import BasicHardware from './pages/BasicHardware';
import KitchenAccessories from './pages/kitchenAccessories';
import KitchenDesigner from './pages/KitchenDesigner';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50 font-arabic">
          <Navbar />
          <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logos" element={<Logos />} /> 
                <Route path="/KitchenDesigner" element={<KitchenDesigner />} /> 
                <Route path="/products" element={<Products />} />
                <Route path="/products/Aluminum" element={<Aluminum />} />
                <Route path="/products/basichardware" element={<BasicHardware />} />
                <Route path="/products/kitchenAccessories" element={<KitchenAccessories />} />
                <Route path="/products/:category" element={<ProductCategory />} />
                <Route path="/products/:category/:id" element={<ProductDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                {/* <Route 
                  path="/dashboard/add-product" 
                  element={
                    <ProtectedRoute>
                      <AddProduct />
                    </ProtectedRoute>
                  } 
                /> */}
              </Routes>
            </main>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;