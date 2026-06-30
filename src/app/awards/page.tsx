import Reveal from '@/components/Reveal';

const honors = [
  { award: 'Most Valuable Player', issuer: 'JV Tennis', date: 'May 2026', desc: '2025–26 season' },
  { award: 'Village Builder Award', issuer: 'JV Tennis', date: 'May 2026', desc: 'Team community & culture' },
  { award: 'Varsity Letter of Community Service', issuer: 'Eastside Catholic', date: 'Jun 2025', desc: '100 verified hours' },
  { award: 'Scholar Athlete Award', issuer: 'JV Tennis', date: 'Apr 2025', desc: '2024–25 season' },
];

export default function AwardsPage() {
  return (
    <div className="px-6 md:px-14 pt-28 pb-20">

      {/* Page header */}
      <Reveal>
        <div className="max-w-5xl mx-auto mb-12">
          <p className="uppercase mb-2" style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#CC1A1A' }}>
            Recognition
          </p>
          <h1 className="display text-white" style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}>
            Awards
          </h1>
        </div>
      </Reveal>

      <div className="max-w-5xl mx-auto border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        {honors.map((h, i) => (
          <Reveal key={h.award} delay={i * 60}>
            <div
              className="flex flex-col md:flex-row md:items-start md:justify-between py-8 border-b gap-3"
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            >
              <div className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: '#CC1A1A' }} />
                <div>
                  <p className="text-white font-semibold text-xl mb-1">{h.award}</p>
                  <p className="text-white/30 text-sm">{h.issuer} · {h.desc}</p>
                </div>
              </div>
              <span
                className="text-white/20 text-xs tracking-widest uppercase shrink-0 md:pt-1 pl-5 md:pl-0"
              >
                {h.date}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
