'use client';

import { useEffect, useRef, useState } from 'react';

// Muted, looping preview video that plays in place. It tries to autoplay, but
// iPhones in Low Power Mode and some in-app browsers block that, so a tap on
// the video always plays (or pauses) it right here instead of following a link.
export default function AutoplayVideo({ src, label }: { src: string; label?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // React sets `muted` as a property, not an attribute, so the server-rendered
    // <video> isn't muted and browsers can refuse to autoplay it. Force it here.
    v.muted = true;
    v.defaultMuted = true;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    v.addEventListener('play', onPlay);
    v.addEventListener('playing', onPlay);
    v.addEventListener('pause', onPause);
    if (v.paused) v.play().catch(() => setPlaying(false));
    else setPlaying(true);
    return () => {
      v.removeEventListener('play', onPlay);
      v.removeEventListener('playing', onPlay);
      v.removeEventListener('pause', onPause);
    };
  }, []);

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.muted = true;
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  };

  return (
    <div className="card-video" onClick={toggle}>
      <video
        ref={ref}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      <button
        type="button"
        className={`card-video-btn${playing ? ' is-playing' : ''}`}
        aria-label={playing ? 'Pause video' : 'Play video'}
        onClick={toggle}
      >
        {playing ? (
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path fill="currentColor" d="M8 5.5v13l11-6.5z" /></svg>
        )}
      </button>
    </div>
  );
}
