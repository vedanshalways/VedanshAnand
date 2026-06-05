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

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 transition-all duration-500"
      style={{
        paddingTop: scrolled ? '22px' : '32px',
        paddingBottom: scrolled ? '22px' : '32px',
        background: scrolled
          ? 'rgba(0,0,0,0.92)'
          : 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.10)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 40px rgba(0,0,0,0.6)' : 'none',
      }}
    >
      <Link href="/"
        className="font-bold tracking-[0.12em] text-base transition-colors duration-150"
        style={{ color: 'rgba(255,255,255,0.95)', letterSpacing: '0.15em' }}
      >
        VA
      </Link>
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
    </nav>
  );
}
