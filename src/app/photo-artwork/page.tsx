import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Artwork | Anwesh Bindhani",
  description:
    "A technical exploration of image manipulation with Photoshop and Lightroom, and designing posters with Illustrator and Canva.",
};

const photoEditingProjects = [
  {
    title: "Photo 1",
    desc: "Multi-layer exposure blending and tonal mapping.",
    image: "/images/photo-x.png",
  },
  {
    title: "Photo 2",
    desc: "Color grading and technical post-production.",
    image: "/images/photo-2.png",
  },
  {
    title: "Photo 3",
    desc: "Exploring visceral textures and mechanical entropy.",
    image: "/images/photo-3.png",
  },
  {
    title: "Photo 4",
    desc: "Vast landscapes and industrial narratives.",
    image: "/images/photo-4.png",
  },
];

const posterProjects = [
  {
    title: "Poster 1",
    desc: "Digital composition and visual system exploration.",
    image: "/images/poster-1.png",
  },
  {
    title: "Poster 2",
    desc: "Graphic design study focused on industrial aesthetics.",
    image: "/images/poster-2.png",
  },
  {
    title: "Poster 3",
    desc: "Visual communication through typography and texture.",
    image: "/images/poster-3.png",
  },
  {
    title: "Poster 4",
    desc: "Experimental layout and high-contrast digital art.",
    image: "/images/poster-4.png",
  },
];

export default function PhotoArtworkPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" id="photo-header">
        <div className="container">
          <span className="label-md page-header-label animate-fade-in-up">
            Creative / Photography
          </span>
          <h1 className="display-lg page-header-title animate-fade-in-up delay-100">
            Photo Artwork
            <br />
            <span className="text-primary">curated with precision.</span>
          </h1>
          <p className="body-lg page-header-desc animate-fade-in-up delay-200">
            A technical exploration of image manipulation with Photoshop and
            Lightroom, and designing posters with Illustrator and Canva.
          </p>
        </div>
      </section>

      {/* Photo Editing Section */}
      <section className="section" id="photo-editing">
        <div className="container">
          <div className="category-header">
            <span className="category-number">01</span>
            <div>
              <h2 className="category-title">Photo Editing &amp; Compilation</h2>
              <span className="category-subtitle">
                Technical Precision in Post-Production
              </span>
            </div>
          </div>

          <div className="grid-4">
            {photoEditingProjects.map((project, i) => (
              <div className="project-card" key={project.title} style={{ aspectRatio: '1/1' }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="project-card-image"
                  style={{ objectFit: "cover" }}
                />
                <div className="project-card-overlay">
                  <h3 className="project-card-title" style={{ fontSize: '16px' }}>{project.title}</h3>
                  <p className="project-card-desc" style={{ fontSize: '12px' }}>{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" style={{ maxWidth: "1280px", margin: "0 auto" }} />

      {/* Poster Design Section */}
      <section className="section" id="poster-design">
        <div className="container">
          <div className="category-header">
            <span className="category-number">02</span>
            <div>
              <h2 className="category-title">Poster Design</h2>
              <span className="category-subtitle">
                Visual Communication &amp; Layout Systems
              </span>
            </div>
          </div>

          <div className="grid-4">
            {posterProjects.map((project) => (
              <div className="project-card" key={project.title} style={{ aspectRatio: '1/1.4' }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="project-card-image"
                  style={{ objectFit: "cover" }}
                />
                <div className="project-card-overlay">
                  <h3 className="project-card-title" style={{ fontSize: '16px' }}>{project.title}</h3>
                  <p className="project-card-desc" style={{ fontSize: '12px' }}>{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-footer">
        <div className="container">
          <p className="body-md" style={{ marginBottom: "16px", color: "var(--color-primary)" }}>
            Check my latest clicks here: <a href="https://www.instagram.com/frames_by_a04?igsh=MXI0bnk5bHg5emEyMQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', fontWeight: 600 }}>Photography Portfolio</a>
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
