'use client';

import Reveal from '@/components/Reveal';

const projects = [
  {
    num: '01',
    name: 'Amria',
    url: 'amria.org',
    href: 'https://amria.org',
    year: '2024',
    tag: 'AI · Medical',
    description:
      'Processes CT scans into 3D diagnostic models at 92.35% accuracy using computer vision. Built at the Cascadia JS AI Hackathon. Top 10 out of 300+ attendees.',
    tech: ['Python', 'Computer Vision', '3D Modeling', 'AI/ML'],
  },
  {
    num: '02',
    name: 'Quantaify',
    url: 'quantaify.org',
    href: 'https://quantaify.org',
    year: '2024',
    tag: 'Fintech · iOS',
    description:
      'Full-stack paper trading platform with real market data, portfolio tracking, and a live leaderboard. iOS app coming soon.',
    tech: ['Next.js', 'Supabase', 'SwiftUI', 'Finnhub API'],
  },
  {
    num: '03',
    name: 'Fling',
    url: 'fling.vedanshanand.com',
    href: 'https://fling.vedanshanand.com',
    year: '2025',
    tag: 'Social · Web',
    description: 'Visit the link below for more info. Fling wraps scikit-learn behind a clean, safe API designed for people learning ML. It handles data splitting, preprocessing, missing values, and encoding automatically - and explains every decision in plain English.',
    tech: ['Next.js', 'Supabase', 'TailwindCSS'],
  },
  {
    num: '04',
    name: 'Nova',
    url: 'In progress',
    href: null,
    year: '2025',
    tag: 'Stealth',
    description: 'Currently in development. More details coming soon.',
    tech: [],
  },
];

export default function ProjectsPage() {
  return (
    <main style={{ paddingBottom: 120 }}>

      {/* Centered hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, textAlign: 'center', background: '#fafafa', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <Reveal>
          <p style={{ fontSize: 11, letterSpacing: '0.45em', textTransform: 'uppercase', color: '#CC1A1A', marginBottom: 18, fontWeight: 600 }}>
            Selected Work
          </p>
          <h1 className="display" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', color: '#0a0a0a', lineHeight: 0.92, marginBottom: 28 }}>
            Projects
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.42)', maxWidth: 420, margin: '0 auto', lineHeight: 1.75 }}>
            Products, tools, and experiments. Built from scratch.
          </p>
        </Reveal>
      </section>

      {/* 2-col card grid */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 40px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(440px, 100%), 1fr))', gap: 24 }}>
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 70}>
            <div style={{
              border: '1px solid rgba(0,0,0,0.09)',
              borderRadius: 12,
              background: '#fff',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              boxSizing: 'border-box',
            }}>
              {/* Content section on top */}
              <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', flex: 1, borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                {/* Description */}
                <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.52)', lineHeight: 1.8, marginBottom: 24, flex: 1 }}>
                  {p.description}
                </p>
              </div>

              {/* Title section on bottom */}
              <div style={{ padding: '28px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12 }}>
                <div>
                  <h2 className="display" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#0a0a0a', lineHeight: 0.95 }}>
                    {p.name}
                  </h2>
                </div>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 13, color: '#CC1A1A', fontWeight: 600, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}
                  >
                    {p.url} ↗
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
