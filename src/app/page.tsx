import Image from 'next/image';
import TornEdge from '@/components/TornEdge';
import AutoplayVideo from '@/components/AutoplayVideo';
import AwardsGrid, { type Honor } from '@/components/AwardsGrid';

const RED = '#CC1A1A';
const INK = '#0a0a0a';
const PAPER = '#f4f2ee';

type Project = {
  num: string;
  name: string;
  url: string;
  href: string;
  year: string;
  tag: string;
  description: string;
  tech: string[];
} & ({ preview: string; video?: never } | { video: string; preview?: never });

const projects: Project[] = [
  {
    num: '01',
    name: 'Amria',
    url: 'amria.org',
    href: 'https://amria.org',
    preview: '/preview-amria.png',
    year: '2024',
    tag: 'AI · Medical',
    description:
      'Processes CT scans into 3D diagnostic models at 92.35% accuracy using computer vision. Built at the Cascadia JS AI Hackathon. Top 10 out of 300+ attendees.',
    tech: ['Python', 'Computer Vision', '3D Modeling', 'AI/ML'],
  },
  {
    num: '02',
    name: 'Quantaify',
    url: 'quantaify.org',
    href: 'https://quantaify.org',
    preview: '/preview-quantaify.png',
    year: '2024',
    tag: 'Fintech',
    description:
      'Full-stack paper trading platform with real market data, portfolio tracking, and a live leaderboard. iOS app coming soon.',
    tech: ['Next.js', 'Supabase', 'SwiftUI', 'Finnhub API'],
  },
  {
    num: '03',
    name: 'Fling',
    url: 'fling.vedanshanand.com',
    href: 'https://fling.vedanshanand.com',
    preview: '/preview-fling.png',
    year: '2025',
    tag: 'Open Source · ML',
    description:
      'Open-source Python library that wraps scikit-learn behind a beginner-first API. Handles data splitting, preprocessing, missing values, and encoding automatically, and explains every decision in plain English. Train a model in 3 lines.',
    tech: ['Python', 'scikit-learn', 'Open Source'],
  },
  {
    num: '04',
    name: 'Block Buddy',
    url: 'blockbuddy.theincredibots.com',
    href: 'https://blockbuddy.theincredibots.com',
    video: '/videos/blockbuddy-promo.mp4',
    year: '2026',
    tag: 'Education · Incredibots',
    description:
      'A free drag-and-drop coding playground for kids aged seven and up, built with FTC 26336 The Incredibots. Children snap blocks together and press Go to make a character move, talk and play — no typing, no accounts.',
    tech: ['Next.js', 'Block Editor', 'Open Source'],
  },
  {
    num: '05',
    name: 'Incredibots Academy',
    url: 'learn.theincredibots.com',
    href: 'https://learn.theincredibots.com',
    video: 'https://learn.theincredibots.com/videos/launch.mp4',
    year: '2026',
    tag: 'Education · FTC',
    description:
      'A free, self-paced FIRST Tech Challenge curriculum built with FTC 26336 The Incredibots. 77 lessons across CAD, programming, electronics, mechanical, business and FIRST — with a Java playground and wiring simulator in the browser.',
    tech: ['Next.js', 'Java Playground', 'Wiring Simulator'],
  },
];

const nowItems = [
  { lead: 'Building with FTC 26336', rest: 'Block Buddy and Incredibots Academy' },
  { lead: 'Co-founder', rest: 'of the Investing Club' },
  { lead: 'Team Captain', rest: 'JV Tennis, 2025–2026' },
  { lead: 'Competing in DECA', rest: 'business and entrepreneurship events' },
  { lead: 'National Honor Society', rest: 'service and academic mentorship' },
  { lead: 'Shipping', rest: 'Amria, Quantaify and Fling' },
];

const activities = [
  {
    num: '01',
    name: 'Incredibots FTC',
    category: 'Robotics',
    url: 'theincredibots.com',
    href: 'https://theincredibots.com',
    description: 'Member of Incredibots, working on learning coding and CAD, and helping with outreach.',
  },
  {
    num: '02',
    name: 'DECA',
    category: 'Business',
    description: 'Compete in business and entrepreneurship events, developing skills in marketing, finance, and management through case-based competitions.',
  },
  {
    num: '03',
    name: 'Investing Club',
    category: 'Finance',
    url: 'theinvestingclub.org',
    href: 'https://theinvestingclub.org',
    description: 'Co-founder of the Investing Club. Analyze publicly traded companies, pitch stock ideas to the group, and manage a simulated portfolio.',
  },
  {
    num: '04',
    name: 'National Honor Society',
    category: 'Academic',
    description: 'Inducted based on scholarship, leadership, service, and character. Participate in community service initiatives and academic mentorship.',
  },
  {
    num: '05',
    name: 'JV Tennis',
    role: 'Team Captain · 2025–2026',
    category: 'Athletics',
    description: 'Compete for Eastside Catholic on the JV Tennis team. Earned MVP for the 2026 season and the Scholar Athlete Award for the 2025 season, balancing academics and athletics.',
  },
];

const honors: Honor[] = [
  { award: 'Most Valuable Player', issuer: 'JV Tennis', date: 'May 2026', desc: '2025-26 season', image: '/MVP Award.jpg' },
  { award: 'National Honor Society Membership', issuer: 'Eastside Catholic HS', date: 'May 2026', desc: 'Scholarship, leadership, service & character', image: '/nhs-membership.jpg' },
  { award: 'Village Builder Award', issuer: 'JV Tennis', date: 'May 2026', desc: 'Team community & culture', image: '/Village Builder Award.jpg' },
  { award: 'Varsity Letter of Community Service', issuer: 'Eastside Catholic', date: 'Jun 2025', desc: '100 verified hours', image: '/Varsity Letter.jpg' },
  { award: 'Athletic Participation Award', issuer: 'JV Tennis', date: 'Jun 2025', desc: '2025 season', image: '/athletic-participation-2025.jpg' },
  { award: 'Scholar Athlete Award', issuer: 'JV Tennis', date: 'Apr 2025', desc: '2024-25 season', image: '/Scholar Athelete Award.jpg' },
  { award: 'Outstanding Service Award', issuer: 'Eastside Catholic MS', date: 'Jun 2024', desc: '2023-24 school year', image: '/outstanding-service-award.jpg' },
  { award: 'Touchstone Award', issuer: 'Eastside Catholic MS', date: 'Jun 2024', desc: 'Quarter 4, 2023-24 · work ethic & growth', image: '/touchstone-award.jpg' },
  { award: 'Athletic Participation Award', issuer: 'JV Tennis', date: 'Jun 2026', desc: '2025-26 season', image: '/athletic-participation-2026.jpg' },
];

const EMAIL = 'vedansh.always@gmail.com';

const contactLinks = [
  { label: 'Email me', href: `mailto:${EMAIL}`, primary: true },
  { label: '+1 360-932-8464', href: 'tel:+13609328464' },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/vedansh-anand-175600360',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/__vedansh_anand__',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
      </svg>
    ),
  },
];

const sectionTitle = {
  fontSize: 'clamp(1.98rem, 4.62vw, 3.63rem)',
  color: INK,
} as const;

function SectionHeading({ label, count, title, sub }: { label: string; count: string; title: React.ReactNode; sub: string }) {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, paddingBottom: 14, borderBottom: '1px solid rgba(0,0,0,0.12)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>
        <span style={{ color: RED }}>{label}</span>
        <span style={{ color: 'rgba(0,0,0,0.4)' }}>{count}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px 48px', margin: '40px 0 48px' }}>
        <h2 className="display" style={sectionTitle}>{title}</h2>
        <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.5)', maxWidth: 380, lineHeight: 1.7 }}>{sub}</p>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section id="top" className="hero">
        <div className="hero-photo">
          <Image
            src="/me.jpg"
            alt="Vedansh Anand"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 640px) 100vw, (max-width: 800px) 480px, 60vw"
            style={{ objectFit: 'cover', objectPosition: 'center 28%' }}
          />
        </div>
        <div className="hero-shade-x" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #0d0d0d 0%, #0d0d0d 36%, rgba(13,13,13,0.75) 52%, rgba(13,13,13,0.15) 78%, rgba(13,13,13,0) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0) 22%)' }} />

        <div className="hero-content">
          <div style={{ maxWidth: 640, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <h1 className="display" style={{ color: '#fff', fontSize: 'clamp(3.2rem, 7.2vw, 6.6rem)', animation: 'fadeUp 0.7s ease 0.2s both' }}>
              Vedansh Anand
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: '#fff', maxWidth: 520, textWrap: 'pretty', animation: 'fadeUp 0.7s ease 0.3s both' }}>
              11th grader at Eastside Catholic in Sammamish, WA. I build AI tools, fintech apps, and robots, and I like competing.
            </p>
            <div className="hero-actions" style={{ animation: 'fadeUp 0.7s ease 0.4s both' }}>
              <a href="#projects" className="btn-red btn-hero">See my work <span aria-hidden="true">↓</span></a>
              <a href="#contact" className="btn-ghost-light">Get in touch</a>
            </div>
          </div>
        </div>

        <TornEdge edge="hero" />
      </section>

      {/* ── INTRO ── */}
      <section style={{ padding: '56px 32px 64px', textAlign: 'center' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          <p className="display" style={{ lineHeight: 1, letterSpacing: 0, fontSize: '1.1rem', color: RED }}>AI · Robotics · Business</p>
          <h2 className="display" style={{ lineHeight: 1, fontSize: 'clamp(1.58rem, 3.3vw, 2.38rem)', color: INK, textWrap: 'balance' }}>
            I like building things, and I aspire to do great things
          </h2>
          <a href="#projects" className="link-muted" style={{ fontSize: 15, marginTop: 6 }}>See what I&apos;ve built ↓</a>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ position: 'relative', background: PAPER, padding: '128px 32px 64px', scrollMarginTop: 64 }}>
        <TornEdge edge="projects" />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading
            label="01 · Selected Work"
            count={`${projects.length} projects`}
            title="Built from scratch."
            sub="Products, tools, and experiments, from computer vision to paper trading."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px, 100%), 1fr))', gap: 20 }}>
            {projects.map(p => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="card">
                <div style={{ aspectRatio: '16 / 9', overflow: 'hidden', background: p.video ? '#f6efe3' : '#f2f2f2', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                  {p.video ? (
                    <AutoplayVideo src={p.video} />
                  ) : (
                    <img
                      src={p.preview}
                      alt={`Screenshot of the ${p.name} website`}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                    />
                  )}
                </div>
                <div style={{ padding: '28px 28px 24px', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>
                    <span style={{ color: RED }}>{p.num} · {p.tag}</span>
                    <span style={{ color: 'rgba(0,0,0,0.35)' }}>{p.year}</span>
                  </div>
                  <h3 className="display" style={{ fontSize: '1.85rem', color: INK }}>{p.name}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.55)', lineHeight: 1.75, flex: 1, textWrap: 'pretty' }}>{p.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {p.tech.map(t => (
                      <span key={t} style={{ fontSize: 11, fontWeight: 600, color: 'rgba(0,0,0,0.6)', background: '#f4f4f4', borderRadius: 999, padding: '5px 9px' }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ padding: '16px 28px', borderTop: '1px solid rgba(0,0,0,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, fontSize: 13, fontWeight: 700 }}>
                  <span style={{ color: 'rgba(0,0,0,0.45)', fontWeight: 500, overflowWrap: 'anywhere' }}>{p.url}</span>
                  <span style={{ color: RED, whiteSpace: 'nowrap' }}>Open site ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ position: 'relative', background: '#ffffff', padding: '136px 32px 104px', scrollMarginTop: 64 }}>
        <TornEdge edge="about" fill={PAPER} />
        <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 28 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: RED }}>About me · Eastside Catholic, Class of 2028</p>
          <h2 className="display" style={{ fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.98, fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: INK, textWrap: 'balance' }}>
            From India to Sammamish, building things along the way.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: 'rgba(0,0,0,0.6)', maxWidth: 520, textWrap: 'pretty' }}>
            I&apos;m Vedansh, a student originally from India, now studying in the USA. I like building things and I aspire to do great things. I also like competing.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 4 }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: 'rgba(0,0,0,0.45)' }}>Right now</p>
            <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              {nowItems.map(item => (
                <li key={item.lead} style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
                  <span style={{ flex: '0 0 auto', width: 8, height: 8, borderRadius: '50%', background: RED, transform: 'translateY(-2px)' }} />
                  <span style={{ fontSize: 17, lineHeight: 1.5, color: INK, fontWeight: 600 }}>
                    {item.lead} <span style={{ fontWeight: 400, color: 'rgba(0,0,0,0.55)' }}>{item.rest}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── ACTIVITIES ── */}
      <section id="activities" style={{ position: 'relative', background: PAPER, padding: '128px 32px 64px', scrollMarginTop: 64 }}>
        <TornEdge edge="activities" />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading
            label="03 · Extracurriculars"
            count={`${activities.length} activities`}
            title={<>Building, competing,<br />and leading.</>}
            sub="What I do beyond the classroom."
          />
          <ol style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {activities.map(a => (
              <li key={a.name} className="card" style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: '16px 28px', padding: '24px 28px', borderRadius: 12 }}>
                <span className="display" style={{ lineHeight: 1, flex: '0 0 auto', fontSize: '1.58rem', color: RED, width: 48 }}>{a.num}</span>
                <div style={{ flex: '1 1 220px' }}>
                  <p style={{ fontSize: 19, fontWeight: 700, color: INK }}>{a.name}</p>
                  {a.role && <p style={{ marginTop: 4, fontSize: 13, fontWeight: 600, color: RED }}>{a.role}</p>}
                  {a.href && (
                    <a href={a.href} target="_blank" rel="noopener noreferrer" className="link-red" style={{ display: 'inline-block', marginTop: 4, fontSize: 13, fontWeight: 600 }}>
                      {a.url} ↗
                    </a>
                  )}
                </div>
                <p style={{ flex: '3 1 380px', fontSize: 14, color: 'rgba(0,0,0,0.55)', lineHeight: 1.7, textWrap: 'pretty' }}>{a.description}</p>
                <span style={{ flex: '0 0 auto', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.55)', border: '1px solid rgba(0,0,0,0.14)', borderRadius: 999, padding: '6px 10px' }}>
                  {a.category}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section id="awards" style={{ position: 'relative', background: '#ffffff', padding: '128px 32px 64px', scrollMarginTop: 64 }}>
        <TornEdge edge="awards" fill={PAPER} />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading
            label="04 · Recognition"
            count={`${honors.length} awards`}
            title="On and off the field."
            sub="Honors from Eastside Catholic and JV Tennis."
          />
          <AwardsGrid honors={honors} />
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ position: 'relative', background: PAPER, padding: '144px 32px 120px', scrollMarginTop: 64 }}>
        <TornEdge edge="contact" />
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 28 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: RED }}>Get in touch</p>
          <h2 className="display" style={{ fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 0.9, fontSize: 'clamp(3.5rem, 10vw, 8rem)', color: INK }}>
            Let&apos;s talk.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'rgba(0,0,0,0.6)', maxWidth: 520, textWrap: 'pretty' }}>
            Whether it is a startup idea, a collab, or just a good conversation, my inbox is always open.
          </p>
          <a href={`mailto:${EMAIL}`} className="email-link">{EMAIL}</a>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginTop: 8 }}>
            {contactLinks.map(l => {
              const external = l.href.startsWith('http');
              return (
                <a
                  key={l.label}
                  href={l.href}
                  className={l.primary ? 'pill pill-primary' : 'pill pill-light'}
                  {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  {l.icon}
                  {l.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
