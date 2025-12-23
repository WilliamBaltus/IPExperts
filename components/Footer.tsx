
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
  };

  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-100 dark:border-neutral-dark pt-20 pb-10">
      <div className="flex justify-center px-4 sm:px-10">
        <div className="w-full max-w-[1200px] flex flex-col gap-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
              <Link to="/" className="flex items-center gap-3 text-[#181111] dark:text-white">
                <span className="material-symbols-outlined text-primary !text-[32px]">health_and_safety</span>
                <span className="text-2xl font-black">IP <span className="text-primary">Experts</span></span>
              </Link>
              <p className="max-w-xs text-lg text-gray-500 dark:text-gray-400">
                Consultant providing evidence-based infection prevention with certified excellence.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#181111] dark:text-white">Quick Links</h4>
              <div className="flex flex-col gap-3">
                <button onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-gray-500 hover:text-primary transition-colors font-medium text-left">Home</button>
                <button onClick={() => scrollToSection('solutions')} className="text-gray-500 hover:text-primary transition-colors font-medium text-left">Solutions</button>
                <Link className="text-gray-500 hover:text-primary transition-colors font-medium" to="/certification">Certification</Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#181111] dark:text-white">Contact</h4>
              <div className="flex flex-col gap-3 text-gray-500 dark:text-gray-400">
                <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">location_on</span> New Jersey</p>
                <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">mail</span> ritalbaltus@gmail.com</p>
              </div>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/rita-baltus" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-gray-50 dark:bg-neutral-dark flex items-center justify-center text-gray-400 hover:text-primary transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:ritalbaltus@gmail.com" className="size-10 rounded-full bg-gray-50 dark:bg-neutral-dark flex items-center justify-center text-gray-400 hover:text-primary transition-all">
                  <span className="material-symbols-outlined">mail</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 dark:border-neutral-dark pt-10 flex justify-center items-center">
            <p className="text-sm text-gray-400 font-medium italic">© 2026 IP Experts LLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
