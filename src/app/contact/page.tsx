import Reveal from '@/components/Reveal';

const links = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/vedansh-anand-175600360' },
  { label: 'Quantaify', href: 'https://quantaify.org' },
  { label: 'Amria', href: 'https://amria.org' },
];

export default function ContactPage() {
  return (
    <div className="px-6 md:px-14 pt-28 pb-20">
      <div className="max-w-5xl mx-auto">

        <Reveal>
          <p className="uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#CC1A1A' }}>
            Contact
          </p>
          <h1
            className="display text-white mb-10"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 9rem)' }}
          >
            Let&apos;s Build<br />Something.
          </h1>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-white/40 text-lg mb-12 max-w-md leading-relaxed">
            Open to projects, collabs, or a good conversation about tech and startups.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="flex flex-wrap gap-3">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ fontSize: '1rem', padding: '12px 28px' }}
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
