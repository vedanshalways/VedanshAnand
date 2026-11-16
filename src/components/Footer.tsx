import Image from 'next/image';
import Link from 'next/link';
import TornEdge from './TornEdge';

const pageLinks = [
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Activities', href: '/#activities' },
  { label: 'Awards', href: '/#awards' },
];

const findMe = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/vedansh-anand-175600360' },
  { label: 'Instagram', href: 'https://www.instagram.com/__vedansh_anand__' },
  { label: 'Email', href: 'mailto:vedansh.always@gmail.com' },
];

const NAME = 'Vedansh Anand';

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <p style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.45)', marginBottom: 4 }}>{title}</p>
      {links.map(l =>
        l.href.startsWith('/') ? (
          <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
        ) : (
          <a
            key={l.href}
            href={l.href}
            className="footer-link"
            {...(l.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
          >
            {l.label}
          </a>
        ),
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ position: 'relative', background: '#0d0d0d', color: '#fff', padding: '104px 32px 0', overflow: 'hidden' }}>
      <TornEdge edge="footer" fill="#f4f2ee" shadow="rgba(0,0,0,0.3)" />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="footer-grid">
          <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0 }}>
            <Image src="/Vedanshanand logo.png" alt="Vedansh Anand" width={34} height={34} style={{ height: 34, width: 'auto', alignSelf: 'flex-start' }} />
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', maxWidth: 300 }}>
              Building things and competing from Sammamish, WA.
            </p>
          </div>
          <LinkColumn title="Pages" links={pageLinks} />
          <LinkColumn title="Find me" links={findMe} />
        </div>
      </div>

      {/* Oversized wordmark, full-bleed past the footer padding; each letter hops in turn */}
      <div aria-hidden="true" style={{ overflow: 'hidden', margin: '40px -32px -2.2vw' }}>
        <div className="display hop-word" style={{ fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1 }}>
          {[...NAME].map((ch, i) =>
            ch === ' ' ? (
              <span key={i} className="hop-gap" />
            ) : (
              <span key={i} style={{ animationDelay: `${(i * 0.08).toFixed(2)}s` }}>{ch}</span>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
