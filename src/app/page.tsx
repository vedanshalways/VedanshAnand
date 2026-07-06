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
            <a href="#work" className="btn-red">My Work</a>
            <Link href="/contact" className="btn-outline">Contact</Link>
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


      {/* ── CONTACT CTA ── */}
      <section
        className="px-6 md:px-14 py-24 md:py-32 text-center"
        style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
      >
        <Reveal>
          <p className="text-black/35 uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.4em' }}>
            Get in touch
          </p>
          <h2
            className="display text-black mb-8"
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
