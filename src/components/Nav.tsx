'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Projects', href: '/projects' },
  { label: 'Activities', href: '/activities' },
  { label: 'Awards', href: '/awards' },
  { label: 'Contact', href: '/contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500"
        style={{
          paddingTop: scrolled ? '18px' : '28px',
          paddingBottom: scrolled ? '18px' : '28px',
          background: open
            ? 'rgba(0,0,0,0.98)'
            : scrolled
              ? 'rgba(0,0,0,0.92)'
              : 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)',
          backdropFilter: scrolled || open ? 'blur(24px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled || open ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled || open ? '1px solid rgba(255,255,255,0.10)' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 40px rgba(0,0,0,0.6)' : 'none',
        }}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-bold tracking-[0.15em] text-base transition-colors duration-150"
          style={{ color: 'rgba(255,255,255,0.95)' }}
        >
          VA
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 text-[13px] tracking-[0.18em] uppercase">
          {links.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-all duration-150 relative"
                  style={{
                    color: active ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.6)',
                    fontWeight: active ? 600 : 400,
                    textShadow: active ? '0 0 20px rgba(255,255,255,0.4)' : 'none',
                  }}
                >
                  {label}
                  {active && (
                    <span style={{
                      position: 'absolute', bottom: '-4px', left: 0, right: 0,
                      height: '1px', background: 'rgba(255,255,255,0.6)',
                      borderRadius: '1px',
                    }} />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 -mr-2 shrink-0"
          onClick={() => setOpen(prev => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span
            className="block w-6 h-0.5 bg-white/80 rounded-full transition-all duration-300 origin-center"
            style={{ transform: open ? 'translateY(8px) rotate(45deg)' : 'none' }}
          />
          <span
            className="block w-6 h-0.5 bg-white/80 rounded-full transition-all duration-300"
            style={{ opacity: open ? 0 : 1, transform: open ? 'scaleX(0)' : 'none' }}
          />
          <span
            className="block w-6 h-0.5 bg-white/80 rounded-full transition-all duration-300 origin-center"
            style={{ transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none' }}
          />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black md:hidden transition-all duration-300"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0)' : 'translateY(-8px)',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        <ul className="flex flex-col items-center gap-8">
          {links.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="font-bold tracking-[-0.02em] transition-colors duration-150"
                  style={{
                    fontSize: 'clamp(2.5rem, 10vw, 3.5rem)',
                    color: active ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.35)',
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="absolute bottom-10 flex items-center gap-4">
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com/in/vedansh-anand-175600360' },
            { label: 'Quantaify', href: 'https://quantaify.org' },
            { label: 'Amria', href: 'https://amria.org' },
          ].map((l, i, arr) => (
            <span key={l.label} className="flex items-center gap-4">
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 text-[11px] tracking-[0.18em] uppercase hover:text-white transition-colors"
              >
                {l.label}
              </a>
              {i < arr.length - 1 && <span className="text-white/15 text-xs">·</span>}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
