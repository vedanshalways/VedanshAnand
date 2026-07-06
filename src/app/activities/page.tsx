import Reveal from '@/components/Reveal';

const activities = [
  {
    num: '01',
    name: 'Incredibots FTC',
    role: '',
    detail: '',
    category: 'Robotics',
    description: 'Member of Incredibots, working on learning coding and CAD, and helping with outreach.',
  },
  {
    num: '02',
    name: 'DECA',
    role: 'Member',
    detail: 'Eastside Catholic Chapter',
    category: 'Business',
    description: 'Compete in business and entrepreneurship events, developing skills in marketing, finance, and management through case-based competitions.',
  },
  {
    num: '03',
    name: 'Investing Club',
    role: 'Co-Founder',
    detail: 'Equity Research & Portfolio Analysis',
    category: 'Finance',
    description: 'Co-founder of the Investing Club. Analyze publicly traded companies, pitch stock ideas to the group, and manage a simulated portfolio.',
  },
  {
    num: '04',
    name: 'National Honor Society',
    role: 'Crusader Chapter',
    detail: 'Inducted 2025',
    category: 'Academic',
    description: 'Inducted based on scholarship, leadership, service, and character. Participate in community service initiatives and academic mentorship.',
  },
  {
    num: '05',
    name: 'JV Tennis',
    role: 'Player',
    detail: 'Eastside Catholic · MVP 2026',
    category: 'Athletics',
    description: 'Compete for Eastside Catholic on the JV Tennis team. Earned MVP for the 2026 season and the Scholar Athlete Award for the 2025 season, balancing academics and athletics.',
  },
];

export default function ActivitiesPage() {
  return (
    <main style={{ paddingBottom: 120 }}>

      {/* Centered hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, textAlign: 'center', background: '#fafafa', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <Reveal>
          <p style={{ fontSize: 11, letterSpacing: '0.45em', textTransform: 'uppercase', color: '#CC1A1A', marginBottom: 18, fontWeight: 600 }}>
            Extracurriculars
          </p>
          <h1 className="display" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', color: '#0a0a0a', lineHeight: 0.92, marginBottom: 28 }}>
            Activities
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.42)', maxWidth: 420, margin: '0 auto', lineHeight: 1.75 }}>
            What I do beyond the classroom: building, competing, and leading.
          </p>
        </Reveal>
      </section>

      {/* Activity rows */}
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '60px 40px 0' }}>
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          {activities.map((a, i) => (
            <Reveal key={a.name} delay={i * 50}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '48px 1fr',
                alignItems: 'start',
                gap: 24,
                padding: '32px 0',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
              }}
                className="activity-row"
              >
                {/* Index */}
                <span style={{ fontSize: 12, color: '#CC1A1A', fontWeight: 700, letterSpacing: '0.05em', paddingTop: 3 }}>{a.num}</span>

                {/* Name + role + description */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                    <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 700, color: '#0a0a0a' }}>{a.name}</p>
                  </div>
                  <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.5)', lineHeight: 1.75, maxWidth: 580 }}>{a.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .activity-row { grid-template-columns: 32px 1fr !important; }
        }
      `}</style>
    </main>
  );
}
