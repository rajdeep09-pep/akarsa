'use client';

import { Navigation } from '@/components/navigation';
import { Cursor } from '@/components/cursor';
import { Footer } from '@/components/sections/footer';
import { useEffect, useRef, useState } from 'react';

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Innovation First',
    description: 'We push boundaries and explore emerging technologies to deliver solutions that are ahead of the curve.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Collaboration',
    description: 'We work as an extension of your team, fostering open communication and shared creative vision.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Excellence',
    description: 'Every pixel, every line of code, every strategy is crafted with meticulous attention to detail.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Cultural Intelligence',
    description: 'We understand the cultural context of every market, ensuring authentic connections with your audience.',
  },
];

const team = [
  { name: 'Alex Chen', role: 'Creative Director', specialty: 'Brand Strategy' },
  { name: 'Maya Patel', role: 'Lead Developer', specialty: 'Full-Stack' },
  { name: 'Jordan Kim', role: 'Design Lead', specialty: 'UI/UX' },
  { name: 'Sam Torres', role: 'Marketing Director', specialty: 'Growth' },
  { name: 'Riley Brooks', role: 'Motion Designer', specialty: 'Animation' },
  { name: 'Avery Singh', role: 'Strategist', specialty: 'Cultural Strategy' },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <Cursor />
      <Navigation />

      <main className="relative w-full min-h-screen bg-bg-primary">
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)', top: '10%', right: '10%' }} />
            <div className="absolute w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%)', bottom: '10%', left: '5%' }} />
          </div>

          <div className="container-akarsa text-center relative z-10">
            <div
              className="overline mb-6"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 0.2s' }}
            >
              ABOUT AKARSA
            </div>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black text-text-primary mb-8 tracking-tight"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 0.3s' }}
            >
              We create digital <br />
              <span className="font-serif italic font-normal text-accent">experiences</span> that matter.
            </h1>
            <p
              className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 0.4s' }}
            >
              {"We're a team of designers, developers, and strategists united by a mission to craft extraordinary digital solutions that inspire growth."}
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 px-4 bg-bg-secondary border-y border-border">
          <div className="container-akarsa">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="overline mb-4">OUR STORY</div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
                  Born from a passion for <span className="text-accent">purposeful design</span>.
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Founded in 2024, AKARSA emerged from a simple belief: great design is more than aesthetics. {"It's about creating meaningful connections between brands and their audiences."}
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  From our early projects to the campaigns we run today, {"we've"} maintained our commitment to excellence, innovation, and authentic collaboration with every client we partner with.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Our interdisciplinary team brings together expertise in design, technology, marketing, and cultural strategy to deliver holistic solutions that drive real business results.
                </p>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-bg-elevated">
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(168, 85, 247, 0.1))' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-7xl font-black text-accent/20 mb-2">A</div>
                      <p className="text-xs text-text-muted uppercase tracking-widest">Est. 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-4 bg-bg-primary">
          <div className="container-akarsa">
            <div className="text-center mb-16">
              <div className="overline mb-4">OUR VALUES</div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">What drives us <span className="font-serif italic font-normal">forward</span>.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: 'var(--border)' }}>
              {values.map((value, idx) => (
                <div key={idx} className="p-10 bg-bg-primary hover:bg-bg-elevated transition-colors group">
                  <div className="text-accent mb-6 group-hover:scale-110 transition-transform inline-block">{value.icon}</div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{value.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-4 bg-bg-secondary border-y border-border">
          <div className="container-akarsa">
            <div className="text-center mb-16">
              <div className="overline mb-4">THE TEAM</div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Meet the people behind <span className="font-serif italic font-normal text-accent">AKARSA</span>.</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <div key={idx} className="group p-8 rounded-xl border border-border bg-bg-primary hover:border-accent/30 transition-all duration-300">
                  {/* Avatar Placeholder */}
                  <div className="w-16 h-16 rounded-full bg-bg-elevated border border-border flex items-center justify-center mb-6 group-hover:border-accent/30 transition-colors">
                    <span className="text-lg font-bold text-text-muted group-hover:text-accent transition-colors">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-1">{member.name}</h3>
                  <p className="text-sm text-accent mb-2">{member.role}</p>
                  <p className="text-xs text-text-muted uppercase tracking-wider">{member.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 bg-bg-primary text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255, 107, 107, 0.06) 0%, transparent 50%)' }} />
          <div className="container-akarsa relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              {"Interested in working"} <span className="font-serif italic font-normal text-accent">together?</span>
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto">{"We'd love to hear about your project and explore how we can help."}</p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-bg-primary rounded-full font-semibold text-sm uppercase tracking-widest hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
