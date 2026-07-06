import Reveal from '@/components/Reveal';

const posts = [
  {
    slug: 'getting-started',
    date: 'June 29, 2025',
    tag: 'Meta',
    title: 'Starting this journal',
    body: `I've been meaning to write more about what I'm building and thinking about. This is that place. No polished takes. Just honest notes on projects, ideas, and whatever I'm figuring out week to week.`,
  },
];

export default function JournalPage() {
  return (
    <main style={{ paddingTop: 120, paddingBottom: 120 }}>

      {/* Header */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px', marginBottom: 80 }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#CC1A1A', marginBottom: 10 }}>
                Writing
              </p>
              <h1
                className="display"
                style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', color: '#0a0a0a', lineHeight: 0.9 }}
              >
                Journal
              </h1>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.4)', maxWidth: 260, lineHeight: 1.65, paddingBottom: 8 }}>
              Raw notes on projects, ideas, and whatever I&apos;m figuring out.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Posts */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <article style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr',
                gap: 48,
                padding: '40px 0',
                borderBottom: '1px solid rgba(0,0,0,0.1)',
              }}
                className="journal-article"
              >
                {/* Left meta column */}
                <div style={{ paddingTop: 4 }}>
                  <span style={{
                    display: 'inline-block',
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    background: '#0a0a0a',
                    padding: '3px 10px',
                    borderRadius: 3,
                    marginBottom: 10,
                  }}>{post.tag}</span>
                  <p style={{ fontSize: 12, color: 'rgba(0,0,0,0.32)', letterSpacing: '0.04em' }}>{post.date}</p>
                </div>

                {/* Right content */}
                <div>
                  <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 800, color: '#0a0a0a', marginBottom: 14, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                    {post.title}
                  </h2>
                  <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8 }}>
                    {post.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          {posts.length === 0 && (
            <p style={{ color: 'rgba(0,0,0,0.25)', fontSize: 14, textAlign: 'center', paddingTop: 80 }}>
              No entries yet. Check back soon.
            </p>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .journal-article { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </main>
  );
}
