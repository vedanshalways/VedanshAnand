import Reveal from '@/components/Reveal';

const posts = [
  {
    slug: 'getting-started',
    date: 'June 29, 2025',
    tag: 'Meta',
    title: 'Starting this journal',
    body: `I've been meaning to write more about what I'm building and thinking about. This is that place. No polished takes — just honest notes on projects, ideas, and whatever I'm figuring out week to week.`,
  },
];

export default function JournalPage() {
  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', padding: '0 24px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', paddingTop: 140, paddingBottom: 100 }}>

        {/* Header */}
        <Reveal>
          <p style={{ fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', marginBottom: 12 }}>
            Journal
          </p>
          <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0a0a0a', marginBottom: 16, lineHeight: 1 }}>
            What I&apos;m Working On
          </h1>
          <p style={{ color: 'rgba(0,0,0,0.45)', fontSize: 16, lineHeight: 1.6, marginBottom: 64 }}>
            Raw notes on projects, ideas, and whatever I&apos;m figuring out.
          </p>
        </Reveal>

        {/* Posts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <article style={{
                borderTop: '1px solid rgba(0,0,0,0.08)',
                padding: '40px 0',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <span style={{
                    fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: '#fff', background: '#0a0a0a',
                    padding: '3px 8px', borderRadius: 4, fontWeight: 600,
                  }}>{post.tag}</span>
                  <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.35)', letterSpacing: '0.05em' }}>{post.date}</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#0a0a0a', letterSpacing: '-0.02em', marginBottom: 16, lineHeight: 1.2 }}>
                  {post.title}
                </h2>
                <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: 15, lineHeight: 1.75 }}>
                  {post.body}
                </p>
              </article>
            </Reveal>
          ))}

          {/* Bottom border */}
          <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }} />
        </div>

        {/* Empty state hint */}
        {posts.length === 0 && (
          <div style={{ textAlign: 'center', paddingTop: 80 }}>
            <p style={{ color: 'rgba(0,0,0,0.25)', fontSize: 14 }}>No entries yet — check back soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
