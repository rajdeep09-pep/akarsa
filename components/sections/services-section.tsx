'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

type Service = {
  number: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  imageUrl: string;
};

const services: Service[] = [
  {
    number: '01',
    title: 'Web Design & Development',
    tagline: 'Digital platforms that convert browsers into believers.',
    description: 'We craft blazing-fast, pixel-perfect websites and web applications that fuse stunning design with seamless engineering. From landing pages to complex web apps — built to impress and built to perform.',
    tags: ['Responsive Design', 'Interaction Design', 'CMS Integration', 'SEO Optimization'],
    imageUrl: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=600&q=80',
  },
  {
    number: '02',
    title: 'Branding & Identity',
    tagline: 'Logos, colors, type — your brand, fully alive.',
    description: 'We architect brand systems that live at the intersection of strategy and beauty. Every touchpoint — from logo mark to tone of voice — crafted to make you unmistakable.',
    tags: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Brand Guidelines'],
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
  },
  {
    number: '03',
    title: 'Digital Marketing',
    tagline: 'Data-driven campaigns that turn audiences into communities.',
    description: 'Performance marketing meets creative storytelling. We design and execute campaigns across all channels — paid, organic, and earned — that drive real, measurable growth.',
    tags: ['Social Media Ads', 'Google Ads', 'Email Marketing', 'Analytics'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    number: '04',
    title: 'Motion Design & Video',
    tagline: 'Cinematic content that stops the scroll and drives action.',
    description: 'From brand films to social-first reels, our motion team creates video content that commands attention. Every frame purposeful, every transition intentional.',
    tags: ['Brand Films', 'Social Reels', 'Motion Graphics', '2D / 3D Animation'],
    imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=600&q=80',
  },
  {
    number: '05',
    title: 'Graphic Design',
    tagline: 'Visual communication with precision and intent.',
    description: 'Print, packaging, editorial, social — our designers work across every medium to deliver visuals that are aesthetically bold and strategically sound.',
    tags: ['Print Design', 'Packaging', 'Editorial', 'Social Templates'],
    imageUrl: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=80',
  },
  {
    number: '06',
    title: 'Creative AI Solutions',
    tagline: 'AI-powered innovation that gives your brand an unfair edge.',
    description: 'We integrate cutting-edge AI tools into your creative and marketing workflows — from generative content pipelines to AI-assisted design systems — giving you speed without sacrificing quality.',
    tags: ['AI Content', 'Generative Design', 'Workflow Automation', 'Prompt Engineering'],
    imageUrl: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
  },
  {
    number: '07',
    title: 'Social Media Management',
    tagline: 'Consistent, culture-native content that builds real audiences.',
    description: 'We manage your social presence end-to-end — strategy, content creation, community management, and reporting. Your brand stays relevant, active, and growing.',
    tags: ['Content Strategy', 'Community Management', 'Influencer Relations', 'Analytics'],
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
  },
  {
    number: '08',
    title: 'Web Maintenance & Support',
    tagline: 'Your site, always secure, fast, and evolving.',
    description: 'We keep your digital infrastructure running at peak performance. Regular updates, security audits, speed optimization, and feature enhancements — so you never have to worry.',
    tags: ['Security Updates', 'Performance Optimization', 'Bug Fixes', 'Hosting Management'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
  },
  {
    number: '09',
    title: 'Cultural Strategy',
    tagline: 'Campaigns rooted in culture — authentic, resonant, lasting.',
    description: 'We position your brand within the cultural conversations that matter to your audience. From trend analysis to community-led campaigns, we help you show up authentically.',
    tags: ['Cultural Insights', 'Community Strategy', 'Campaign Ideation', 'Trend Forecasting'],
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  },
];

function AccordionItem({
  service,
  index,
  isOpen,
  onToggle,
}: {
  service: Service;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.04 }}
    >
      <div
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        {/* Row header — clickable */}
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between py-7 text-left group"
          style={{ background: 'transparent' }}
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-6 lg:gap-10">
            {/* Number */}
            <span
              className="text-xs font-mono shrink-0 tabular-nums transition-colors duration-300"
              style={{
                color: isOpen ? '#FF6B6B' : 'rgba(255,255,255,0.25)',
                fontFamily: 'var(--font-inter)',
                letterSpacing: '0.1em',
                minWidth: '2.5rem',
              }}
            >
              {service.number}.
            </span>

            {/* Title */}
            <span
              className="font-bold transition-colors duration-300"
              style={{
                fontSize: 'clamp(1.4rem, 3.5vw, 3rem)',
                letterSpacing: '-0.02em',
                color: isOpen ? '#FFFFFF' : 'rgba(255,255,255,0.75)',
                fontFamily: 'var(--font-inter)',
                lineHeight: 1.1,
              }}
            >
              {service.title}
            </span>
          </div>

          {/* Toggle icon */}
          <motion.div
            className="shrink-0 w-8 h-8 flex items-center justify-center"
            animate={{ rotate: isOpen ? 0 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="font-light text-2xl leading-none select-none"
              style={{ color: '#FF6B6B' }}
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              +
            </motion.span>
          </motion.div>
        </button>

        {/* Expandable content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div className="pb-10">
                {/* Tagline */}
                <motion.p
                  className="mb-4 font-medium"
                  style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                    paddingLeft: 'clamp(3.5rem, 6vw, 6.5rem)',
                    fontFamily: 'var(--font-inter)',
                    maxWidth: '640px',
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                >
                  {service.tagline}
                </motion.p>

                {/* Tags */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-8"
                  style={{ paddingLeft: 'clamp(3.5rem, 6vw, 6.5rem)' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider"
                      style={{
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: 'rgba(255,255,255,0.55)',
                        fontFamily: 'var(--font-inter)',
                        background: 'rgba(255,255,255,0.03)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* Image + description row */}
                <motion.div
                  className="flex flex-col lg:flex-row gap-8"
                  style={{ paddingLeft: 'clamp(3.5rem, 6vw, 6.5rem)' }}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  {/* Image */}
                  <div
                    className="relative overflow-hidden shrink-0"
                    style={{
                      width: 'clamp(220px, 28vw, 380px)',
                      height: 'clamp(160px, 20vw, 280px)',
                      borderRadius: '4px',
                    }}
                  >
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(135deg, rgba(255,107,107,0.08) 0%, transparent 60%)' }}
                    />
                  </div>

                  {/* Description + CTA */}
                  <div className="flex flex-col justify-between gap-6">
                    <p
                      className="leading-relaxed"
                      style={{
                        color: 'rgba(255,255,255,0.45)',
                        fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                        fontFamily: 'var(--font-inter)',
                        maxWidth: '480px',
                      }}
                    >
                      {service.description}
                    </p>
                    <motion.a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest self-start"
                      style={{ color: '#FF6B6B', fontFamily: 'var(--font-inter)' }}
                      whileHover={{ gap: '12px' }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      Start this project <span>→</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section ref={ref} className="w-full relative" style={{ background: '#0D0D10' }}>
      {/* Header block */}
      <div
        className="container-akarsa pt-28 pb-10"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <motion.div
          className="text-xs uppercase tracking-[0.3em] mb-5"
          style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-inter)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          (SERVICES)
        </motion.div>

        <div className="overflow-hidden">
          <motion.h2
            className="font-black leading-none tracking-tight"
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 10rem)',
              letterSpacing: '-0.04em',
              color: '#FAFAFA',
              fontFamily: 'var(--font-inter)',
            }}
            initial={{ y: '105%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            HOW WE CAN HELP
          </motion.h2>
        </div>
      </div>

      {/* Accordion list */}
      <div className="container-akarsa pb-28">
        {services.map((service, i) => (
          <AccordionItem
            key={service.number}
            service={service}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
        {/* Final border */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
      </div>
    </section>
  );
}
