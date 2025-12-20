
import React from 'react';
import { Link } from 'react-router-dom';

const Certification: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom duration-500 bg-white dark:bg-background-dark py-20 min-h-screen">
      <div className="flex justify-center px-4 sm:px-10">
        <div className="w-full max-w-[900px]">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary mb-12 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span> Back to Home
          </Link>

          <div className="flex flex-col gap-10">
            <div className="space-y-4">
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary w-fit text-xs font-black uppercase tracking-widest">Industry Standard</div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight">The <span className="text-primary">CIC®</span> Certification</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Certification in Infection Control (CIC®) is the premier credential for healthcare professionals working in infection prevention and control.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-[#1a0e0e] p-8 rounded-3xl border border-gray-100 dark:border-neutral-dark">
                <h3 className="text-2xl font-bold mb-4">What is CIC®?</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  The CIC® credential identifies healthcare professionals who have mastered the knowledge and skills necessary to provide evidence-based infection prevention and control. It is administered by the Certification Board of Infection Control and Epidemiology (CBIC).
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-[#1a0e0e] p-8 rounded-3xl border border-gray-100 dark:border-neutral-dark">
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  At IPC Solutions, we mandate that all our lead consultants maintain an active CIC® certification. This ensures that the advice and strategies we provide are aligned with the latest global standards and peer-reviewed research.
                </p>
              </div>
            </div>

            <div className="space-y-6 bg-primary/5 p-10 rounded-[2.5rem] border border-primary/10">
              <h2 className="text-3xl font-bold">Why it matters to you</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="font-medium">Validated Expertise in IP Practices</span>
                 </div>
                 <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="font-medium">Commitment to Professional Standards</span>
                 </div>
                 <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="font-medium">Reduced Healthcare-Associated Infections</span>
                 </div>
                 <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="font-medium">Continuous Learning & Recertification</span>
                 </div>
              </div>
            </div>

            <div className="text-center pt-10 border-t border-gray-100 dark:border-neutral-dark">
               <p className="text-gray-500 italic mb-4 text-sm">Official link to CBIC coming soon.</p>
               <button className="bg-primary text-white h-12 px-8 rounded-xl font-bold shadow-lg shadow-primary/20 opacity-50 cursor-not-allowed">
                  Visit Certification Board (External)
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
