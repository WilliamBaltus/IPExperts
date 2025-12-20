
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Certification from './pages/Certification';
import ContactModal from './components/ContactModal';
import AIChatbot from './components/AIChatbot';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar onContactClick={() => setIsContactModalOpen(true)} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onContactClick={() => setIsContactModalOpen(true)} />} />
            <Route path="/certification" element={<Certification />} />
          </Routes>
        </main>

        <Footer />
        
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
        
        <AIChatbot />
      </div>
    </Router>
  );
};

export default App;
