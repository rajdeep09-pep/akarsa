'use client';

import { Navigation } from '@/components/navigation';
import { Cursor } from '@/components/cursor';
import { Footer } from '@/components/sections/footer';
import { useEffect, useState } from 'react';

const featuredPost = {
  id: 1,
  title: 'The Future of Web Design: AI, Personalization, and Beyond',
  excerpt: 'How emerging technologies and shifting user expectations are reshaping the digital landscape. A deep dive into the trends that will define design in the coming years.',
  category: 'Design',
  date: 'February 15, 2026',
  readTime: '12 min read',
  color: '#FF6B6B',
};

const posts = [
  {
    id: 2,
    title: 'Building Scalable Web Applications with Modern Architecture',
    excerpt: 'Best practices and patterns for creating web apps that grow with your business without compromising performance.',
    category: 'Development',
    date: 'February 10, 2026',
    readTime: '8 min read',
    color: '#A855F7',
  },
  {
    id: 3,
    title: 'Brand Strategy in the Age of Authenticity',
    excerpt: 'How to create a compelling brand story that resonates with audiences who demand transparency and genuine connection.',
    category: 'Strategy',
    date: 'February 5, 2026',
    readTime: '6 min read',
    color: '#FF4757',
  },
  {
    id: 4,
    title: 'The Power of Motion Design in User Experience',
    excerpt: 'Leveraging purposeful animations to create engaging and memorable digital experiences that guide user behavior.',
    category: 'Design',
    date: 'January 28, 2026',
    readTime: '7 min read',
    color: '#FF6B6B',
  },
  {
    id: 5,
    title: 'AI and Creative Innovation: Partners, Not Competitors',
    excerpt: 'Exploring how AI is transforming creative processes and why the human element remains irreplaceable.',
    category: 'Innovation',
    date: 'January 20, 2026',
    readTime: '6 min read',
    color: '#A855F7',
  },
  {
    id: 6,
    title: 'User Experience Best Practices for 2026',
    excerpt: 'Essential principles and techniques for designing user-centric digital products that drive engagement and retention.',
    category: 'UX',
    date: 'January 15, 2026',
    readTime: '9 min read',
    color: '#FF4757',
  },
  {
    id: 7,
    title: 'The ROI of Good Design: Making the Business Case',
    excerpt: 'How to quantify the impact of design investments and communicate value to stakeholders effectively.',
    category: 'Business',
    date: 'January 8, 2026',
    readTime: '5 min read',
    color: '#FF6B6B',
  },
];

export default function BlogPage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <>
      <Cursor />
      <Navigation />

      <main className="relative w-full min-h-screen bg-bg-primary">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(255, 71, 87, 0.1) 0%, transparent 70%)', top: '10%', right: '15%' }} />
          </div>
          <div className="container-akarsa text-center relative z-10">
            <div className="overline mb-6" style={{ opacity: visible ? 1 : 0, transition: 'all 0.6s ease 0.2s' }}>INSIGHTS & IDEAS</div>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black text-text-primary mb-8 tracking-tight"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 0.3s' }}
            >
              Latest <span className="font-serif italic font-normal text-accent">Insights</span>
            </h1>
            <p
              className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
              style={{ opacity: visible ? 1 : 0, transition: 'all 0.6s ease 0.4s' }}
            >
              Thoughts on design, development, strategy, and digital innovation from the AKARSA team.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="px-4 pb-16">
          <div className="container-akarsa">
            <div className="rounded-2xl border border-border overflow-hidden bg-bg-secondary hover:border-accent/30 transition-all duration-300 cursor-pointer group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[16/10] lg:aspect-auto relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${featuredPost.color}15, ${featuredPost.color}05)` }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" style={{ background: featuredPost.color }} />
                  </div>
                  <div className="absolute top-6 left-6 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-accent text-bg-primary">
                    Featured
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: featuredPost.color }}>{featuredPost.category}</span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors">{featuredPost.title}</h2>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-text-muted">
                    <span>{featuredPost.date}</span>
                    <span className="w-1 h-1 rounded-full bg-text-muted" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-4 pb-24">
          <div className="container-akarsa">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <article
                  key={post.id}
                  className="group cursor-pointer rounded-xl border border-border bg-bg-secondary hover:border-accent/30 transition-all duration-300 overflow-hidden"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s, border-color 0.3s ease`,
                  }}
                >
                  {/* Card Top Color Bar */}
                  <div className="h-1 w-full" style={{ background: post.color }} />

                  <div className="p-8">
                    <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: post.color }}>{post.category}</span>
                    <h3 className="text-lg font-bold text-text-primary mt-3 mb-3 group-hover:text-accent transition-colors leading-snug">{post.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-text-muted pt-4 border-t border-border">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 px-4 bg-bg-secondary border-y border-border">
          <div className="container-akarsa max-w-2xl mx-auto text-center">
            <div className="overline mb-4">STAY UPDATED</div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Subscribe to our <span className="font-serif italic font-normal text-accent">newsletter</span>.
            </h2>
            <p className="text-text-secondary mb-10 leading-relaxed">Get the latest insights, trends, and updates delivered directly to your inbox. No spam, ever.</p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 rounded-full bg-bg-primary border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition text-sm"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-accent text-bg-primary font-semibold text-sm uppercase tracking-widest hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
