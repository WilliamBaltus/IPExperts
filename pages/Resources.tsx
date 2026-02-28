import React from 'react';
import { Link } from 'react-router-dom';

const resources = [
  {
    category: 'CDC Guidelines',
    icon: 'science',
    items: [
      { title: 'Healthcare Infection Control Practices Advisory Committee (HICPAC)', url: 'https://www.cdc.gov/hicpac/index.html', desc: 'Federal advisory committee that provides guidance on infection control in healthcare settings.' },
      { title: 'CDC Hand Hygiene in Healthcare Settings', url: 'https://www.cdc.gov/handhygiene/index.html', desc: 'Guidelines and resources for hand hygiene best practices.' },
      { title: 'CDC Isolation Precautions', url: 'https://www.cdc.gov/infectioncontrol/guidelines/isolation/index.html', desc: 'Guideline for isolation precautions in healthcare settings.' },
    ]
  },
  {
    category: 'Professional Organizations',
    icon: 'groups',
    items: [
      { title: 'APIC – Association for Professionals in Infection Control', url: 'https://apic.org/', desc: 'The leading professional association for infection preventionists.' },
      { title: 'CBIC – Certification Board of Infection Control', url: 'https://www.cbic.org/', desc: 'The body that administers the CIC® certification examination.' },
      { title: 'SHEA – Society for Healthcare Epidemiology of America', url: 'https://shea-online.org/', desc: 'Scientific society advancing the science and practice of healthcare epidemiology.' },
    ]
  },
  {
    category: 'Regulatory & Accreditation',
    icon: 'verified_user',
    items: [
      { title: 'The Joint Commission (TJC)', url: 'https://www.jointcommission.org/', desc: 'Accreditation standards for healthcare organizations including infection prevention requirements.' },
      { title: 'CMS – Centers for Medicare & Medicaid Services', url: 'https://www.cms.gov/', desc: 'Federal agency overseeing Medicare and Medicaid programs and facility compliance.' },
      { title: 'NJ Department of Health', url: 'https://www.nj.gov/health/', desc: 'State health department resources and regulatory guidance for New Jersey facilities.' },
    ]
  },
];

const Resources: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom duration-500 bg-white dark:bg-background-dark py-20 min-h-screen">
      <div className="flex justify-center px-4 sm:px-10">
        <div className="w-full max-w-[1000px]">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary mb-12 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span> Back to Home
          </Link>

          <div className="flex flex-col gap-12">
            <div className="space-y-4">
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary w-fit text-xs font-black uppercase tracking-widest">Infection Prevention Resources</div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">Trusted <span className="text-primary">Resources</span></h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-[700px]">
                A curated collection of guidelines, tools, and organizations for infection prevention and control professionals.
              </p>
            </div>

            <div className="flex flex-col gap-10">
              {resources.map((section, sIdx) => (
                <div key={sIdx}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="size-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">{section.icon}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#181111] dark:text-white">{section.category}</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.items.map((item, iIdx) => (
                      <a
                        key={iIdx}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col gap-2 bg-gray-50 dark:bg-[#1a0e0e] rounded-2xl p-5 border border-transparent hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm font-bold text-[#181111] dark:text-white group-hover:text-primary transition-colors leading-snug">{item.title}</h3>
                          <span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors flex-shrink-0 !text-[18px]">open_in_new</span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center space-y-4">
              <span className="material-symbols-outlined text-primary !text-[40px]">mail</span>
              <h3 className="text-xl font-black text-[#181111] dark:text-white">Have a question or need guidance?</h3>
              <p className="text-gray-500 dark:text-gray-400">Reach out directly for personalized infection prevention support.</p>
              <a
                href="mailto:ritalbaltus@gmail.com"
                className="inline-flex items-center gap-2 bg-primary text-white h-12 px-8 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-red-600 transition-all"
              >
                <span className="material-symbols-outlined">mail</span>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
