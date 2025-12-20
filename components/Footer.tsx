
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
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
                Solo consultant providing evidence-based infection prevention with certified excellence.
              </p>
              <div className="flex gap-4">
                <a href="#" className="size-10 rounded-full bg-gray-50 dark:bg-neutral-dark flex items-center justify-center text-gray-400 hover:text-primary transition-all">
                  <span className="material-symbols-outlined">public</span>
                </a>
                <a href="#" className="size-10 rounded-full bg-gray-50 dark:bg-neutral-dark flex items-center justify-center text-gray-400 hover:text-primary transition-all">
                  <span className="material-symbols-outlined">mail</span>
                </a>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#181111] dark:text-white">Quick Links</h4>
              <div className="flex flex-col gap-3">
                <Link className="text-gray-500 hover:text-primary transition-colors font-medium" to="/">Home</Link>
                <a className="text-gray-500 hover:text-primary transition-colors font-medium" href="#services">Solutions</a>
                <a className="text-gray-500 hover:text-primary transition-colors font-medium" href="#about">Why Me</a>
                <Link className="text-gray-500 hover:text-primary transition-colors font-medium" to="/certification">Certification</Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#181111] dark:text-white">Direct Contact</h4>
              <div className="flex flex-col gap-3 text-gray-500 dark:text-gray-400">
                <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">location_on</span> Serving Central & Southern NJ</p>
                <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">call</span> (555) 123-4567</p>
                <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">mail</span> contact@ipexperts.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 dark:border-neutral-dark pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400 font-medium italic">© 2024 IP Experts. All rights reserved.</p>
            <div className="flex gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
               <a href="#" className="hover:text-primary">Privacy Policy</a>
               <a href="#" className="hover:text-primary">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
