'use client';

export default function Background() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', inset: 0, background: '#f5f5f5' }} />
      {/* Subtle light grey texture top-right */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-10%',
        width: '60%', height: '70%',
        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.04) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />
    </div>
  );
}
