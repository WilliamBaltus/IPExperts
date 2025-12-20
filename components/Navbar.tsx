
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-[#f4f0f0] dark:border-neutral-dark shadow-sm">
      <div className="flex justify-center w-full px-4 sm:px-10">
        <header className="flex w-full max-w-[1200px] items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3 text-[#181111] dark:text-white group">
            <div className="size-10 text-primary flex items-center justify-center rounded-xl bg-primary/5 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined !text-[32px]">health_and_safety</span>
            </div>
            <h2 className="text-xl font-extrabold leading-tight tracking-tight">IP <span className="text-primary">Experts</span></h2>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-9">
            {isHome ? (
              <>
                <a className="text-sm font-semibold hover:text-primary transition-colors" href="#services">Services</a>
                <a className="text-sm font-semibold hover:text-primary transition-colors" href="#about">Why Me</a>
              </>
            ) : (
              <Link className="text-sm font-semibold hover:text-primary transition-colors" to="/">Home</Link>
            )}
            <Link className="text-sm font-semibold hover:text-primary transition-colors" to="/certification">Certification</Link>
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
              className="md:hidden text-[#181111] dark:text-white p-2"
            >
              <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-t border-gray-100 dark:border-neutral-dark px-4 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <Link to="/" className="block text-lg font-bold" onClick={() => setIsOpen(false)}>Home</Link>
          <a href="#services" className="block text-lg font-bold" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#about" className="block text-lg font-bold" onClick={() => setIsOpen(false)}>Why IP Experts</a>
          <Link to="/certification" className="block text-lg font-bold" onClick={() => setIsOpen(false)}>Certification</Link>
          <button 
            onClick={() => { onContactClick(); setIsOpen(false); }}
            className="w-full bg-primary text-white py-3 rounded-lg font-bold"
          >
            Schedule Call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
