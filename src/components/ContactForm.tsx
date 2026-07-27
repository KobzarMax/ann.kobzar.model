'use client';

import { useEffect, useState, type FormEvent } from 'react';

type FormData = {
  fullName: string;
  email: string;
  message: string;
};

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  useEffect(() => {
    if (status !== 'success' && status !== 'error') return;

    const timeout = window.setTimeout(() => setStatus('idle'), 5000);
    return () => window.clearTimeout(timeout);
  }, [status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ fullName: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const inputClasses =
    'w-full bg-white border border-black p-4 focus:bg-gray-50 outline-none transition-all duration-300 placeholder:text-black text-[13px] font-normal rounded-none';
  const labelClasses =
    'text-[13px] uppercase tracking-widest text-black font-normal mb-2 block';

  return (
    <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <h2 className="text-xl font-semibold mb-10 uppercase tracking-[0.02rem]">
        Get in touch
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="space-y-1">
          <label htmlFor="fullName" className={labelClasses}>
            Full name
          </label>
          <input
            required
            type="text"
            id="fullName"
            autoComplete="name"
            value={formData.fullName}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                fullName: event.target.value
              }))
            }
            placeholder="John Smith"
            className={inputClasses}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className={labelClasses}>
            Email Address
          </label>
          <input
            required
            autoComplete="email"
            type="email"
            id="email"
            value={formData.email}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                email: event.target.value
              }))
            }
            placeholder="hello@example.com"
            className={inputClasses}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="message" className={labelClasses}>
            Your Message
          </label>
          <textarea
            required
            id="message"
            rows={6}
            value={formData.message}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                message: event.target.value
              }))
            }
            placeholder="Tell me about your project..."
            className={`${inputClasses} resize-none`}
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="relative w-full bg-black text-white py-4 px-8 overflow-hidden transition-all duration-500 hover:opacity-80 active:opacity-80 disabled:bg-gray-300 rounded-none"
          >
            <span
              className={`relative z-10 uppercase tracking-[0.3em] text-[13px] font-normal transition-opacity duration-300 ${
                status === 'sending' ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {status === 'success' ? 'Message Sent' : 'Submit'}
            </span>

            {status === 'sending' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              </div>
            )}
          </button>
        </div>

        {status === 'success' && (
          <p className="text-center text-xs uppercase tracking-widest text-green-600">
            Received. I&apos;ll get back to you shortly.
          </p>
        )}

        {status === 'error' && (
          <p className="text-center text-xs uppercase tracking-widest text-red-600">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
