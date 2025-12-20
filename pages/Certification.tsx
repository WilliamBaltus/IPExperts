
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">The <span className="text-primary">CIC®</span> Certification</h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Certification in Infection Control (CIC®) is the premier credential for healthcare professionals working in infection prevention and control.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-[#1a0e0e] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-neutral-dark">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">What is CIC®?</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  The CIC® credential identifies healthcare professionals who have mastered the knowledge and skills necessary to provide evidence-based infection prevention and control. It is administered by the Certification Board of Infection Control and Epidemiology (CBIC).
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-[#1a0e0e] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-neutral-dark">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Commitment</h3>
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

            <div className="flex flex-col md:flex-row gap-8 items-center pt-10 border-t border-gray-100 dark:border-neutral-dark">
              {/* Digital Badge */}
              <div className="flex-shrink-0">
                <a
                  href="https://www.cbic.org/verify-certification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative w-48 h-48 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border-4 border-primary/20 flex items-center justify-center hover:border-primary/40 transition-all hover:scale-105">
                    {/* Placeholder for badge image */}
                    <div className="text-center space-y-2">
                      <div className="w-24 h-24 mx-auto rounded-full bg-white dark:bg-background-dark flex items-center justify-center border-4 border-primary/10 shadow-lg">
                        <span className="material-symbols-outlined text-primary !text-[48px]">workspace_premium</span>
                      </div>
                      <p className="text-sm font-bold text-[#181111] dark:text-white">CIC®</p>
                    </div>

                    {/* When user has actual badge image, replace with: */}
                    {/* <img
                      src="/path-to-badge-image.png"
                      alt="CIC Certification Badge"
                      className="w-full h-full object-contain p-6"
                    /> */}
                  </div>
                </a>
              </div>

              {/* Verification Info */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">Verify Our Credentials</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  Our CIC® certification is publicly verifiable through the Certification Board of Infection Control and Epidemiology (CBIC). Click the badge or the button below to verify our credentials directly on the CBIC website.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.cbic.org/verify-certification"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white h-12 px-6 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-red-600 transition-all"
                  >
                    <span className="material-symbols-outlined">verified</span>
                    Verify Certification
                  </a>
                  <a
                    href="https://www.cbic.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-neutral-dark text-[#181111] dark:text-white h-12 px-6 rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-neutral-light/10 transition-all"
                  >
                    Visit CBIC Website
                    <span className="material-symbols-outlined">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
