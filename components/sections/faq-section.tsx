'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const faqs = [
  {
    q: 'What is Akarsa?',
    a: 'Akarsa is a rule-breaking creative studio that blends design, technology, and strategy to build powerful digital experiences. We partner with ambitious brands to craft identities, websites, campaigns, and AI-powered solutions that stand out in a crowded world.',
  },
  {
    q: 'What kind of work does Akarsa do?',
    a: 'We work across web design & development, brand identity, social media, motion design, digital marketing, graphic design, photography, AI integrations, and e-commerce. Essentially, if it lives in the digital world — we can build it, brand it, and grow it.',
  },
  {
    q: 'How is Akarsa different from a regular agency?',
    a: 'Most agencies play it safe. We don\'t. Akarsa challenges conventional thinking at every step — from strategy to execution. We operate as a studio of specialists, not generalists, meaning every deliverable is crafted with expert-level attention and a creative edge that mass-market agencies can\'t replicate.',
  },
  {
    q: 'Does Akarsa actually use artificial intelligence in its work?',
    a: 'Yes — strategically, not gimmickly. We use AI to accelerate research, generate rapid design iterations, personalise content at scale, and build smart automations. AI is a tool in our hands, not a replacement for human creativity and strategic thinking.',
  },
  {
    q: 'What does it mean when Akarsa calls itself a Rule Breaking Studio?',
    a: 'It means we reject the template. We refuse to deliver what\'s expected when what\'s unexpected is far more powerful. We challenge briefs, question assumptions, and push creative boundaries — always in service of your brand\'s growth and memorability.',
  },
  {
    q: 'Who does Akarsa collaborate with?',
    a: 'We work with startups, scale-ups, established enterprises, and personal brands across industries including fashion, tech, hospitality, wellness, finance, and culture. If you have a vision worth building, we want to hear from you.',
  },
  {
    q: 'How does Akarsa approach a project from start to finish?',
    a: 'Every project begins with deep discovery — understanding your goals, audience, and competition. We move through strategy, creative concepting, design, development, and launch. Post-launch, we offer ongoing support, optimisation, and growth partnerships.',
  },
  {
    q: 'Can Akarsa handle both creative and technical projects?',
    a: 'Absolutely. Our studio houses both left-brain and right-brain thinkers. We pair designers with developers, strategists with storytellers. Whether you need a stunning brand film or a complex SaaS web application, we have the capability.',
  },
  {
    q: 'What kind of brands should work with Akarsa?',
    a: 'Brands that want to matter. If you\'re ready to invest in quality, think long-term, value craft over speed, and want a partner that truly cares about your growth — Akarsa is for you. We\'re not the cheapest option. We\'re the best one.',
  },
  {
    q: 'How can someone start working with Akarsa?',
    a: 'Simply reach out via our contact page or email us at beakarsa@gmail.com. We\'ll schedule a discovery call to understand your needs, share how we can help, and propose a path forward. Most projects begin within 1–2 weeks of alignment.',
  },
];

export function FAQSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} className="w-full py-32 relative" style={{ background: '#0A0A0C' }}>
      {/* Subtle gradient echo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(232,68,122,0.06) 0%, transparent 70%)' }}
      />

      <div className="container-akarsa">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: '#E8447A', fontFamily: 'var(--font-inter)' }}>
            FAQs
          </p>
          <h2
            className="font-bold"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-0.03em',
              color: '#FAFAFA',
              fontFamily: 'var(--font-inter)',
            }}
          >
            Your Top Questions Answered
          </h2>
        </motion.div>

        {/* Accordion container */}
        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{ background: '#111116', border: '1px solid rgba(255,255,255,0.06)' }}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{ borderBottom: i < faqs.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-7 py-6 group transition-colors duration-200"
                  style={{ background: isOpen ? 'rgba(232,68,122,0.04)' : 'transparent' }}
                >
                  <span
                    className="text-base font-medium pr-8 transition-colors duration-200"
                    style={{
                      color: isOpen ? '#FAFAFA' : 'rgba(255,255,255,0.75)',
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    {faq.q}
                  </span>
                  <motion.span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-light"
                    style={{ color: '#E8447A', border: '1px solid rgba(232,68,122,0.3)', background: isOpen ? 'rgba(232,68,122,0.1)' : 'transparent' }}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        className="px-7 pb-7 text-sm leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-inter)', maxWidth: '780px' }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
