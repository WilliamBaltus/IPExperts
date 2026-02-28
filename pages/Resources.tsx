import React from 'react';
import { Link } from 'react-router-dom';

const resources = [
  {
    category: 'COVID-19 Resources',
    icon: 'coronavirus',
    items: [
      { title: 'COVID-19: NJ Public Health Professionals', url: 'https://www.nj.gov/health/', desc: 'Information and guidance for public health professionals in New Jersey.' },
      { title: 'COVID-19: New Jersey Updates', url: 'https://covid19.nj.gov/', desc: 'News and updates from the State of New Jersey on COVID-19.' },
      { title: 'COVID-19: NY Healthcare Providers', url: 'https://coronavirus.health.ny.gov/information-healthcare-providers', desc: 'Information for healthcare providers in New York State.' },
      { title: 'COVID-19: NY Vaccination Information', url: 'https://covid19vaccine.health.ny.gov/', desc: 'Information on COVID-19 vaccination programs in New York.' },
      { title: 'CDC COVID-19 Information', url: 'https://www.cdc.gov/coronavirus/2019-nCoV/index.html', desc: 'CDC hub for COVID-19 guidance, vaccination, and updates.' },
      { title: 'USA.gov – Government COVID-19 Response', url: 'https://www.usa.gov/coronavirus', desc: 'Resources to government response to COVID-19 and the latest updates.' },
      { title: 'WHO – COVID-19 Advice for the Public', url: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public', desc: 'Updated WHO advice and recommendations for the public.' },
      { title: 'WHO COVID-19 Global Dashboard', url: 'https://covid19.who.int/', desc: 'Live worldwide COVID-19 statistics and tracking dashboard.' },
    ]
  },
  {
    category: 'CDC Guidelines',
    icon: 'science',
    items: [
      { title: 'CDC Hand Hygiene in Healthcare Settings', url: 'https://www.cdc.gov/handhygiene/index.html', desc: 'Guidelines and resources for hand hygiene best practices.' },
      { title: 'CDC Isolation Precautions', url: 'https://www.cdc.gov/infection-control/hcp/isolation-precautions/?CDC_AAref_Val=https://www.cdc.gov/infectioncontrol/guidelines/isolation/index.html', desc: 'Guideline for isolation precautions in healthcare settings.' },
    ]
  },
  {
    category: 'Professional Organizations',
    icon: 'groups',
    items: [
      { title: 'APIC – Association for Professionals in Infection Control', url: 'https://apic.org/', desc: 'The leading professional association for infection preventionists.' },
      { title: 'CBIC – Certification Board of Infection Control', url: 'https://www.cbic.org/', desc: 'The body that administers the CIC® certification examination.' },
      { title: 'SHEA – Society for Healthcare Epidemiology of America', url: 'https://shea-online.org/', desc: 'Scientific society advancing the science and practice of healthcare epidemiology.' },
      { title: 'IDSA – Infectious Diseases Society of America', url: 'https://www.idsociety.org/', desc: 'Leading organization of physicians and scientists dedicated to improving health through infectious disease research and patient care.' },
      { title: 'AAMI – Association for the Advancement of Medical Instrumentation', url: 'https://www.aami.org/', desc: 'Standards body for medical device sterilization, reprocessing, and healthcare technology safety.' },
      { title: 'NJHA – New Jersey Hospital Association', url: 'https://www.njha.com/', desc: 'Representing New Jersey\'s healthcare community and advancing quality, safety, and access to care statewide.' },
      { title: 'CDC / NHSN – National Healthcare Safety Network', url: 'https://www.cdc.gov/nhsn/', desc: 'The CDC\'s national system for tracking healthcare-associated infections to improve patient safety.' },
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
