'use client';

import { useCallback, useState } from 'react';
import Reveal from '@/components/Reveal';

const projects = [
  {
    num: '01',
    name: 'Amria',
    url: 'amria.org',
    href: 'https://amria.org',
    preview: '/preview-amria.png',
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
    preview: '/preview-quantaify.png',
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
    preview: '/preview-fling.png',
    year: '2025',
    tag: 'Open Source · ML',
    description:
      'Open-source Python library that wraps scikit-learn behind a beginner-first API. Handles data splitting, preprocessing, missing values, and encoding automatically, and explains every decision in plain English. Train a model in 3 lines.',
    tech: ['Python', 'scikit-learn', 'Open Source'],
  },
  {
    num: '04',
    name: 'Local Graph',
    url: 'Coming soon',
    href: null,
    preview: null,
    year: '2025',
    tag: 'Data · Web',
    description: 'Currently in development. More details coming soon.',
    tech: [],
  },
];

const activities = [
  {
    num: '01',
    name: 'Incredibots FTC',
    category: 'Robotics',
    url: 'theincredibots.com',
    href: 'https://theincredibots.com',
    description: 'Member of Incredibots, working on learning coding and CAD, and helping with outreach.',
  },
  {
    num: '02',
    name: 'DECA',
    category: 'Business',
    url: null,
    href: null,
    description: 'Compete in business and entrepreneurship events, developing skills in marketing, finance, and management through case-based competitions.',
  },
  {
    num: '03',
    name: 'Investing Club',
    category: 'Finance',
    url: 'theinvestingclub.org',
    href: 'https://theinvestingclub.org',
    description: 'Co-founder of the Investing Club. Analyze publicly traded companies, pitch stock ideas to the group, and manage a simulated portfolio.',
  },
  {
    num: '04',
    name: 'National Honor Society',
    category: 'Academic',
    url: null,
    href: null,
    description: 'Inducted based on scholarship, leadership, service, and character. Participate in community service initiatives and academic mentorship.',
  },
  {
    num: '05',
    name: 'JV Tennis',
    category: 'Athletics',
    url: null,
    href: null,
    description: 'Compete for Eastside Catholic on the JV Tennis team. Earned MVP for the 2026 season and the Scholar Athlete Award for the 2025 season, balancing academics and athletics.',
  },
];

const honors = [
  { award: 'Most Valuable Player', issuer: 'JV Tennis', date: 'May 2026', desc: '2025-26 season', image: '/MVP Award.jpg' },
  { award: 'National Honor Society Membership', issuer: 'Eastside Catholic HS', date: 'May 2026', desc: 'Scholarship, leadership, service & character', image: '/nhs-membership.jpg' },
  { award: 'Village Builder Award', issuer: 'JV Tennis', date: 'May 2026', desc: 'Team community & culture', image: '/Village Builder Award.jpg' },
  { award: 'Varsity Letter of Community Service', issuer: 'Eastside Catholic', date: 'Jun 2025', desc: '100 verified hours', image: '/Varsity Letter.jpg' },
  { award: 'Athletic Participation Award', issuer: 'JV Tennis', date: 'Jun 2025', desc: '2025 season', image: '/athletic-participation-2025.jpg' },
  { award: 'Scholar Athlete Award', issuer: 'JV Tennis', date: 'Apr 2025', desc: '2024-25 season', image: '/Scholar Athelete Award.jpg' },
  { award: 'Outstanding Service Award', issuer: 'Eastside Catholic MS', date: 'Jun 2024', desc: '2023-24 school year', image: '/outstanding-service-award.jpg' },
  { award: 'Touchstone Award', issuer: 'Eastside Catholic MS', date: 'Jun 2024', desc: 'Quarter 4, 2023-24 · work ethic & growth', image: '/touchstone-award.jpg' },
  { award: 'Athletic Participation Award', issuer: 'JV Tennis', date: 'Jun 2026', desc: '2025-26 season', image: '/athletic-participation-2026.jpg' },
];

const socials = [
  { label: 'LinkedIn', sub: 'Connect professionally', href: 'https://linkedin.com/in/vedansh-anand-175600360' },
  { label: 'Instagram', sub: 'Follow along', href: 'https://www.instagram.com/__vedansh_anand__' },
];

function AwardImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  // The page is statically pre-rendered, so a 404 fires before React hydrates
  // and onError can attach — catch that case on mount via naturalWidth.
  const checkOnMount = useCallback((el: HTMLImageElement | null) => {
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <div style={{ width: '100%', height: 180, background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.2)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          No photo
        </span>
      </div>
    );
  }

  return (
    <div style={{ background: '#f7f7f7', padding: 16 }}>
      <img
        ref={checkOnMount}
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        style={{ width: '100%', height: 'auto', maxHeight: 280, objectFit: 'contain', display: 'block', borderRadius: 6, transform: 'rotate(-2deg)' }}
      />
    </div>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <Reveal>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <p style={{ fontSize: 11, letterSpacing: '0.45em', textTransform: 'uppercase', color: '#CC1A1A', marginBottom: 18, fontWeight: 600 }}>
          {eyebrow}
        </p>
        <h2 className="display" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#0a0a0a', lineHeight: 0.92, marginBottom: 20 }}>
          {title}
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.42)', maxWidth: 420, margin: '0 auto', lineHeight: 1.75 }}>
          {sub}
        </p>
      </div>
    </Reveal>
  );
}

export default function Home() {
  const [showAllAwards, setShowAllAwards] = useState(false);
  const visibleHonors = showAllAwards ? honors : honors.slice(0, 4);

  return (
    <>
      {/* ── HERO ── */}
      <section id="top" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ paddingTop: '64px', scrollMarginTop: '64px' }}>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }} />

        <div className="relative text-center px-4 z-10 w-full max-w-7xl mx-auto">
          {/* Eyebrow */}
          <p
            className="text-black/50 uppercase mb-5"
            style={{
              fontSize: '11px',
              letterSpacing: '0.45em',
              animation: 'fadeUp 0.7s ease 0.1s both',
            }}
          >
            11th Grade · Sammamish, WA
          </p>

          {/* Name */}
          <h1
            className="display text-black w-full"
            style={{
              fontSize: 'clamp(4.5rem, 20vw, 18rem)',
              animation: 'fadeUp 0.7s ease 0.2s both',
              marginBottom: '1.25rem',
            }}
          >
            Vedansh<br />Anand
          </h1>

          {/* CTA buttons */}
          <div
            className="flex gap-3 justify-center flex-wrap"
            style={{ animation: 'fadeUp 0.7s ease 0.5s both' }}
          >
            <a href="#projects" className="btn-red">My Work</a>
            <a href="#contact" className="btn-outline">Contact</a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          style={{ color: 'rgba(0,0,0,0.3)', fontSize: '9px', letterSpacing: '0.4em' }}>
          <span className="uppercase">Scroll</span>
          <span className="animate-bounce">↓</span>
        </div>
      </section>


      {/* ── ABOUT / SCHOOL ── */}
      <section className="px-6 md:px-14 py-20 md:py-28">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">

          {/* Photo */}
          <Reveal className="shrink-0 w-full flex justify-center md:block md:w-auto">
            <div style={{
              width: 'min(300px, 85vw)',
              aspectRatio: '3/4',
              borderRadius: '6px',
              overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.1)',
              boxShadow: '0 0 60px rgba(0,0,0,0.1)',
            }}>
              <img src="/me.jpg" alt="Vedansh Anand" className="w-full h-full object-cover" />
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={100} className="flex-1">
            <div className="text-center md:text-left">
              <p
                className="uppercase mb-4"
                style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#CC1A1A' }}
              >
                School
              </p>
              <h2
                className="display text-black mb-5"
                style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5rem)' }}
              >
                Eastside Catholic<br />High School
              </h2>
              <p className="text-black/60 text-lg leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
                I&apos;m Vedansh, a student originally from India, now studying in the USA.
                I like building things and I aspire to do great things. I also like competing.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-black/35 text-sm justify-center md:justify-start">
                <span>Sammamish, WA</span>
                <span className="text-black/15">·</span>
                <span>11th Grade · Class of 2028</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section style={{
        background: '#f0f0f0', padding: '56px 0', overflow: 'hidden', borderTop: '1px solid rgba(0,0,0,0.07)', borderBottom: '1px solid rgba(0,0,0,0.07)',
      }}>
        {[
          { words: ['AI', 'Robotics', 'Student', 'Business', 'AI', 'Robotics', 'Student', 'Business'], dir: 1 },
          { words: ['Coding', 'Claude Code', 'Builder', 'Coding', 'Claude Code', 'Builder'], dir: -1 },
        ].map((row, ri) => (
          <div key={ri} style={{ display: 'flex', whiteSpace: 'nowrap', marginBottom: ri === 0 ? 12 : 0, overflow: 'hidden' }}>
            <div style={{ display: 'flex', animation: `marquee${row.dir > 0 ? 'Fwd' : 'Rev'} ${22 + ri * 6}s linear infinite` }}>
              {[...row.words, ...row.words, ...row.words].map((word, wi) => (
                <span key={wi} style={{ display: 'inline-flex', alignItems: 'center', gap: 16, padding: '0 18px' }}>
                  <span style={{
                    fontWeight: 800, fontSize: 'clamp(1.6rem, 4vw, 3rem)',
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: 'rgba(0,0,0,0.18)',
                  }}>{word}</span>
                  <span style={{ color: 'rgba(0,0,0,0.25)', fontSize: '1rem' }}>·</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: '100px 24px', background: '#fafafa', borderBottom: '1px solid rgba(0,0,0,0.07)', scrollMarginTop: '64px' }}>
        <SectionHeader eyebrow="Selected Work" title="Projects" sub="Products, tools, and experiments. Built from scratch." />

        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(440px, 100%), 1fr))', gap: 24 }}>
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
                overflow: 'hidden',
              }}>
                {p.preview && (
                  <a
                    href={p.href ?? undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${p.name}`}
                    className="site-preview"
                    style={{
                      display: 'block',
                      position: 'relative',
                      overflow: 'hidden',
                      background: '#f2f2f2',
                      borderBottom: '1px solid rgba(0,0,0,0.07)',
                      aspectRatio: '16 / 10',
                    }}
                  >
                    <img
                      src={p.preview}
                      alt={`Screenshot of the ${p.name} website`}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        display: 'block',
                      }}
                    />
                  </a>
                )}

                <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', flex: 1, borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                  <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.52)', lineHeight: 1.8, marginBottom: 24, flex: 1 }}>
                    {p.description}
                  </p>
                </div>

                <div style={{ padding: '28px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12 }}>
                  <div>
                    <h3 className="display" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#0a0a0a', lineHeight: 0.95 }}>
                      {p.name}
                    </h3>
                  </div>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: 13, color: '#CC1A1A', fontWeight: 600, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}
                    >
                      {p.url}
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── ACTIVITIES ── */}
      <section id="activities" style={{ padding: '100px 24px', scrollMarginTop: '64px' }}>
        <SectionHeader eyebrow="Extracurriculars" title="Activities" sub="What I do beyond the classroom: building, competing, and leading." />

        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            {activities.map((a, i) => (
              <Reveal key={a.name} delay={i * 50}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr',
                  alignItems: 'start',
                  gap: 24,
                  padding: '32px 0',
                  borderBottom: '1px solid rgba(0,0,0,0.08)',
                }}
                  className="activity-row"
                >
                  <span style={{ fontSize: 12, color: '#CC1A1A', fontWeight: 700, letterSpacing: '0.05em', paddingTop: 3 }}>{a.num}</span>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                      <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 700, color: '#0a0a0a' }}>{a.name}</p>
                      {a.href && (
                        <a
                          href={a.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: 13, color: '#CC1A1A', fontWeight: 600, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}
                        >
                          {a.url}
                        </a>
                      )}
                    </div>
                    <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.5)', lineHeight: 1.75, maxWidth: 580 }}>{a.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section id="awards" style={{ padding: '100px 24px', background: '#fafafa', borderTop: '1px solid rgba(0,0,0,0.07)', scrollMarginTop: '64px' }}>
        <SectionHeader eyebrow="Recognition" title="Awards" sub="Honors earned on and off the field." />

        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: 20 }}>
          {visibleHonors.map((h, i) => (
            <Reveal key={`${h.award}-${h.date}`} delay={i * 70}>
              <div style={{
                border: '1px solid rgba(0,0,0,0.09)',
                borderRadius: 12,
                overflow: 'hidden',
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <AwardImage src={h.image} alt={h.award} />

                <div style={{ padding: '24px 28px', display: 'flex', gap: 16, alignItems: 'flex-start', borderTop: '1px solid rgba(0,0,0,0.07)', flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#CC1A1A', flexShrink: 0 }} />
                  <div style={{ flex: 1, width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 6 }}>
                      <h3 style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.3 }}>
                        {h.award}
                      </h3>
                      <span style={{ fontSize: 11, color: 'rgba(0,0,0,0.25)', letterSpacing: '0.1em', whiteSpace: 'nowrap', paddingTop: 2 }}>
                        {h.date}
                      </span>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)' }}>{h.issuer} · {h.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {honors.length > 4 && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
            <button
              type="button"
              onClick={() => setShowAllAwards((v) => !v)}
              className="view-more-btn"
              style={{
                background: 'transparent',
                border: '1px solid rgba(0,0,0,0.18)',
                borderRadius: 4,
                padding: '14px 32px',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#0a0a0a',
                cursor: 'pointer',
              }}
            >
              {showAllAwards ? 'Show Less' : `View More (${honors.length - 4})`}
            </button>
          </div>
        )}
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: '100px 24px', borderTop: '1px solid rgba(0,0,0,0.07)', scrollMarginTop: '64px' }}>
        <SectionHeader eyebrow="Get In Touch" title="Let's Talk." sub="Open to working with people or collaborating on new ideas." />

        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="contact-grid">

            <Reveal>
              <div>
                <p style={{ fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 16, fontWeight: 600 }}>
                  Email
                </p>
                <a
                  href="mailto:vedansh.always@gmail.com"
                  style={{
                    display: 'inline-block',
                    fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
                    fontWeight: 800,
                    color: '#0a0a0a',
                    textDecoration: 'none',
                    letterSpacing: '-0.02em',
                    marginBottom: 40,
                    borderBottom: '2px solid #CC1A1A',
                    paddingBottom: 6,
                  }}
                >
                  vedansh.always@gmail.com
                </a>
                <p style={{ fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 16, fontWeight: 600 }}>
                  Phone
                </p>
                <a
                  href="tel:+13609328464"
                  style={{
                    display: 'inline-block',
                    fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
                    fontWeight: 800,
                    color: '#0a0a0a',
                    textDecoration: 'none',
                    letterSpacing: '-0.02em',
                    marginBottom: 40,
                    borderBottom: '2px solid #CC1A1A',
                    paddingBottom: 6,
                  }}
                >
                  +1 360-932-8464
                </a>
                <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.45)', lineHeight: 1.85, maxWidth: 340, marginTop: 32 }}>
                  I am a builder based in Sammamish, WA. Whether it is a startup idea, a collab,
                  or just a good conversation. My inbox is always open.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div>
                <p style={{ fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 16, fontWeight: 600 }}>
                  Links
                </p>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {socials.map((s, i) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '20px 0',
                        borderBottom: '1px solid rgba(0,0,0,0.08)',
                        textDecoration: 'none',
                        borderTop: i === 0 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                      }}
                      className="social-link"
                    >
                      <div>
                        <p style={{ fontSize: 16, fontWeight: 700, color: '#0a0a0a', marginBottom: 3 }}>{s.label}</p>
                        <p style={{ fontSize: 12, color: 'rgba(0,0,0,0.38)' }}>{s.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes marqueeFwd {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes marqueeRev {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
        @media (max-width: 700px) {
          .activity-row { grid-template-columns: 32px 1fr !important; }
        }
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        .social-link:hover p:first-child { color: #CC1A1A !important; }
        .view-more-btn { transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease; }
        .view-more-btn:hover { background: #CC1A1A; border-color: #CC1A1A; color: #fff; }
        .site-preview img { transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1); }
        .site-preview:hover img { transform: scale(1.04); }
      `}</style>
    </>
  );
}
