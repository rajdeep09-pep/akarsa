'use client';

import { Navigation } from '@/components/navigation';
import { Cursor } from '@/components/cursor';
import { Footer } from '@/components/sections/footer';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const offices = [
  {
    flag: '🇦🇪',
    country: 'United Arab Emirates',
    city: 'Dubai',
    type: 'Headquarters',
    address: 'Dubai, United Arab Emirates',
    color: '#FF6B6B',
  },
  {
    flag: '🇮🇳',
    country: 'India — Indore I',
    city: 'Vijay Nagar',
    type: 'Studio',
    address: 'Shagun Arcade (Vijay Nagar), 7th Floor, Cabin No. 2 (702), Indore',
    color: '#A855F7',
  },
  {
    flag: '🇮🇳',
    country: 'India — Indore II',
    city: 'New Palasia',
    type: 'Creative Office',
    address: '17/2, New Palasia, Indore, Madhya Pradesh 452001',
    color: '#FF4757',
  },
  {
    flag: '🇮🇳',
    country: 'India — Bhind',
    city: 'Bhadoriya Nagar',
    type: 'Regional Office',
    address: 'HR26+M6V, Bhadoriya Nagar, Rekha Nagar, Bhind, Manpura, Madhya Pradesh 477001',
    color: '#A855F7',
  },
];

const budgetOptions = ['< $5K', '$5K – $15K', '$15K – $50K', '$50K+'];
const serviceOptions = ['Graphic Design', 'Web Development', 'Branding & Strategy', 'Digital Marketing', 'Video Production', 'Creative AI', 'Other'];

export default function ContactPage() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeOffice, setActiveOffice] = useState(0);

  useEffect(() => setVisible(true), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <Cursor />
      <Navigation />

      <main className="relative w-full min-h-screen" style={{ background: '#080809' }}>

        {/* ── Hero ── */}
        <section className="pt-36 pb-20 px-4 relative overflow-hidden">
          {/* BG glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute" style={{ width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,107,0.09) 0%, transparent 65%)', bottom: '-10%', right: '5%', filter: 'blur(60px)' }} />
            <div className="absolute" style={{ width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 65%)', top: '5%', left: '-5%', filter: 'blur(60px)' }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <motion.div
              className="inline-flex items-center gap-2 mb-6"
              initial={{ opacity: 0 }} animate={visible ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
            >
              <div className="w-8 h-px" style={{ background: '#FF6B6B' }} />
              <span className="text-xs uppercase tracking-[0.35em]" style={{ color: '#FF6B6B', fontFamily: 'var(--font-inter)' }}>Get In Touch</span>
              <div className="w-8 h-px" style={{ background: '#FF6B6B' }} />
            </motion.div>

            <motion.h1
              className="font-black leading-none mb-8"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 9rem)', letterSpacing: '-0.04em', fontFamily: 'var(--font-inter)', color: '#FAFAFA' }}
              initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              {"Let's"}{' '}
              <span style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', background: 'linear-gradient(135deg, #FF6B6B, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                talk.
              </span>
            </motion.h1>

            <motion.p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, fontFamily: 'var(--font-inter)' }}
              initial={{ opacity: 0 }} animate={visible ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.3 }}
            >
              {"Have a project in mind? We'd love to hear about it. Reach out and let's create something extraordinary together."}
            </motion.p>

            {/* Quick contact pills */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.45 }}
            >
              <a
                href="mailto:beakarsa@gmail.com"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
                style={{ border: '1px solid rgba(255,107,107,0.3)', color: '#FF6B6B', background: 'rgba(255,107,107,0.06)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,107,107,0.14)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,107,107,0.06)'; }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                beakarsa@gmail.com
              </a>
              <a
                href="tel:+918109801383"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
                style={{ border: '1px solid rgba(168,85,247,0.3)', color: '#A855F7', background: 'rgba(168,85,247,0.06)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(168,85,247,0.14)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(168,85,247,0.06)'; }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 8109801383
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── Offices ── */}
        <section className="px-4 pb-24">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.5 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] mb-2" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-inter)' }}>
                Our Offices
              </p>
              <div className="w-12 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {offices.map((office, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveOffice(i)}
                  className="text-left rounded-2xl p-6 transition-all duration-400 group"
                  style={{
                    border: `1px solid ${activeOffice === i ? `${office.color}35` : 'rgba(255,255,255,0.06)'}`,
                    background: activeOffice === i ? `${office.color}08` : 'rgba(255,255,255,0.02)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.08 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-2xl">{office.flag}</span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{
                        background: activeOffice === i ? `${office.color}15` : 'rgba(255,255,255,0.05)',
                        color: activeOffice === i ? office.color : 'rgba(255,255,255,0.25)',
                        border: `1px solid ${activeOffice === i ? `${office.color}25` : 'rgba(255,255,255,0.06)'}`,
                      }}
                    >
                      {office.type}
                    </span>
                  </div>
                  <p className="text-sm font-bold mb-1" style={{ color: activeOffice === i ? '#FAFAFA' : 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-inter)' }}>
                    {office.city}
                  </p>
                  <p className="text-xs mb-3" style={{ color: activeOffice === i ? office.color : 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-inter)' }}>
                    {office.country}
                  </p>
                  <AnimatePresence>
                    {activeOffice === i && (
                      <motion.p
                        className="text-xs leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-inter)' }}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {office.address}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Form + Sidebar ── */}
        <section className="px-4 pb-40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

              {/* Left sidebar */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -30 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="sticky top-28 space-y-8">
                  {/* Availability indicator */}
                  <div
                    className="rounded-2xl p-7"
                    style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#22c55e' }} />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: '#22c55e' }} />
                      </span>
                      <span className="text-xs uppercase tracking-widest" style={{ color: '#22c55e', fontFamily: 'var(--font-inter)' }}>
                        Available for Projects
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#FAFAFA', fontFamily: 'var(--font-inter)' }}>
                      Ready to collaborate
                    </h3>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.35)', lineHeight: 1.8 }}>
                      We respond to all inquiries within 24 hours. For urgent requests, reach us directly.
                    </p>
                  </div>

                  {/* Direct contact */}
                  <div
                    className="rounded-2xl p-7 space-y-6"
                    style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
                  >
                    <p className="text-xs uppercase tracking-[0.25em]" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-inter)' }}>
                      Direct Contact
                    </p>
                    {[
                      { label: 'Email', value: 'beakarsa@gmail.com', href: 'mailto:beakarsa@gmail.com', color: '#FF6B6B' },
                      { label: 'Phone', value: '+91 8109801383', href: 'tel:+918109801383', color: '#A855F7' },
                    ].map((item) => (
                      <div key={item.label}>
                        <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.18)', fontFamily: 'var(--font-inter)' }}>
                          {item.label}
                        </p>
                        <a
                          href={item.href}
                          className="text-sm font-medium transition-colors duration-200"
                          style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-inter)' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = item.color)}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                        >
                          {item.value}
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* Office locations summary */}
                  <div
                    className="rounded-2xl p-7"
                    style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
                  >
                    <p className="text-xs uppercase tracking-[0.25em] mb-6" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-inter)' }}>
                      Locations
                    </p>
                    <div className="space-y-4">
                      {offices.map((office, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className="text-lg">{office.flag}</span>
                          <div>
                            <p className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}>{office.city}</p>
                            <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-inter)' }}>{office.type}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: 30 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div
                  className="rounded-3xl overflow-hidden"
                  style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)' }}
                >
                  {/* Accent top bar */}
                  <div className="h-1" style={{ background: 'linear-gradient(90deg, #FF6B6B, #A855F7)' }} />

                  <div className="p-10 lg:p-14">
                    <AnimatePresence mode="wait">
                      {submitted ? (
                        <motion.div
                          key="success"
                          className="text-center py-20"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <motion.div
                            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
                            style={{ background: 'rgba(255,107,107,0.12)', border: '1px solid rgba(255,107,107,0.3)' }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                          >
                            <svg className="w-9 h-9" style={{ color: '#FF6B6B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                          <h3 className="text-3xl font-black mb-3" style={{ color: '#FAFAFA', fontFamily: 'var(--font-inter)', letterSpacing: '-0.03em' }}>
                            Message Sent!
                          </h3>
                          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.8 }}>
                            {"We'll get back to you at"} <span style={{ color: '#FF6B6B' }}>{formData.email}</span>{' within 24 hours.'}
                          </p>
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form"
                          onSubmit={handleSubmit}
                          className="flex flex-col gap-7"
                          initial={{ opacity: 1 }}
                        >
                          <div>
                            <h2 className="text-2xl font-black mb-1" style={{ color: '#FAFAFA', fontFamily: 'var(--font-inter)', letterSpacing: '-0.03em' }}>
                              Start a Conversation
                            </h2>
                            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-inter)' }}>
                              Tell us about your project and we will get back to you.
                            </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                              { id: 'name', label: 'Name *', type: 'text', placeholder: 'Your name', required: true },
                              { id: 'email', label: 'Email *', type: 'email', placeholder: 'your@email.com', required: true },
                            ].map((field) => (
                              <div key={field.id}>
                                <label className="block text-xs uppercase tracking-widest mb-3" htmlFor={field.id}
                                  style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-inter)' }}>
                                  {field.label}
                                </label>
                                <input
                                  id={field.id}
                                  type={field.type}
                                  name={field.id}
                                  value={formData[field.id as keyof typeof formData]}
                                  onChange={handleChange}
                                  required={field.required}
                                  placeholder={field.placeholder}
                                  className="w-full px-5 py-4 rounded-xl text-sm focus:outline-none transition-all duration-300"
                                  style={{
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    color: '#FAFAFA',
                                    fontFamily: 'var(--font-inter)',
                                  }}
                                  onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(255,107,107,0.5)')}
                                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                                />
                              </div>
                            ))}
                          </div>

                          <div>
                            <label className="block text-xs uppercase tracking-widest mb-3" htmlFor="company"
                              style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-inter)' }}>
                              Company
                            </label>
                            <input
                              id="company"
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Your company name"
                              className="w-full px-5 py-4 rounded-xl text-sm focus:outline-none transition-all duration-300"
                              style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                color: '#FAFAFA',
                                fontFamily: 'var(--font-inter)',
                              }}
                              onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(255,107,107,0.5)')}
                              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                              { id: 'service', label: 'Service', options: serviceOptions, placeholder: 'Select a service' },
                              { id: 'budget', label: 'Budget', options: budgetOptions, placeholder: 'Select budget range' },
                            ].map((field) => (
                              <div key={field.id}>
                                <label className="block text-xs uppercase tracking-widest mb-3" htmlFor={field.id}
                                  style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-inter)' }}>
                                  {field.label}
                                </label>
                                <select
                                  id={field.id}
                                  name={field.id}
                                  value={formData[field.id as keyof typeof formData]}
                                  onChange={handleChange}
                                  className="w-full px-5 py-4 rounded-xl text-sm focus:outline-none transition-all duration-300 appearance-none"
                                  style={{
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    color: formData[field.id as keyof typeof formData] ? '#FAFAFA' : 'rgba(255,255,255,0.3)',
                                    fontFamily: 'var(--font-inter)',
                                  }}
                                  onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(255,107,107,0.5)')}
                                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                                >
                                  <option value="" style={{ background: '#0D0D10' }}>{field.placeholder}</option>
                                  {field.options.map((opt) => (
                                    <option key={opt} value={opt} style={{ background: '#0D0D10' }}>{opt}</option>
                                  ))}
                                </select>
                              </div>
                            ))}
                          </div>

                          <div>
                            <label className="block text-xs uppercase tracking-widest mb-3" htmlFor="message"
                              style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-inter)' }}>
                              Message *
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              rows={6}
                              placeholder="Tell us about your project, goals, and timeline..."
                              className="w-full px-5 py-4 rounded-xl text-sm focus:outline-none transition-all duration-300 resize-none"
                              style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                color: '#FAFAFA',
                                fontFamily: 'var(--font-inter)',
                              }}
                              onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(255,107,107,0.5)')}
                              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                            />
                          </div>

                          <motion.button
                            type="submit"
                            className="w-full py-5 rounded-full font-bold text-sm uppercase tracking-widest"
                            style={{ background: 'linear-gradient(135deg, #FF6B6B, #A855F7)', color: '#FAFAFA', fontFamily: 'var(--font-inter)' }}
                            whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(255,107,107,0.35)' }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                          >
                            Send Message
                          </motion.button>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
