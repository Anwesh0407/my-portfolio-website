import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-bg-overlay">
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-content">
          <span className="hero-label animate-fade-in-up">
            ABOUT ME
          </span>
          <h1 className="hero-title animate-fade-in-up delay-100">
            ENGINEERING
            <br />
            <span className="text-accent">FUTURE</span>,
            <br />
            CAPTURING
            <br />
            PRESENT.
          </h1>
          <p className="hero-subtitle animate-fade-in-up delay-200">
            I am a <strong>Mining Engineering student at NIT Rourkela</strong>, so loves to explore.
            <br /><br />
            Specializing in <strong>photo editing, digital art, video editing, and motion graphics</strong>, and just completing my engineering course.
          </p>
          <div
            className="social-row animate-fade-in-up delay-300"
            style={{ display: "flex", gap: "12px" }}
          >
            <Link href="/photo-artwork" className="btn-primary">
              Explore Projects
            </Link>
            <Link href="/writing" className="btn-ghost">
              The Philosophy
            </Link>
          </div>
        </div>

        <div className="hero-visual animate-fade-in delay-200">
          <Image
            src="/images/mining-engineer.png"
            alt="Anwesh Bindhani"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="hero-info-bar animate-fade-in delay-400">
          <div className="info-item">
            <span className="info-item-label">Affiliation</span>
            <p className="body-sm" style={{ fontWeight: 600 }}>NIT ROURKELA</p>
          </div>
          <div className="info-item">
            <span className="info-item-label">Focus</span>
            <p className="body-sm" style={{ fontWeight: 600 }}>MINING & VISUAL ARTS</p>
          </div>
          <div className="info-item">
            <span className="info-item-label">Location</span>
            <p className="body-sm" style={{ fontWeight: 600 }}>ODISHA, INDIA</p>
          </div>
          <div className="info-item">
            <span className="info-item-label">Status</span>
            <p className="body-sm" style={{ fontWeight: 600 }}>AVAILABLE FOR PROJECTS</p>
          </div>
        </div>
      </section>

      {/* About Section - Dualism in Practice */}
      <section className="about-section section" id="about" style={{ background: '#0a0a0a' }}>
        <div className="container">
          <div className="about-grid">
            <div className="animate-fade-in-up">
              <span className="hero-label" style={{ fontSize: '11px' }}>THE MISSION</span>
              <h2 className="display-lg" style={{ marginBottom: "32px", fontSize: 'clamp(40px, 5vw, 72px)', textTransform: 'uppercase' }}>
                DUALISM IN PRACTICE
              </h2>
              <div className="about-text">
                <p className="body-lg" style={{ color: '#aaa', marginBottom: '24px' }}>
                  I view mining engineering not just as resource extraction, but as
                  a complex logistical and ethical dance with the earth. This
                  technical grounding informs my creative work, where I explore
                  themes of industrial decay, visceral textures, and human anatomy.
                </p>
                <p className="body-lg" style={{ color: '#aaa', marginTop: '24px' }}>
                  Whether I&apos;m optimizing shovel-dumper cycles or rendering
                  abstract digital landscapes, my goal remains constant: to
                  engineer systems and narratives that resonate with precision and
                  purpose.
                </p>

                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-item-value">02+</span>
                    <span className="stat-item-label">Years Engineering</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-item-value">03+</span>
                    <span className="stat-item-label">Years Art Making</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-visual animate-fade-in delay-200" style={{ border: 'none', background: '#111' }}>
              <Image
                src="/images/me2.png"
                alt="Mining Engineering Persona"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", opacity: 0.8 }}
              />
              <div className="floating-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Grid */}
      <section className="section" id="featured-work">
        <div className="container">
          <div className="section-header">
            <span className="label-md">Selected Work</span>
            <h2 className="headline-lg" style={{ marginTop: "12px" }}>
              Creative Explorations
            </h2>
          </div>

          <div className="grid-2">
            <Link href="/photo-artwork" style={{ textDecoration: "none" }}>
              <div className="project-card">
                <Image
                  src="/images/photo-x.png"
                  alt="Photo Artwork"
                  fill
                  className="project-card-image"
                  style={{ objectFit: "cover" }}
                />
                <div className="project-card-overlay">
                  <div className="chip" style={{ marginBottom: "12px", width: "fit-content" }}>
                    Photography
                  </div>
                  <h3 className="project-card-title">Photo Artwork</h3>
                </div>
              </div>
            </Link>

            <Link href="/video-artwork" style={{ textDecoration: "none" }}>
              <div className="project-card">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="project-card-image"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block' 
                  }}
                >
                  <source src="/videos/motion-1.mp4" type="video/mp4" />
                </video>
                <div className="project-card-overlay">
                  <div className="chip" style={{ marginBottom: "12px", width: "fit-content" }}>
                    Motion
                  </div>
                  <h3 className="project-card-title">Video Artwork</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-footer" id="cta">
        <div className="container">
          <p className="cta-footer-text">Interested in working together?</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

