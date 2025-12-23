
import React from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {
  onContactClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onContactClick }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative flex w-full flex-col overflow-hidden bg-white dark:bg-background-dark py-12 sm:py-16 lg:py-24">
        <div className="flex justify-center px-4 sm:px-10">
          <div className="flex w-full max-w-[1200px] flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex flex-1 flex-col gap-8 text-left lg:pr-12">
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit">
                  <span className="text-[10px] font-bold tracking-widest uppercase">CIC Certified Consultant</span>
                </div>
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#181111] dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Expert Infection Prevention for a <span className="text-primary italic">Safer Tomorrow</span>
                </h1>
                <p className="text-lg sm:text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 max-w-[600px]">
                  CIC® Certified Expertise providing dedicated, high-quality public health leadership and tailored strategies for your healthcare facility.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={onContactClick}
                  className="flex w-full sm:min-w-[200px] sm:w-auto cursor-pointer items-center justify-center rounded-xl h-12 sm:h-14 px-6 sm:px-8 bg-primary text-white text-base sm:text-lg font-bold shadow-xl shadow-primary/25 hover:bg-red-600 transition-all hover:-translate-y-1"
                >
                  Schedule Call
                </button>
                <button
                  onClick={() => scrollToSection('solutions')}
                  className="flex w-full sm:min-w-[200px] sm:w-auto cursor-pointer items-center justify-center rounded-xl h-12 sm:h-14 px-6 sm:px-8 bg-gray-100 dark:bg-neutral-dark text-[#181111] dark:text-white text-base sm:text-lg font-bold hover:bg-gray-200 dark:hover:bg-neutral-light/10 transition-all border border-transparent"
                >
                  View Solutions
                </button>
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
                  <p className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-200">Currently serving 8+ active clients</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Personalized attention for every project</p>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full lg:max-w-[500px] hidden lg:block">
              <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 pointer-events-none"></div>
                <img
                  src="/images/ipexpertsnj.png"
                  className="h-full w-full object-cover transition-transform hover:scale-110 duration-1000"
                  alt="IP Experts New Jersey - Infection Prevention Specialist"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Banner */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-primary/5 dark:from-primary/10 dark:via-background-dark dark:to-primary/10 border-y border-primary/10 dark:border-primary/20 py-12 sm:py-16 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="flex justify-center px-4 sm:px-10 relative z-10">
          <div className="w-full max-w-[1000px] text-center flex flex-col items-center gap-6">
          

            {/* Main Heading */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#181111] dark:text-white leading-tight max-w-[800px]">
              Providing <span className="text-primary">Infection Prevention</span> for New Jersey Healthcare Facilities
            </h3>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-[650px] leading-relaxed">
              Decades of public health experience and high-quality work to every project. Dedication to creating safer environments through proven methodologies.
            </p>


            {/* Features */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-4">
              <div className="flex items-center gap-2 bg-white dark:bg-neutral-dark px-4 py-2 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-primary !text-[20px]">schedule</span>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Rapid Response</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-neutral-dark px-4 py-2 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-primary !text-[20px]">person</span>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Personalized Service</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-neutral-dark px-4 py-2 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-primary !text-[20px]">verified</span>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-200">CIC® Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="bg-white dark:bg-background-dark py-16 sm:py-20 lg:py-24">
        <div className="flex justify-center px-4 sm:px-10">
          <div className="w-full max-w-[1200px] flex flex-col gap-16">
            <div className="flex flex-col gap-4 text-center items-center">
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl max-w-[800px]">
                Targeted <span className="text-primary">Infection Control</span> Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-[700px]">
                IP Experts provide direct, evidence-based oversight to identify risks and maintain the highest safety standards.
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
                <div key={idx} className="group relative bg-gray-50 dark:bg-[#1a0e0e] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-transparent hover:border-primary/20 hover:bg-white dark:hover:bg-neutral-dark transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
                  <div className="size-16 flex items-center justify-center rounded-2xl bg-white dark:bg-background-dark text-primary shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-rotate-6">
                    <span className="material-symbols-outlined !text-[36px]">{service.icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#181111] dark:text-white">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why IP Experts - Commented Out */}
      {/* <section id="about" className="bg-[#fcfcfc] dark:bg-[#0c0606] py-16 sm:py-20 lg:py-24">
        <div className="flex justify-center px-4 sm:px-10">
          <div className="w-full max-w-[1000px] flex flex-col gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#181111] dark:text-white">Why Me</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-[800px] leading-relaxed">
                I bring decades of public health experience and high-quality work to every project. I am dedicated to creating safer environments through proven methodologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-background-dark p-6 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-neutral-dark flex flex-col gap-6">
                <div className="w-full h-48 sm:h-56 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-inner">
                  <img
                    src="/images/cic_certified_expertise.png"
                    className="w-full h-full object-cover"
                    alt="CIC Certified Expertise"
                  />
                </div>
                <div className="px-2 pb-2 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#181111] dark:text-white">CIC® Certified Expertise</h3>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-gray-400 font-medium">
                    I hold the Certification in Infection Control (CIC®), ensuring top-tier knowledge, professionalism, and adherence to CBIC standards. I don't just advise; I lead with certified authority.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-background-dark p-6 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-neutral-dark flex flex-col gap-6">
                <div className="w-full h-48 sm:h-56 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden">
                  <img
                    src="/images/rapid_outbreak_response.png"
                    className="w-full h-full object-cover"
                    alt="Rapid Outbreak Response"
                  />
                </div>
                <div className="px-2 pb-2 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#181111] dark:text-white">Rapid Outbreak Response</h3>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-gray-400 font-medium">
                    When infection rates rise, time is critical. I offer immediate support and strategic planning to contain and mitigate infection outbreaks effectively, minimizing impact on operations and reputation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Brief Certification Section */}
      <section id="certification" className="bg-white dark:bg-background-dark py-20 sm:py-24">
        <div className="flex justify-center px-4 sm:px-10">
          <div className="w-full max-w-[1000px] flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

            {/* Left: Text Content */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit">
                <span className="text-[10px] font-bold tracking-widest uppercase">Nationally Recognized</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#181111] dark:text-white">
                CIC® Certified <span className="text-primary">Professional</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-[600px]">
                I maintain active Certification in Infection Control (CIC®) through the Certification Board of Infection Control and Epidemiology (CBIC), ensuring evidence-based practices and the highest professional standards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/credentials"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 h-12 sm:h-14 bg-primary text-white rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-primary/20 hover:bg-red-600 transition-all hover:-translate-y-0.5"
                >
                  <span className="material-symbols-outlined">verified</span>
                  Verify Credentials
                </Link>
              </div>
            </div>

            {/* Right: Badge/Visual */}
            <div className="flex-shrink-0">
              <a
                href="https://www.cbic.org/verify-certification"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative w-64 sm:w-72 h-64 sm:h-72 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border-4 border-primary/20 flex items-center justify-center hover:border-primary/40 transition-all hover:scale-105">
                  {/* Placeholder for badge image */}
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto rounded-full bg-white dark:bg-background-dark flex items-center justify-center border-8 border-primary/10 shadow-xl group-hover:shadow-2xl transition-all">
                      <span className="material-symbols-outlined text-primary !text-[64px]">workspace_premium</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-black text-[#181111] dark:text-white">CIC®</p>
                      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Certified Professional</p>
                    </div>
                  </div>

                  {/* When user has actual badge image, replace the above div with: */}
                  {/* <img
                    src="/path-to-badge-image.png"
                    alt="CIC Certification Badge"
                    className="w-full h-full object-contain p-8"
                  /> */}
                </div>
                <p className="text-center mt-4 text-sm text-gray-400 group-hover:text-primary transition-colors">
                  Click to verify credentials
                </p>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-primary py-16 sm:py-20 lg:py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <span className="material-symbols-outlined !text-[300px]">format_quote</span>
        </div>
        <div className="flex justify-center px-4 sm:px-10 relative z-10">
          <div className="w-full max-w-[1000px] flex flex-col items-center text-center gap-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight italic">
              "Working with a single specialized expert transformed our response. The training provided created a noticeable culture shift towards patient safety."
            </h3>
            <div className="flex flex-col items-center">
              <div className="size-20 rounded-full border-4 border-white/20 overflow-hidden mb-4">
                 <img src="https://picsum.photos/200/200?random=10" className="w-full h-full object-cover" alt="Dr Jenkins" />
              </div>
              <p className="font-bold text-xl sm:text-2xl">Dr. Sarah Jenkins</p>
              <p className="text-white/70 text-sm sm:text-base uppercase tracking-wider sm:tracking-widest mt-1">Chief Medical Officer, Regional Hospital System</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-white dark:bg-background-dark py-16 sm:py-20 lg:py-24">
        <div className="flex justify-center px-4 sm:px-10">
          <div className="w-full max-w-[1100px] bg-gray-50 dark:bg-[#1a0e0e] rounded-2xl sm:rounded-[3rem] p-8 sm:p-12 md:p-16 lg:p-24 text-center border border-gray-100 dark:border-neutral-dark relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
            <div className="relative z-10 flex flex-col items-center gap-8">
               <div className="size-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined !text-[44px]">calendar_month</span>
               </div>
               <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#181111] dark:text-white max-w-2xl leading-tight">
                  Ready to optimize your prevention program?
               </h2>
               <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-xl">
                  Schedule a 15-minute call to discuss your specific facility needs directly with a certified specialist.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                 <button onClick={onContactClick} className="w-full sm:w-auto bg-primary text-white h-14 sm:h-16 px-8 sm:px-10 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-primary/25 hover:bg-red-600 transition-all">
                    Schedule Call Now
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
