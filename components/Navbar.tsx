
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-[#f4f0f0] dark:border-neutral-dark shadow-sm">
      <div className="flex justify-center w-full px-4 sm:px-10">
        <header className="flex w-full max-w-[1200px] items-center justify-between py-4">
          <button onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 text-[#181111] dark:text-white group">
            <div className="size-10 text-primary flex items-center justify-center rounded-xl bg-primary/5 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined !text-[32px]">health_and_safety</span>
            </div>
            <h2 className="text-xl font-extrabold leading-tight tracking-tight">IP <span className="text-primary">Experts</span></h2>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-9">
            <button onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-sm font-semibold hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('solutions')} className="text-sm font-semibold hover:text-primary transition-colors">Solutions</button>
            <button onClick={() => scrollToSection('certification')} className="text-sm font-semibold hover:text-primary transition-colors">Certification</button>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onContactClick}
              className="hidden sm:flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-11 px-5 bg-primary hover:bg-red-600 transition-all text-white text-sm font-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5"
            >
              Contact
            </button>
            
            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#181111] dark:text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-dark transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-t border-gray-100 dark:border-neutral-dark px-4 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <button onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }} className="block text-base font-bold w-full text-left">Home</button>
          <button onClick={() => scrollToSection('solutions')} className="block text-base font-bold w-full text-left">Solutions</button>
          <button onClick={() => scrollToSection('certification')} className="block text-base font-bold w-full text-left">Certification</button>
          <button
            onClick={() => { onContactClick(); setIsOpen(false); }}
            className="w-full bg-primary text-white py-3 px-4 rounded-lg font-bold min-h-[48px]"
          >
            Schedule Call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
