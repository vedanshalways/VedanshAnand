'use client';

import { useState } from 'react';

export type Honor = {
  award: string;
  issuer: string;
  date: string;
  desc: string;
  image: string;
};

const INITIAL = 4;

export default function AwardsGrid({ honors }: { honors: Honor[] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? honors : honors.slice(0, INITIAL);

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(240px, 100%), 1fr))', gap: 20, alignItems: 'start' }}>
        {visible.map((h, i) => (
          <div key={`${h.award}-${h.date}`} style={{ border: '1px solid rgba(0,0,0,0.09)', borderRadius: 14, overflow: 'hidden', background: '#fff', display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: '#f7f7f7', padding: 20, aspectRatio: '4 / 3', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img
                src={h.image}
                alt={h.award}
                loading="lazy"
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 4, transform: 'rotate(-2deg)', boxShadow: '0 6px 18px rgba(0,0,0,0.12)' }}
              />
            </div>
            <div style={{ padding: '20px 22px 22px', borderTop: '1px solid rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>
                <span style={{ color: '#CC1A1A' }}>A.{String(i + 1).padStart(2, '0')}</span>
                <span style={{ color: 'rgba(0,0,0,0.35)' }}>{h.date}</span>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0a0a0a', lineHeight: 1.3 }}>{h.award}</h3>
              <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.45)', lineHeight: 1.5 }}>{h.issuer} · {h.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {honors.length > INITIAL && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <button type="button" onClick={() => setShowAll(v => !v)} className="btn-toggle">
            {showAll ? 'Show Less' : `View More (${honors.length - INITIAL})`}
          </button>
        </div>
      )}
    </>
  );
}
