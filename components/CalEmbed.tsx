import React, { useEffect } from 'react';

interface CalEmbedProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalEmbed: React.FC<CalEmbedProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      // Load Cal.com embed script
      const script = document.createElement('script');
      script.src = 'https://app.cal.com/embed/embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative w-full max-w-[900px] h-[90vh] bg-white dark:bg-background-dark rounded-[2rem] shadow-2xl p-4 md:p-6 animate-in zoom-in-95 duration-300 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-primary transition-colors bg-white dark:bg-background-dark rounded-full p-2 shadow-md"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="w-full h-full overflow-auto flex items-center justify-center">
          {/* Cal.com Inline Embed */}
          <div
            data-cal-link="yourname/15min"
            data-cal-config='{"layout":"month_view","theme":"auto"}'
            style={{ width: '100%', height: '100%', minHeight: '600px' }}
          />

          {/* Temporary placeholder until Cal.com is set up */}
          <div className="text-center space-y-6 p-8 max-w-md">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary !text-[48px]">calendar_month</span>
            </div>
            <h3 className="text-2xl font-bold text-[#181111] dark:text-white">Schedule a Call</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Cal.com integration is ready! To activate:
            </p>
            <ol className="text-left text-sm text-gray-500 dark:text-gray-400 space-y-2">
              <li>1. Create your Cal.com account at cal.com</li>
              <li>2. Set up a 15-minute meeting event</li>
              <li>3. Update the link in CalEmbed.tsx</li>
            </ol>
            <p className="text-xs text-gray-400">This modal will automatically display your Cal.com scheduler once configured.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalEmbed;
