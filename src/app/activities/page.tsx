import Reveal from '@/components/Reveal';

const activities = [
  { name: 'Incredibots FTC', sub: 'Lead Programmer & CAD · Team #26336' },
  { name: 'DECA', sub: 'Member · Eastside Catholic' },
  { name: 'Investing Club', sub: 'Member · Equity research' },
  { name: 'National Honor Society', sub: 'Crusader Chapter · inducted 2025' },
  { name: 'JV Tennis', sub: 'Player · Eastside Catholic' },
  { name: 'Cybersecurity', sub: 'Mentee · under Mark Myers' },
];

export default function ActivitiesPage() {
  return (
    <div className="px-6 md:px-14 pt-28 pb-20">

      {/* Page header */}
      <Reveal>
        <div className="max-w-5xl mx-auto mb-12">
          <p className="uppercase mb-2" style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#CC1A1A' }}>
            Extracurriculars
          </p>
          <h1 className="display text-white" style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}>
            Activities
          </h1>
        </div>
      </Reveal>

      <div className="max-w-5xl mx-auto border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        {activities.map((a, i) => (
          <Reveal key={a.name} delay={i * 50}>
            <div
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 border-b"
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#CC1A1A' }} />
                <p className="text-white font-medium text-xl">{a.name}</p>
              </div>
              <p className="text-white/30 text-sm mt-1 sm:mt-0 pl-5 sm:pl-0">{a.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
