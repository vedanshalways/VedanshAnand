'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Home', href: '#top' },
  { label: 'Projects', href: '#projects' },
  { label: 'Activities', href: '#activities' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
];

const sectionIds = links.map(l => l.href.slice(1));

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('top');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled || open ? 'rgba(255,255,255,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#top" onClick={() => setOpen(false)} className="flex items-center">
            <Image src="/Vedanshanand logo.png" alt="Vedansh Anand" width={36} height={36} priority style={{ height: 36, width: 'auto' }} />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => {
              const isActive = active === href.slice(1);
              return (
                <li key={href}>
                  <a
                    href={href}
                    className="relative text-[13px] uppercase tracking-[0.15em] font-semibold transition-colors duration-150 pb-1"
                    style={{ color: isActive ? '#000000' : 'rgba(0,0,0,0.5)' }}
                  >
                    {label}
                    {isActive && (
                      <span
                        className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full"
                        style={{ background: '#CC1A1A' }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 -mr-2"
            onClick={() => setOpen(prev => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span
              className="block w-6 h-0.5 bg-black/80 rounded-full transition-all duration-300 origin-center"
              style={{ transform: open ? 'translateY(8px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-6 h-0.5 bg-black/80 rounded-full transition-all duration-300"
              style={{ opacity: open ? 0 : 1, transform: open ? 'scaleX(0)' : 'none' }}
            />
            <span
              className="block w-6 h-0.5 bg-black/80 rounded-full transition-all duration-300 origin-center"
              style={{ transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center transition-all duration-300"
        style={{
          background: '#ffffff',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transform: open ? 'translateY(0)' : 'translateY(-8px)',
        }}
      >
        <ul className="flex flex-col items-center gap-6">
          {links.map(({ label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="display transition-colors duration-150"
                  style={{
                    fontSize: 'clamp(3rem, 12vw, 5rem)',
                    color: isActive ? '#CC1A1A' : 'rgba(0,0,0,0.7)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
        <div style={{ position: 'absolute', bottom: 40, display: 'flex', gap: 20 }}>
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com/in/vedansh-anand-175600360' },
            { label: 'Quantaify', href: 'https://quantaify.org' },
            { label: 'Amria', href: 'https://amria.org' },
          ].map((l, i, arr) => (
            <span key={l.href} className="flex items-center gap-4">
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/30 text-[11px] tracking-[0.2em] uppercase hover:text-black transition-colors"
              >
                {l.label}
              </a>
              {i < arr.length - 1 && <span className="text-black/15 text-xs">·</span>}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
