'use client';

import Image from 'next/image';

export default function Hero() {
  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="mesh-bg" />
      <div className="grid-overlay" />

      {/* Animated gradient orbs */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        {/* Orb 1 — Cyan, top-left drift */}
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(34,211,238,0.10) 0%, rgba(34,211,238,0.04) 40%, transparent 70%)',
            top: '-100px',
            left: '-150px',
            filter: 'blur(60px)',
            animation: 'orbFloat1 18s ease-in-out infinite',
          }}
        />
        {/* Orb 2 — Purple, bottom-right drift */}
        <div
          style={{
            position: 'absolute',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(139,92,246,0.09) 0%, rgba(139,92,246,0.03) 40%, transparent 70%)',
            bottom: '-200px',
            right: '-200px',
            filter: 'blur(80px)',
            animation: 'orbFloat2 22s ease-in-out infinite',
          }}
        />
        {/* Orb 3 — Cyan, center-right subtle */}
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(34,211,238,0.06) 0%, transparent 70%)',
            top: '50%',
            right: '10%',
            transform: 'translateY(-50%)',
            filter: 'blur(50px)',
            animation: 'orbFloat3 14s ease-in-out infinite',
          }}
        />
        {/* Orb 4 — Purple, top-right */}
        <div
          style={{
            position: 'absolute',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(139,92,246,0.07) 0%, transparent 70%)',
            top: '5%',
            right: '20%',
            filter: 'blur(40px)',
            animation: 'orbFloat4 20s ease-in-out infinite',
          }}
        />
        {/* Subtle grid shimmer overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(34,211,238,0.01) 0%, transparent 50%, rgba(139,92,246,0.01) 100%)',
            animation: 'shimmer 8s ease-in-out infinite alternate',
          }}
        />
      </div>

      {/* Extra glow orb (original) */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
          top: '30%',
          left: '40%',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div className="flex flex-col gap-6 animate-[slideUp_0.8s_ease-out_forwards]">
            {/* Availability badge */}
            <div className="flex items-center gap-2 w-fit">
              <span className="status-dot" />
              <span
                style={{
                  fontSize: '0.75rem',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  color: '#22C55E',
                  letterSpacing: '0.05em',
                }}
              >
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1
              style={{
                fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
              }}
            >
              Praveen
              <br />
              <span className="gradient-text">Mahtani</span>
            </h1>

            {/* Tagline */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                color: 'var(--text-primary)',
                lineHeight: 1.5,
              }}
            >
              I build AI agents that run while I sleep.
            </p>

            {/* Description */}
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '480px',
              }}
            >
              Technical Operations Manager building multi-agent AI systems. I design
              networks that automate ops, customer support, reconciliation, and content —
              running 24/7 across Telegram, Discord, and the web.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button onClick={scrollToWork} className="btn-gradient">
                See my work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button onClick={scrollToContact} className="btn-outline">
                Get in touch
              </button>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 pt-4">
              {[
                { value: '8', label: 'AI Agents Live' },
                { value: '5+', label: 'Years Building' },
                { value: '24/7', label: 'Automated Ops' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      color: 'var(--accent)',
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Profile photo */}
          <div className="flex justify-center md:justify-end animate-[slideUp_0.8s_0.2s_ease-out_forwards] opacity-0">
            <div className="relative">
              {/* Glow ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-4px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #22D3EE, #8B5CF6)',
                  opacity: 0.6,
                  filter: 'blur(12px)',
                  animation: 'floatOrb1 8s ease-in-out infinite',
                }}
              />
              {/* Gradient border */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-3px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #22D3EE, #8B5CF6)',
                  padding: '3px',
                }}
              />
              {/* Photo container */}
              <div
                style={{
                  position: 'relative',
                  width: 'clamp(220px, 30vw, 320px)',
                  height: 'clamp(220px, 30vw, 320px)',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid transparent',
                  background: 'linear-gradient(#0D1117, #0D1117) padding-box, linear-gradient(135deg, #22D3EE, #8B5CF6) border-box',
                  animation: 'float 7s ease-in-out infinite',
                }}
              >
                <Image
                  src="/praveenpfp.jpeg"
                  alt="Praveen Mahtani"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: 0.5 }}
        >
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--text-secondary)', fontFamily: "'Space Grotesk', sans-serif" }}>
            SCROLL
          </span>
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(to bottom, var(--accent), transparent)',
              animation: 'scrollLine 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbFloat1 {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(60px, 40px) scale(1.05); }
          66%  { transform: translate(-30px, 70px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes orbFloat2 {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(-80px, -50px) scale(1.08); }
          66%  { transform: translate(40px, -80px) scale(0.96); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes orbFloat3 {
          0%   { transform: translateY(-50%) translateX(0px); }
          50%  { transform: translateY(-50%) translateX(-40px); }
          100% { transform: translateY(-50%) translateX(0px); }
        }
        @keyframes orbFloat4 {
          0%   { transform: translate(0px, 0px); }
          40%  { transform: translate(-50px, 30px); }
          80%  { transform: translate(30px, -20px); }
          100% { transform: translate(0px, 0px); }
        }
        @keyframes shimmer {
          0%   { opacity: 0.4; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
