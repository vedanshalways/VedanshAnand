import Reveal from '@/components/Reveal';

const socials = [
  { label: 'LinkedIn', sub: 'Connect professionally', href: 'https://linkedin.com/in/vedansh-anand-175600360' },
  { label: 'Instagram', sub: 'Follow along', href: 'https://www.instagram.com/__vedansh_anand__' },
];

export default function ContactPage() {
  return (
    <main style={{ paddingBottom: 120 }}>

      {/* Centered hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, textAlign: 'center', background: '#fafafa', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <Reveal>
          <p style={{ fontSize: 11, letterSpacing: '0.45em', textTransform: 'uppercase', color: '#CC1A1A', marginBottom: 18, fontWeight: 600 }}>
            Get In Touch
          </p>
          <h1 className="display" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', color: '#0a0a0a', lineHeight: 0.92, marginBottom: 28 }}>
            Let&apos;s Talk.
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.42)', maxWidth: 420, margin: '0 auto', lineHeight: 1.75 }}>
            Open to working with people or collaborating on new ideas.
          </p>
        </Reveal>
      </section>

      {/* Split body */}
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '72px 40px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="contact-grid">

          {/* Left — email CTA */}
          <Reveal>
            <div>
              <p style={{ fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 16, fontWeight: 600 }}>
                Email
              </p>
              <a
                href="mailto:vedansh.always@gmail.com"
                style={{
                  display: 'inline-block',
                  fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
                  fontWeight: 800,
                  color: '#0a0a0a',
                  textDecoration: 'none',
                  letterSpacing: '-0.02em',
                  marginBottom: 40,
                  borderBottom: '2px solid #CC1A1A',
                  paddingBottom: 6,
                }}
              >
                vedansh.always@gmail.com ↗
              </a>
              <p style={{ fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 16, fontWeight: 600 }}>
                Phone
              </p>
              <a
                href="tel:+13609328464"
                style={{
                  display: 'inline-block',
                  fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
                  fontWeight: 800,
                  color: '#0a0a0a',
                  textDecoration: 'none',
                  letterSpacing: '-0.02em',
                  marginBottom: 40,
                  borderBottom: '2px solid #CC1A1A',
                  paddingBottom: 6,
                }}
              >
                +1 360-932-8464
              </a>
              <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.45)', lineHeight: 1.85, maxWidth: 340, marginTop: 32 }}>
                I am a builder based in Sammamish, WA. Whether it is a startup idea, a collab,
                or just a good conversation. My inbox is always open.
              </p>
            </div>
          </Reveal>

          {/* Right — social links */}
          <Reveal delay={100}>
            <div>
              <p style={{ fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 16, fontWeight: 600 }}>
                Links
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {socials.map((s, i) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '20px 0',
                      borderBottom: '1px solid rgba(0,0,0,0.08)',
                      textDecoration: 'none',
                      borderTop: i === 0 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                    }}
                    className="social-link"
                  >
                    <div>
                      <p style={{ fontSize: 16, fontWeight: 700, color: '#0a0a0a', marginBottom: 3 }}>{s.label}</p>
                      <p style={{ fontSize: 12, color: 'rgba(0,0,0,0.38)' }}>{s.sub}</p>
                    </div>
                    <span style={{ fontSize: 18, color: '#CC1A1A' }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        .social-link:hover p:first-child { color: #CC1A1A !important; }
      `}</style>
    </main>
  );
}
