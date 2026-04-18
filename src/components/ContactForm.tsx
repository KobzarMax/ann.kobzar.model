'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    messenger: 'whatsapp',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ email: '', phone: '', messenger: 'whatsapp', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClasses = "w-full bg-white border border-black p-4 focus:bg-gray-50 outline-none transition-all duration-300 placeholder:text-gray-300 text-base font-normal rounded-none";
  const labelClasses = "text-xs uppercase tracking-widest text-black font-bold mb-2 block";

  return (
    <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <h2 className="text-3xl font-light mb-10 tracking-tight">Get in touch</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="space-y-1">
          <label htmlFor="email" className={labelClasses}>
            Email Address
          </label>
          <input
            required
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="hello@example.com"
            className={inputClasses}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+44 0 000 000 00"
            className={inputClasses}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="messenger" className={labelClasses}>
            Preferred Messenger
          </label>
          <div className="relative">
            <select
              id="messenger"
              value={formData.messenger}
              onChange={(e) => setFormData({ ...formData, messenger: e.target.value })}
              className={`${inputClasses} appearance-none cursor-pointer pr-8`}
            >
              <option value="telegram">Telegram</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="wechat">WeChat</option>
            </select>
            <div className="absolute right-4 bottom-1/2 translate-y-1/2 pointer-events-none text-black">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="message" className={labelClasses}>
            Your Message
          </label>
          <textarea
            required
            id="message"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell me about your project..."
            className={`${inputClasses} resize-none`}
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="group relative w-full bg-black text-white py-5 px-8 overflow-hidden transition-all duration-500 hover:bg-gray-800 disabled:bg-gray-300 rounded-none"
          >
            <span className={`relative z-10 uppercase tracking-[0.3em] text-xs font-bold transition-opacity duration-300 ${status === 'sending' ? 'opacity-0' : 'opacity-100'}`}>
              {status === 'success' ? 'Message Sent' : 'Send Inquiry'}
            </span>
            
            {status === 'sending' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              </div>
            )}
            
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>

        {status === 'success' && (
          <p className="text-center text-xs uppercase tracking-widest text-green-600 animate-in fade-in duration-500">
            Received. I&apos;ll get back to you shortly.
          </p>
        )}

        {status === 'error' && (
          <p className="text-center text-xs uppercase tracking-widest text-red-600 animate-in fade-in duration-500">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
