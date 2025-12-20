
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Hello! I am your Infection Prevention Assistant. How can I help you today with clinical standards or facility safety?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are an AI assistant for IPC Solutions, an infection prevention consultancy. You are helpful, professional, and knowledgeable about clinical standards (CDC, APIC, CBIC). Keep answers concise and advise users to consult with a CIC® certified professional for specific facility implementations.",
        }
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I'm sorry, I couldn't process that. Please contact our consultants directly." }]);
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, { role: 'ai', text: "Service temporarily unavailable. Our team is available for direct consultation via the Contact button." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      {/* Trigger */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="size-16 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform transform active:scale-95 group"
      >
        <span className="material-symbols-outlined !text-[32px] group-hover:rotate-12 transition-transform">
          {isOpen ? 'close' : 'support_agent'}
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-white dark:bg-background-dark rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-gray-100 dark:border-neutral-dark animate-in slide-in-from-bottom-10 duration-300">
          <div className="p-6 bg-primary text-white">
            <h3 className="font-black text-xl flex items-center gap-2">
              <span className="material-symbols-outlined">smart_toy</span>
              IPC Assistant
            </h3>
            <p className="text-white/70 text-xs uppercase tracking-widest font-bold mt-1">AI powered Expert Advice</p>
          </div>

          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-6 space-y-4 bg-gray-50/50 dark:bg-neutral-dark/10"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-white dark:bg-neutral-dark text-gray-700 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-neutral-dark rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-neutral-dark p-4 rounded-2xl rounded-tl-none border border-gray-100 dark:border-neutral-dark">
                  <div className="flex gap-1">
                    <div className="size-1.5 bg-primary/40 rounded-full animate-bounce"></div>
                    <div className="size-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="size-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-neutral-dark">
            <div className="relative">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about clinical standards..."
                className="w-full bg-gray-50 dark:bg-neutral-dark border-transparent rounded-xl px-4 py-3 text-sm focus:ring-primary/20 transition-all pr-12"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-primary p-1 hover:bg-primary/5 rounded-lg transition-colors"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
            <p className="text-[10px] text-center text-gray-400 mt-2 italic">Consult a CIC® professional for facility implementation.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;
