
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
                  <span className="text-[10px] font-bold tracking-widest uppercase">Certified Solo Consultant</span>
                </div>
                <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-[#181111] dark:text-white sm:text-6xl lg:text-7xl">
                  Expert Infection Prevention for a <span className="text-primary italic">Safer Tomorrow</span>
                </h1>
                <p className="text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 max-w-[600px]">
                  CIC® Certified Expertise providing dedicated, high-quality public health leadership and tailored strategies for your healthcare facility.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={onContactClick}
                  className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold shadow-xl shadow-primary/25 hover:bg-red-600 transition-all hover:-translate-y-1"
                >
                  Schedule Call
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
                      src={`https://picsum.photos/100/100?random=${i+20}`} 
                      className="h-12 w-12 rounded-full border-4 border-white dark:border-background-dark shadow-sm object-cover" 
                      alt="Facility Partner"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-200">Currently serving 8+ active clients</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Personalized attention for every project</p>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full lg:max-w-[500px]">
              <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 pointer-events-none"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1200" 
                  className="h-full w-full object-cover transition-transform hover:scale-110 duration-1000" 
                  alt="Specialized medical equipment"
                />
              </div>
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
                Targeted <span className="text-primary">Infection Control</span> Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-[700px]">
                I provide direct, evidence-based oversight to identify risks and maintain the highest safety standards.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Risk Assessments", icon: "content_paste_search", desc: "Systematic audits identifying environmental and clinical vulnerabilities." },
                { title: "Staff Training", icon: "school", desc: "Interactive training programs on PPE, hand hygiene, and transmission precautions." },
                { title: "Regulatory Compliance", icon: "verified_user", desc: "Expert preparation for Joint Commission (TJC), CMS, and State Health surveys." },
                { title: "Outbreak Response", icon: "coronavirus", desc: "Immediate investigation and containment strategies for healthcare infections." },
                { title: "Policy Development", icon: "policy", desc: "Directly authored IPC policies aligned with current CDC guidelines." },
                { title: "Construction (ICRA)", icon: "engineering", desc: "Professional risk assessments for renovations and new construction." }
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

      {/* Why IP Experts - Styled to match screenshot */}
      <section id="about" className="bg-[#fcfcfc] dark:bg-[#0c0606] py-24">
        <div className="flex justify-center px-4 sm:px-10">
          <div className="w-full max-w-[1000px] flex flex-col gap-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#181111] dark:text-white">Why Choose Our Consultancy?</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-[800px] leading-relaxed">
                Our team brings decades of public health experience and high-quality work to every project. We are dedicated to creating safer environments through proven methodologies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-white dark:bg-background-dark p-6 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-neutral-dark flex flex-col gap-6">
                <div className="w-full h-64 rounded-3xl overflow-hidden shadow-inner">
                  <img 
                    src="https://images.unsplash.com/photo-1505751172107-573225ad4b70?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover" 
                    alt="Clinical clipboard and stethoscope" 
                  />
                </div>
                <div className="px-2 pb-2 space-y-3">
                  <h3 className="text-2xl font-bold text-[#181111] dark:text-white">CIC® Certified Expertise</h3>
                  <p className="text-[15px] leading-relaxed text-gray-400 font-medium">
                    All our consultants hold the Certification in Infection Control (CIC®), ensuring top-tier knowledge, professionalism, and adherence to CBIC standards. We don't just advise; we lead with certified authority.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white dark:bg-background-dark p-6 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-neutral-dark flex flex-col gap-6">
                <div className="w-full h-64 rounded-3xl overflow-hidden bg-[#e0f2f1]">
                  <img 
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover" 
                    alt="Medical professionals illustration style" 
                  />
                </div>
                <div className="px-2 pb-2 space-y-3">
                  <h3 className="text-2xl font-bold text-[#181111] dark:text-white">Rapid Outbreak Response</h3>
                  <p className="text-[15px] leading-relaxed text-gray-400 font-medium">
                    When infection rates rise, time is critical. We offer immediate support and strategic planning to contain and mitigate infection outbreaks effectively, minimizing impact on operations and reputation.
                  </p>
                </div>
              </div>
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
              "Working with a single specialized expert transformed our response. The training provided created a noticeable culture shift towards patient safety."
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
                  Schedule a 15-minute call to discuss your specific facility needs directly with a certified specialist.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                 <button onClick={onContactClick} className="bg-primary text-white h-16 px-10 rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:bg-red-600 transition-all">
                    Schedule Call Now
                 </button>
                 <button onClick={onContactClick} className="bg-white dark:bg-transparent border-2 border-gray-200 dark:border-neutral-dark h-16 px-10 rounded-2xl font-bold text-lg hover:bg-gray-100 dark:hover:bg-neutral-light/5 transition-all">
                    Email Inquiries
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
