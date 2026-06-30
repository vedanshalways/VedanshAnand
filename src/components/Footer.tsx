import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '3rem 1.5rem' }}>
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 text-center">

        <span
          className="display"
          style={{ fontSize: '2rem', color: '#CC1A1A', letterSpacing: '0.08em' }}
        >
          VA
        </span>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {[
            { label: 'Projects', href: '/projects' },
            { label: 'Activities', href: '/activities' },
            { label: 'Awards', href: '/awards' },
            { label: 'Contact', href: '/contact' },
          ].map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/40 text-[12px] uppercase tracking-[0.18em] hover:text-white transition-colors duration-150"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com/in/vedansh-anand-175600360' },
            { label: 'Quantaify', href: 'https://quantaify.org' },
            { label: 'Amria', href: 'https://amria.org' },
          ].map((l, i, arr) => (
            <span key={l.href} className="flex items-center gap-5">
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/35 text-xs hover:text-white transition-colors duration-150"
              >
                {l.label} ↗
              </a>
              {i < arr.length - 1 && <span className="text-white/15 text-xs">·</span>}
            </span>
          ))}
        </div>

        <p className="text-white/20 text-[10px] uppercase tracking-[0.25em]">
          © {new Date().getFullYear()} Vedansh Anand · Sammamish, WA
        </p>
      </div>
    </footer>
  );
}
