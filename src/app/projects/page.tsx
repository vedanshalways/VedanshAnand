'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';

const projects = [
  {
    name: 'Amria',
    url: 'amria.org',
    href: 'https://amria.org',
    year: '2024',
    description:
      'Processes CT scans into 3D diagnostic models at 92.35% accuracy using computer vision. Built at the Cascadia JS AI Hackathon — Top 10 out of 300+ attendees.',
    tech: ['Python', 'Computer Vision', '3D Modeling', 'AI/ML'],
  },
  {
    name: 'Quantaify',
    url: 'quantaify.org',
    href: 'https://quantaify.org',
    year: '2024',
    description:
      'Full-stack paper trading platform with real market data, portfolio tracking, and a live leaderboard. Built both the web app and iOS app. Currently ranked 7th on my own platform.',
    tech: ['Next.js', 'Supabase', 'SwiftUI', 'Finnhub API'],
  },
  {
    name: 'Incredibots',
    url: 'FTC Team #26336',
    href: null,
    year: '2025',
    description:
      'Lead programmer for FIRST Tech Challenge Team #26336, DECODE™ season. Built an autonomous vision pipeline using Limelight 3A and Pedro Pathing for smooth Bézier-curve path following.',
    tech: ['Java', 'OpenCV', 'Pedro Pathing', 'Limelight 3A'],
  },
  {
    name: 'Nova',
    url: 'In progress',
    href: null,
    year: '2025',
    description: 'Currently in development. More details coming soon.',
    tech: [],
  },
];

export default function ProjectsPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="px-6 md:px-14 pt-28 pb-20">

      {/* Page header */}
      <Reveal>
        <div className="max-w-5xl mx-auto mb-12">
          <p className="uppercase mb-2" style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#CC1A1A' }}>
            Work
          </p>
          <h1 className="display text-white" style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}>
            Projects
          </h1>
        </div>
      </Reveal>

      {/* Accordion list */}
      <div className="max-w-5xl mx-auto border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        {projects.map((p, i) => {
          const isOpen = open === p.name;
          return (
            <Reveal key={p.name} delay={i * 60}>
              <div className="border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <button
                  onClick={() => setOpen(isOpen ? null : p.name)}
                  className="w-full flex items-center justify-between py-7 text-left group"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="text-white/20 text-sm tabular-nums w-6 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="display text-white transition-colors duration-150 group-hover:text-white/60"
                      style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}
                    >
                      {p.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 shrink-0 ml-6">
                    <span className="text-white/25 text-xs tracking-widest hidden sm:block">{p.year}</span>
                    <span
                      className="text-xl inline-block transition-all duration-300"
                      style={{
                        color: isOpen ? '#CC1A1A' : 'rgba(255,255,255,0.35)',
                        transform: isOpen ? 'rotate(45deg)' : 'none',
                      }}
                    >
                      +
                    </span>
                  </div>
                </button>

                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: isOpen ? '400px' : '0px', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="pb-8 flex flex-col md:flex-row gap-8 md:gap-16">
                    <div className="flex-1">
                      <p className="text-white/55 text-base leading-relaxed mb-5 max-w-xl">
                        {p.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {p.tech.map(t => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-full text-[11px]"
                            style={{
                              border: '1px solid rgba(204,26,26,0.3)',
                              color: 'rgba(255,255,255,0.4)',
                              background: 'rgba(204,26,26,0.06)',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    {p.href && (
                      <div className="shrink-0 self-end md:self-start">
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors duration-150"
                        >
                          {p.url} ↗
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
