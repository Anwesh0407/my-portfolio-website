import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Artwork | Anwesh Bindhani",
  description:
    "Cinematic storytelling fused with digital movement. High-velocity visual experiences through motion graphics and video editing.",
};

const videoEditingProjects = [
  {
    title: "Banaras Movie",
    desc: "A cinematic narrative exploring the visceral textures and deep culture of Banaras.",
    video: "https://drive.google.com/file/d/1-u8WQp26u_d2MnKOsmiMJ2ou_6iejIwn/view?t=6.881"
  },
  {
    title: "Cinematic Edit",
    desc: "Precision color grading and look development showcasing high-end aesthetics.",
    video: "https://drive.google.com/file/d/1FFi4ZlLMKca48G2lwpwcUD4JBxIQzQ-o/view?t=3.987"
  },
  {
    title: "Trending Edit",
    desc: "High-velocity visual effects and rhythmic pacing for social media impact.",
    video: "https://drive.google.com/file/d/1e6JtArGHBdAJt0r2hYoNYiujpl67kh7e/view?t=2.614"
  },
];

const motionGraphicsProjects = [
  {
    title: "After Effects Debut",
    desc: "My first exploration into complex layer management and dynamic keyframing in After Effects.",
    video: "/videos/motion-1.mp4"
  },
  {
    title: "Interface Motion",
    desc: "Interactive motion systems designed for futuristic visualization.",
    video: "https://drive.google.com/file/d/1C-JHwgqLYD8KFZOnB7-y1JLAfBuRDKkH/view?usp=sharing"
  },
  {
    title: "Fragmented Decay (Simulation)",
    desc: "Particle simulation and 3D compositing exploring the cycle of industrial evolution.",
    video: "/videos/fragmented-decay.mp4"
  },
];

export default function VideoArtworkPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" id="video-header">
        <div className="container">
          <span className="label-md page-header-label animate-fade-in-up">
            Creative / Motion
          </span>
          <h1 className="display-lg page-header-title animate-fade-in-up delay-100">
            Motion Graphics
            <br />
            <span className="text-primary">and Video Editing.</span>
          </h1>
          <p className="body-lg page-header-desc animate-fade-in-up delay-200">
            Cinematic storytelling fused with digital movement. We craft
            high-velocity visual experiences that demand attention and drive
            impact through technical rigor.
          </p>
        </div>
      </section>

      {/* Video Editing Section */}
      <section className="section" id="video-editing">
        <div className="container">
          <div className="category-header">
            <span className="category-number">01</span>
            <div>
              <h2 className="category-title">Video Editing</h2>
              <span className="category-subtitle">
                Technical Precision in Post-Production
              </span>
            </div>
          </div>

          <div className="grid-3">
            {videoEditingProjects.map((project) => (
              <div className="glass-card" key={project.title} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 className="headline-md" style={{ fontSize: "18px", marginBottom: "8px" }}>
                    {project.title}
                  </h3>
                  <p className="body-md">{project.desc}</p>
                </div>
                <Link 
                  href={project.video} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="writing-card-link"
                  style={{ marginTop: '24px' }}
                >
                  Watch Video →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" style={{ maxWidth: "1280px", margin: "0 auto" }} />

      {/* Motion Graphics Section */}
      <section className="section" id="motion-graphics">
        <div className="container">
          <div className="category-header">
            <span className="category-number">02</span>
            <div>
              <h2 className="category-title">Motion Graphics</h2>
              <span className="category-subtitle">
                Dynamics Driven by Algorithms
              </span>
            </div>
          </div>

          <div className="grid-3">
            {motionGraphicsProjects.map((project) => (
              <div className="glass-card" key={project.title} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 className="headline-md" style={{ marginBottom: "8px" }}>
                    {project.title}
                  </h3>
                  <p className="body-md">{project.desc}</p>
                </div>
                <Link 
                  href={project.video} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="writing-card-link"
                  style={{ marginTop: '24px' }}
                >
                  Watch Motion →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-footer">
        <div className="container">
          <p className="body-md" style={{ marginBottom: "16px", color: "var(--color-primary)" }}>
            Please reach out to my <a href="https://www.instagram.com/a.nw.esh.04?igsh=MTNkY2ltMnM0M3VvYg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', fontWeight: 600 }}>Instagram handle</a> to see the latest video edits and trending reels.
          </p>
          <p className="cta-footer-text">Please reach out.</p>
          <Link href="/contact" className="btn-primary">
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}
