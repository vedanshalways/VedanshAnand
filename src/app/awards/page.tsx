import Reveal from '@/components/Reveal';

// To add a photo: put the image file in /public/awards/ and set image: '/awards/your-file.jpg'
const honors = [
  { award: 'Most Valuable Player', issuer: 'JV Tennis', date: 'May 2026', desc: '2025-26 season', image: '/MVP Award.jpg' },
  { award: 'Village Builder Award', issuer: 'JV Tennis', date: 'May 2026', desc: 'Team community & culture', image: '/Village Builder Award.jpg' },
  { award: 'Varsity Letter of Community Service', issuer: 'Eastside Catholic', date: 'Jun 2025', desc: '100 verified hours', image: '/Varsity Letter.jpg' },
  { award: 'Scholar Athlete Award', issuer: 'JV Tennis', date: 'Apr 2025', desc: '2024-25 season', image: '/Scholar Athelete Award.jpg' },
];

export default function AwardsPage() {
  return (
    <main style={{ paddingBottom: 120 }}>

      {/* Centered hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, textAlign: 'center', background: '#fafafa', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <Reveal>
          <p style={{ fontSize: 11, letterSpacing: '0.45em', textTransform: 'uppercase', color: '#CC1A1A', marginBottom: 18, fontWeight: 600 }}>
            Recognition
          </p>
          <h1 className="display" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', color: '#0a0a0a', lineHeight: 0.92, marginBottom: 28 }}>
            Awards
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.42)', maxWidth: 420, margin: '0 auto', lineHeight: 1.75 }}>
            Honors earned on and off the field.
          </p>
        </Reveal>
      </section>

      {/* Award cards — 2-col grid */}
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '72px 40px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: 20 }}>
        {honors.map((h, i) => (
          <Reveal key={h.award} delay={i * 70}>
            <div style={{
              border: '1px solid rgba(0,0,0,0.09)',
              borderRadius: 12,
              overflow: 'hidden',
              background: '#fff',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* Photo — on top */}
              {h.image ? (
                <div style={{ background: '#f7f7f7', padding: 16 }}>
                  <img
                    src={h.image}
                    alt={h.award}
                    style={{ width: '100%', height: 'auto', maxHeight: 280, objectFit: 'contain', display: 'block', borderRadius: 6, transform: 'rotate(-2deg)' }}
                  />
                </div>
              ) : (
                <div style={{ width: '100%', height: 180, background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.2)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    No photo
                  </span>
                </div>
              )}

              {/* Card body — on bottom */}
              <div style={{ padding: '24px 28px', display: 'flex', gap: 16, alignItems: 'flex-start', borderTop: '1px solid rgba(0,0,0,0.07)', flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
                <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#CC1A1A', flexShrink: 0 }} />
                <div style={{ flex: 1, width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 6 }}>
                    <h2 style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.3 }}>
                      {h.award}
                    </h2>
                    <span style={{ fontSize: 11, color: 'rgba(0,0,0,0.25)', letterSpacing: '0.1em', whiteSpace: 'nowrap', paddingTop: 2 }}>
                      {h.date}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)' }}>{h.issuer} · {h.desc}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
