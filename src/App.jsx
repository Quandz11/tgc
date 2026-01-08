import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';

// Back to Top Button Component
const BackToTop = () => {
  return (
    <a 
      className="fixed bottom-6 right-6 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-primary dark:text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 transition z-50" 
      href="#"
    >
      <span className="text-sm font-medium">Đầu trang</span>
      <span className="material-symbols-outlined text-base">arrow_upward</span>
    </a>
  );
};

function App() {
  // Simple state-based navigation
  const [currentPage, setCurrentPage] = React.useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'product':
        return <ProductPage />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header onNavigate={handleNavigate} />
      {renderPage()}
      <Footer />
      <BackToTop />
    </div>
  );
}


export default App;
