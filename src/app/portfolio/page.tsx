import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Anwesh Bindhani",
  description: "Exploring the intersection of autonomous systems, neural computation, and cinematic aesthetics.",
};

const projects = [
  { title: "Autonomous Mining Automation", desc: "Optimization of autonomous vehicle systems for open-pit mining operations.", image: "/images/hero-bg.png" },
  { title: "Neural Process Control", desc: "Machine learning models for real-time process control in mineral processing.", image: "/images/photo-artwork.png" },
  { title: "Acoustic Telemetry Research", desc: "Signal processing for underground communication in mining environments.", image: "/images/video-artwork.png" },
  { title: "Cinematic System Visualization", desc: "Data-driven visual narratives for complex engineering systems.", image: "/images/mining-engineer.png" },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="page-header" id="portfolio-header">
        <div className="container">
          <span className="label-md page-header-label animate-fade-in-up">Selected Projects</span>
          <h1 className="display-lg page-header-title animate-fade-in-up delay-100">Work</h1>
          <p className="body-lg page-header-desc animate-fade-in-up delay-200">
            Exploring the intersection of autonomous systems, neural computation, and cinematic aesthetics.
            A curated selection of technical explorations and visual systems.
          </p>
        </div>
      </section>

      <section className="section" id="work-grid">
        <div className="container">
          <div className="grid-2">
            {projects.map((project) => (
              <div className="project-card" key={project.title}>
                <Image src={project.image} alt={project.title} fill className="project-card-image" style={{ objectFit: "cover" }} />
                <div className="project-card-overlay">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-footer">
        <div className="container">
          <h2 className="headline-lg" style={{ marginBottom: "16px" }}>Interested in working together?</h2>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Email Me</Link>
            <Link href="#" className="btn-ghost">Download CV</Link>
          </div>
        </div>
      </section>
    </>
  );
}
