'use client';

import { Navigation } from '@/components/navigation';
import { Cursor } from '@/components/cursor';
import { Footer } from '@/components/sections/footer';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const services = [
  {
    number: '01',
    title: 'Graphic Design',
    description: 'Visual identities that tell your brand\'s unique story. From logos to complete visual systems, we create designs that resonate and endure.',
    features: ['Logo & Identity Design', 'Print Collateral', 'Packaging Design', 'Illustration'],
    color: '#FF6B6B',
  },
  {
    number: '02',
    title: 'Web Development',
    description: 'Responsive, SEO-optimized digital experiences built with cutting-edge technology. We engineer platforms that perform, scale, and convert.',
    features: ['Custom Websites', 'E-Commerce', 'Web Applications', 'CMS Solutions'],
    color: '#A855F7',
  },
  {
    number: '03',
    title: 'Web Maintenance',
    description: 'Keep your digital presence secure, fast, and current. Proactive monitoring and updates to ensure peak performance.',
    features: ['Security Updates', 'Performance Optimization', 'Content Updates', '24/7 Monitoring'],
    color: '#FF4757',
  },
  {
    number: '04',
    title: 'Branding & Strategy',
    description: 'Build emotional connections that drive loyalty and growth. We develop comprehensive brand strategies rooted in research and insight.',
    features: ['Brand Strategy', 'Naming & Messaging', 'Brand Guidelines', 'Market Research'],
    color: '#FF6B6B',
  },
  {
    number: '05',
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that deliver measurable ROI. Multi-channel strategies designed to reach, engage, and convert your target audience.',
    features: ['SEO & SEM', 'Social Media', 'Email Marketing', 'Analytics & Reporting'],
    color: '#A855F7',
  },
  {
    number: '06',
    title: 'Video Composition',
    description: 'Story-driven video content that captivates and converts. From concept to final cut, we produce content that moves audiences.',
    features: ['Brand Films', 'Motion Graphics', 'Social Content', 'Product Videos'],
    color: '#FF4757',
  },
  {
    number: '07',
    title: 'Creative AI',
    description: 'AI-powered innovation that pushes creative boundaries. We leverage cutting-edge AI tools to enhance and accelerate the creative process.',
    features: ['AI Strategy', 'Generative Design', 'Automation', 'AI Integration'],
    color: '#FF6B6B',
  },
  {
    number: '08',
    title: 'Cultural Strategy',
    description: 'Authentic campaigns aligned with culture and community. We help brands connect meaningfully with diverse audiences worldwide.',
    features: ['Cultural Analysis', 'Community Building', 'Influencer Strategy', 'Trend Forecasting'],
    color: '#A855F7',
  },
  {
    number: '09',
    title: 'Something Undefined',
    description: 'Your wildest idea. Let\'s make it real. We thrive on challenges that don\'t fit into neat categories.',
    features: ['Custom Solutions', 'Innovation Labs', 'Experimental Projects', 'Anything Else'],
    color: '#FF4757',
  },
];

export default function ServicesPage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <>
      <Cursor />
      <Navigation />

      <main className="relative w-full min-h-screen bg-bg-primary">
        {/* Hero Section */}
        <section className="pt-32 pb-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(255, 107, 107, 0.12) 0%, transparent 70%)', top: '0%', right: '5%' }} />
          </div>

          <div className="container-akarsa text-center relative z-10">
            <div className="overline mb-6" style={{ opacity: visible ? 1 : 0, transition: 'all 0.6s ease 0.2s' }}>WHAT WE DO</div>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black text-text-primary mb-8 tracking-tight"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 0.3s' }}
            >
              Nine disciplines. <br />
              <span className="font-serif italic font-normal text-accent">One vision.</span>
            </h1>
            <p
              className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
              style={{ opacity: visible ? 1 : 0, transition: 'all 0.6s ease 0.4s' }}
            >
              From graphic design and branding to web development, digital marketing, and AI-powered solutions, we help brands evolve and thrive.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-4 bg-bg-secondary border-y border-border">
          <div className="container-akarsa">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--border)' }}>
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="group p-10 bg-bg-primary hover:bg-bg-elevated transition-all duration-300 cursor-pointer relative overflow-hidden"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 100%, ${service.color}08, transparent 60%)`,
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <span className="text-xs font-mono text-text-muted group-hover:text-accent transition">{service.number}</span>
                      <svg className="w-5 h-5 text-text-muted group-hover:text-accent transition group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>

                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition">{service.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6">{service.description}</p>

                    <div className="flex flex-col gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-xs text-text-muted">
                          <div className="w-1 h-1 rounded-full" style={{ background: service.color }} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-4 bg-bg-primary text-center">
          <div className="container-akarsa">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              {"Have a project in"} <span className="font-serif italic font-normal text-accent">mind?</span>
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto">
              {"Let's discuss how our services can help your brand grow and thrive in the digital landscape."}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-bg-primary rounded-full font-semibold text-sm uppercase tracking-widest hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
