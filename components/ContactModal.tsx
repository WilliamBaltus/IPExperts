
import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose} 
      />
      <div className="relative w-full max-w-[500px] bg-white dark:bg-background-dark rounded-[2rem] shadow-2xl p-8 md:p-10 animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {submitted ? (
          <div className="flex flex-col items-center text-center gap-6 py-10">
            <div className="size-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
              <span className="material-symbols-outlined !text-[40px]">check_circle</span>
            </div>
            <h3 className="text-3xl font-black">Thank You!</h3>
            <p className="text-gray-500">I will reach out to you within 24 hours.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            <div className="space-y-2">
              <h3 className="text-3xl font-black">Let's Talk Safety</h3>
              <p className="text-gray-500">Submit your details and we'll schedule a discovery call.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Name</label>
                  <input required type="text" className="w-full bg-gray-50 dark:bg-neutral-dark border-transparent rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary px-4 h-12 transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Facility</label>
                  <input required type="text" className="w-full bg-gray-50 dark:bg-neutral-dark border-transparent rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary px-4 h-12 transition-all" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email</label>
                <input required type="email" className="w-full bg-gray-50 dark:bg-neutral-dark border-transparent rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary px-4 h-12 transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message (Optional)</label>
                <textarea rows={3} className="w-full bg-gray-50 dark:bg-neutral-dark border-transparent rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary px-4 py-3 transition-all"></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white h-14 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:bg-red-600 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">send</span>
                Send Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
