'use client';

import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ paddingTop: '64px' }}>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #0d0d0d)' }} />

        <div className="relative text-center px-4 z-10 w-full max-w-7xl mx-auto">
          {/* Eyebrow */}
          <p
            className="text-white/50 uppercase mb-5"
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
            className="display text-white w-full"
            style={{
              fontSize: 'clamp(4.5rem, 20vw, 18rem)',
              animation: 'fadeUp 0.7s ease 0.2s both',
              marginBottom: '1.25rem',
            }}
          >
            Vedansh<br />Anand
          </h1>

          {/* Tagline */}
          <p
            className="text-white/55"
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
              letterSpacing: '0.06em',
              marginBottom: '2.5rem',
              animation: 'fadeUp 0.7s ease 0.35s both',
            }}
          >
            Building Software. Building Community.
          </p>

          {/* CTA buttons */}
          <div
            className="flex gap-3 justify-center flex-wrap"
            style={{ animation: 'fadeUp 0.7s ease 0.5s both' }}
          >
            <a href="#work" className="btn-red">My Work</a>
            <Link href="/contact" className="btn-outline">Contact</Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          style={{ color: 'rgba(255,255,255,0.22)', fontSize: '9px', letterSpacing: '0.4em' }}>
          <span className="uppercase">Scroll</span>
          <span className="animate-bounce">↓</span>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <div
        className="border-t border-b py-4 px-6"
        style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.025)' }}
      >
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2">
          {['Eastside Catholic High School', '10th Grade', 'Sammamish, WA', 'National Honor Society'].map(item => (
            <span
              key={item}
              className="uppercase"
              style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.32)' }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

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
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 0 60px rgba(150,0,0,0.2)',
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
                className="display text-white mb-5"
                style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5rem)' }}
              >
                Eastside Catholic<br />High School
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
                I&apos;m Vedansh — originally from India, now based in Sammamish, Washington.
                Moving countries shaped how I see the world: I grew up between two cultures,
                and that curiosity drives everything I build. I&apos;m always thinking about the
                next product, the next problem to solve.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-white/35 text-sm justify-center md:justify-start">
                <span>Sammamish, WA</span>
                <span className="text-white/15">·</span>
                <span>11th Grade · Class of 2027</span>
                <span className="text-white/15">·</span>
                <span>National Honor Society</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section style={{
        background: '#0a0a0a', padding: '56px 0', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}>
        {[
          { words: ['Developer', 'Founder', 'Builder', 'Creator', 'Developer', 'Founder', 'Builder', 'Creator'], dir: 1 },
          { words: ['Robotics', 'AI', 'Fintech', 'Startups', 'Robotics', 'AI', 'Fintech', 'Startups'], dir: -1 },
        ].map((row, ri) => (
          <div key={ri} style={{ display: 'flex', whiteSpace: 'nowrap', marginBottom: ri === 0 ? 12 : 0, overflow: 'hidden' }}>
            <div style={{ display: 'flex', animation: `marquee${row.dir > 0 ? 'Fwd' : 'Rev'} ${22 + ri * 6}s linear infinite` }}>
              {[...row.words, ...row.words, ...row.words].map((word, wi) => (
                <span key={wi} style={{ display: 'inline-flex', alignItems: 'center', gap: 16, padding: '0 18px' }}>
                  <span style={{
                    fontWeight: 800, fontSize: 'clamp(1.6rem, 4vw, 3rem)',
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: 'rgba(255,255,255,0.12)',
                  }}>{word}</span>
                  <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '1rem' }}>·</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── PROJECTS ── */}
      <section
        id="work"
        className="px-6 md:px-14 py-16 md:py-20"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="display text-white" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
                Projects
              </h2>
              <Link
                href="/projects"
                className="text-white/35 hover:text-white transition-colors uppercase"
                style={{ fontSize: '12px', letterSpacing: '0.2em' }}
              >
                All ↗
              </Link>
            </div>
          </Reveal>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-md overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.07)' }}
          >
            {[
              { name: 'Amria', tag: 'AI · Medical', year: '2024', href: 'https://amria.org' },
              { name: 'Quantaify', tag: 'Fintech · iOS', year: '2024', href: 'https://quantaify.org', desc: 'Paper trading platform with real market data & leaderboard' },
              { name: 'Incredibots', tag: 'Robotics · FTC', year: '2025', href: null, desc: 'Lead programmer, autonomous vision pipeline for FTC #26336' },
              { name: 'Nova', tag: 'In progress', year: '2025', href: null, desc: 'Currently in development — stay tuned' },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <div
                  className="flex flex-col justify-between gap-8 p-6 hover:bg-white/[0.03] transition-colors"
                  style={{ background: '#0d0d0d', minHeight: '160px' }}
                >
                  <div>
                    <div
                      className="w-6 h-0.5 mb-4 rounded-full"
                      style={{ background: '#CC1A1A' }}
                    />
                    <p className="text-white font-semibold text-lg mb-1">{p.name}</p>
                    <p className="text-white/40 text-xs tracking-wide mb-2">{p.tag}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-white/25 text-xs">{p.year}</span>
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/25 text-sm hover:text-white transition-colors"
                      >
                        ↗
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section
        className="px-6 md:px-14 py-24 md:py-32 text-center"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <Reveal>
          <p className="text-white/35 uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.4em' }}>
            Get in touch
          </p>
          <h2
            className="display text-white mb-8"
            style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}
          >
            Let&apos;s Build<br />Something.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <Link href="/contact" className="btn-red" style={{ fontSize: '1.15rem', padding: '14px 44px' }}>
            Get In Touch
          </Link>
        </Reveal>
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
      `}</style>
    </>
  );
}
