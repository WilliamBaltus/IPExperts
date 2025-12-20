
import React from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {
  onContactClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onContactClick }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative flex w-full flex-col overflow-hidden bg-white dark:bg-background-dark py-16 lg:py-24">
        <div className="flex justify-center px-4 sm:px-10">
          <div className="flex w-full max-w-[1200px] flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex flex-1 flex-col gap-8 text-left lg:pr-12">
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit">
                  <span className="text-[10px] font-bold tracking-widest uppercase">Public Health Leadership</span>
                </div>
                <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-[#181111] dark:text-white sm:text-6xl lg:text-7xl">
                  Expert Infection Prevention for a <span className="text-primary italic">Safer Tomorrow</span>
                </h1>
                <p className="text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 max-w-[600px]">
                  CIC® Certified Consultants delivering evidence-based strategies and regulatory guidance tailored for your unique healthcare environment.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={onContactClick}
                  className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold shadow-xl shadow-primary/25 hover:bg-red-600 transition-all hover:-translate-y-1"
                >
                  Schedule Consultation
                </button>
                <a 
                  href="#services"
                  className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-gray-100 dark:bg-neutral-dark text-[#181111] dark:text-white text-lg font-bold hover:bg-gray-200 dark:hover:bg-neutral-light/10 transition-all border border-transparent"
                >
                  View Services
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i} 
                      src={`https://picsum.photos/100/100?random=${i}`} 
                      className="h-12 w-12 rounded-full border-4 border-white dark:border-background-dark shadow-sm object-cover" 
                      alt="Consultant"
                    />
                  ))}
                  <div className="h-12 w-12 rounded-full border-4 border-white dark:border-background-dark bg-primary flex items-center justify-center text-white text-xs font-bold">
                    +50
                  </div>
                </div>
                <div>
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map((s) => <span key={s} className="material-symbols-outlined text-sm !fill-1">star</span>)}
                  </div>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Trusted by 50+ facilities nationwide</p>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full lg:max-w-[500px]">
              <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 pointer-events-none"></div>
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
                  className="h-full w-full object-cover transition-transform hover:scale-110 duration-1000" 
                  alt="Modern hospital facility"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 dark:bg-[#1a0e0e] py-12 border-y border-gray-100 dark:border-neutral-dark">
        <div className="flex justify-center px-4">
          <div className="w-full max-w-[1200px] text-center">
            <p className="mb-10 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Certified Partner with Industry Leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="flex items-center gap-3 font-bold text-2xl"><span className="material-symbols-outlined text-primary">local_hospital</span> MetroCare</div>
              <div className="flex items-center gap-3 font-bold text-2xl"><span className="material-symbols-outlined text-primary">health_metrics</span> SafePath</div>
              <div className="flex items-center gap-3 font-bold text-2xl"><span className="material-symbols-outlined text-primary">emergency</span> ClinicalHub</div>
              <div className="flex items-center gap-3 font-bold text-2xl"><span className="material-symbols-outlined text-primary">verified_user</span> ShieldGroup</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="bg-white dark:bg-background-dark py-24">
        <div className="flex justify-center px-4 sm:px-10">
          <div className="w-full max-w-[1200px] flex flex-col gap-16">
            <div className="flex flex-col gap-4 text-center items-center">
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl max-w-[800px]">
                Comprehensive <span className="text-primary">Infection Control</span> Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-[700px]">
                Evidence-based strategies designed to identify risks, empower staff, and maintain the highest standards of safety and compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Risk Assessments", icon: "content_paste_search", desc: "Systematic audits identifying environmental and clinical vulnerabilities." },
                { title: "Staff Training", icon: "school", desc: "Interactive training programs on PPE, hand hygiene, and transmission-based precautions." },
                { title: "Regulatory Compliance", icon: "verified_user", desc: "Preparation for Joint Commission (TJC), CMS, and State Health surveys." },
                { title: "Outbreak Response", icon: "coronavirus", desc: "Rapid investigation and containment strategies for healthcare-associated infections." },
                { title: "Policy Development", icon: "policy", desc: "Custom-tailored IPC policies aligned with current APIC and CDC guidelines." },
                { title: "Construction (ICRA)", icon: "engineering", desc: "Pre-construction risk assessments to protect patients during renovations." }
              ].map((service, idx) => (
                <div key={idx} className="group relative bg-gray-50 dark:bg-[#1a0e0e] p-8 rounded-3xl border border-transparent hover:border-primary/20 hover:bg-white dark:hover:bg-neutral-dark transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
                  <div className="size-16 flex items-center justify-center rounded-2xl bg-white dark:bg-background-dark text-primary shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-rotate-6">
                    <span className="material-symbols-outlined !text-[36px]">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#181111] dark:text-white">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About / Why Us */}
      <section id="about" className="bg-gray-50 dark:bg-[#0c0606] py-24">
        <div className="flex justify-center px-4 sm:px-10">
          <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Why Partner with Us?</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We don't just provide checklists; we provide a culture of safety. Our consultants are active leaders in the infection prevention community.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">workspace_premium</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">CIC® Certified Authority</h4>
                    <p className="text-gray-500 dark:text-gray-400">All lead consultants are Board Certified in Infection Control (CIC®), ensuring the highest level of expert knowledge.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Data-Driven Approach</h4>
                    <p className="text-gray-500 dark:text-gray-400">We utilize advanced surveillance data to identify trends and stop infections before they start.</p>
                  </div>
                </div>
              </div>

              <Link to="/certification" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group">
                Learn more about our certifications <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" className="rounded-3xl w-full aspect-square object-cover" alt="Medical lab" />
               <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400" className="rounded-3xl w-full aspect-square object-cover mt-8" alt="Medical staff" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-primary py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <span className="material-symbols-outlined !text-[300px]">format_quote</span>
        </div>
        <div className="flex justify-center px-4 sm:px-10 relative z-10">
          <div className="w-full max-w-[1000px] flex flex-col items-center text-center gap-8">
            <h3 className="text-3xl md:text-5xl font-extrabold leading-tight italic">
              "Their expertise was instrumental in navigating our recent JCAHO survey. The training provided created a noticeable culture shift towards patient safety."
            </h3>
            <div className="flex flex-col items-center">
              <div className="size-20 rounded-full border-4 border-white/20 overflow-hidden mb-4">
                 <img src="https://picsum.photos/200/200?random=10" className="w-full h-full object-cover" alt="Dr Jenkins" />
              </div>
              <p className="font-bold text-2xl">Dr. Sarah Jenkins</p>
              <p className="text-white/70 text-lg uppercase tracking-widest text-sm mt-1">Chief Medical Officer, Regional Hospital System</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-white dark:bg-background-dark py-24">
        <div className="flex justify-center px-4 sm:px-10">
          <div className="w-full max-w-[1100px] bg-gray-50 dark:bg-[#1a0e0e] rounded-[3rem] p-12 md:p-24 text-center border border-gray-100 dark:border-neutral-dark relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
            <div className="relative z-10 flex flex-col items-center gap-8">
               <div className="size-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined !text-[44px]">calendar_month</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-black text-[#181111] dark:text-white max-w-2xl leading-tight">
                  Ready to optimize your prevention program?
               </h2>
               <p className="text-xl text-gray-500 dark:text-gray-400 max-w-xl">
                  Schedule a complimentary 15-minute introductory session to discuss your specific facility needs.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                 <button onClick={onContactClick} className="bg-primary text-white h-16 px-10 rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:bg-red-600 transition-all">
                    Book Free Consultation
                 </button>
                 <button onClick={onContactClick} className="bg-white dark:bg-transparent border-2 border-gray-200 dark:border-neutral-dark h-16 px-10 rounded-2xl font-bold text-lg hover:bg-gray-100 dark:hover:bg-neutral-light/5 transition-all">
                    Inquire via Email
                 </button>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
