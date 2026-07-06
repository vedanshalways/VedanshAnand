'use client';

import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Activities', href: '/activities' },
  { label: 'Awards', href: '/awards' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/__vedansh_anand__',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/vedansh-anand-175600360',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
        <line x1="7" y1="10" x2="7" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="7" cy="6.5" r="1.3" fill="currentColor" />
        <path d="M11 17v-4.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(0,0,0,0.08)', padding: '48px 40px', background: '#fafafa' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>

        {/* Top row — logo + socials */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20, marginBottom: 36 }}>
          <Image src="/Vedanshanand logo.png" alt="Vedansh Anand" width={40} height={40} style={{ height: 40, width: 'auto' }} />

          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {socialLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(0,0,0,0.38)', textDecoration: 'none', letterSpacing: '0.08em', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#0a0a0a')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(0,0,0,0.38)')}
              >
                {l.icon}
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: 24 }} />

        {/* Bottom row — nav + copyright */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <nav style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {navLinks.map(l => (
              <Link
                key={l.href}
                href={l.href}
                style={{ fontSize: 11, color: 'rgba(0,0,0,0.3)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.15em' }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <p style={{ fontSize: 11, color: 'rgba(0,0,0,0.22)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            © {new Date().getFullYear()} Vedansh Anand · Sammamish, WA
          </p>
        </div>
      </div>
    </footer>
  );
}
