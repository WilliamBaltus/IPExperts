import React from 'react';
import { Link } from 'react-router-dom';

const Credentials: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom duration-500 bg-white dark:bg-background-dark py-20 min-h-screen">
      <div className="flex justify-center px-4 sm:px-10">
        <div className="w-full max-w-[900px]">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary mb-12 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span> Back to Home
          </Link>

          <div className="flex flex-col gap-10">
            <div className="space-y-4">
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary w-fit text-xs font-black uppercase tracking-widest">Official Credentials</div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">Certification <span className="text-primary">Verification</span></h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                View my official CIC® certification and professional credentials from the Certification Board of Infection Control and Epidemiology (CBIC).
              </p>
            </div>

            {/* Digital Badge Display */}
            <div className="bg-gray-50 dark:bg-[#1a0e0e] p-8 sm:p-12 rounded-3xl border border-gray-100 dark:border-neutral-dark">
              <div className="flex flex-col items-center text-center space-y-8">
                {/* Badge Placeholder */}
                <div className="w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border-4 border-primary/20 flex items-center justify-center">
                  <div className="text-center space-y-6 p-8">
                    <div className="w-40 h-40 mx-auto rounded-full bg-white dark:bg-background-dark flex items-center justify-center border-8 border-primary/10 shadow-2xl">
                      <span className="material-symbols-outlined text-primary !text-[80px]">workspace_premium</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-4xl font-black text-[#181111] dark:text-white">CIC®</p>
                      <p className="text-lg font-semibold text-gray-500 dark:text-gray-400">Certified in Infection Control</p>
                      <p className="text-sm text-gray-400">Certification Board of Infection Control<br/>and Epidemiology (CBIC)</p>
                    </div>
                  </div>

                  {/* Replace with actual certificate image/PDF when available */}
                  {/* <img
                    src="/credentials/cic-certificate.png"
                    alt="CIC Certification"
                    className="w-full h-full object-contain"
                  /> */}
                </div>

                <div className="space-y-4 max-w-2xl">
                  <h3 className="text-2xl font-bold text-[#181111] dark:text-white">About This Credential</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    The CIC® credential demonstrates mastery of infection prevention and control competencies. Certification requires passing a comprehensive examination covering identification of infectious disease processes, surveillance and epidemiologic investigation, preventing and controlling transmission, and more.
                  </p>
                </div>

                {/* External Verification Links */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="https://www.cbic.org/verify-certification"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white h-12 px-8 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-red-600 transition-all"
                  >
                    <span className="material-symbols-outlined">verified</span>
                    Verify on CBIC Website
                  </a>
                  <a
                    href="https://www.cbic.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-neutral-dark text-[#181111] dark:text-white h-12 px-8 rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-neutral-light/10 transition-all"
                  >
                    Learn About CIC®
                    <span className="material-symbols-outlined">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Instructions for Updating */}
            <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 flex-shrink-0">info</span>
                <div className="space-y-2">
                  <h4 className="font-bold text-blue-900 dark:text-blue-100">To Display Your Certificate:</h4>
                  <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1 list-decimal list-inside">
                    <li>Save your CIC certificate as an image (PNG/JPG) or PDF screenshot</li>
                    <li>Place the file in <code className="bg-blue-100 dark:bg-blue-900 px-2 py-0.5 rounded">/public/credentials/cic-certificate.png</code></li>
                    <li>Uncomment the <code className="bg-blue-100 dark:bg-blue-900 px-2 py-0.5 rounded">&lt;img&gt;</code> tag in <code className="bg-blue-100 dark:bg-blue-900 px-2 py-0.5 rounded">pages/Credentials.tsx</code></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
