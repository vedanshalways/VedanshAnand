'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const RED = '#CC1A1A';

const links = [
  { label: 'Projects', id: 'projects' },
  { label: 'About', id: 'about' },
  { label: 'Activities', id: 'activities' },
  { label: 'Awards', id: 'awards' },
  { label: 'Contact', id: 'contact' },
];

const sectionIds = ['top', ...links.map(l => l.id)];

export default function Nav() {
  const isHome = usePathname() === '/';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('top');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      // Active section = the last one whose top has passed the middle of the viewport.
      let current = 'top';
      if (y > 40) {
        const mid = window.innerHeight * 0.5;
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= mid) current = id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Over the dark home hero the bar is transparent with white text; everywhere else it's solid.
  const overHero = isHome && !scrolled && !open;
  const current = isHome ? active : null;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          transition: 'all 0.3s',
          background: overHero ? 'transparent' : 'rgba(255,255,255,0.97)',
          backdropFilter: overHero ? 'none' : 'blur(12px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <Link href="/#top" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Image src="/Vedanshanand logo.png" alt="" width={36} height={36} loading="eager" style={{ height: 36, width: 'auto' }} />
            <span className="display" style={{ fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.1, fontSize: '1.02rem', color: overHero ? '#ffffff' : '#0a0a0a', transition: 'color 0.3s' }}>
              Vedansh Anand
            </span>
          </Link>

          <ul className="hidden min-[900px]:flex" style={{ alignItems: 'center', gap: 4 }}>
            {links.map(({ label, id }) => {
              const isActive = current === id;
              return (
                <li key={id}>
                  <Link
                    href={`/#${id}`}
                    className="nav-link"
                    aria-current={isActive ? 'true' : undefined}
                    style={{
                      color: overHero ? '#ffffff' : isActive ? RED : 'rgba(0,0,0,0.6)',
                      background: !overHero && isActive ? 'rgba(204,26,26,0.07)' : 'transparent',
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link href="/#projects" className="btn-red nav-cta hidden min-[900px]:inline-flex">See my work</Link>

          <button
            className="min-[900px]:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 -mr-2"
            onClick={() => setOpen(prev => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {[
              open ? 'translateY(8px) rotate(45deg)' : 'none',
              open ? 'scaleX(0)' : 'none',
              open ? 'translateY(-8px) rotate(-45deg)' : 'none',
            ].map((transform, i) => (
              <span
                key={i}
                className="block w-6 h-0.5 rounded-full transition-all duration-300 origin-center"
                style={{ transform, opacity: open && i === 1 ? 0 : 1, background: overHero ? '#ffffff' : 'rgba(0,0,0,0.8)' }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className="fixed inset-0 z-40 min-[900px]:hidden flex flex-col items-center justify-center transition-all duration-300"
        style={{
          background: '#ffffff',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transform: open ? 'translateY(0)' : 'translateY(-8px)',
        }}
      >
        <ul className="flex flex-col items-center gap-5">
          {links.map(({ label, id }) => (
            <li key={id}>
              <Link
                href={`/#${id}`}
                onClick={() => setOpen(false)}
                className="display"
                style={{ fontSize: 'clamp(2.4rem, 10vw, 3.6rem)', color: current === id ? RED : '#0a0a0a' }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/#projects" onClick={() => setOpen(false)} className="btn-red btn-hero" style={{ marginTop: 36 }}>
          See my work <span aria-hidden="true">↓</span>
        </Link>
      </div>
    </>
  );
}
