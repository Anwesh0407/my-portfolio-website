import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academics & Research | Anwesh Bindhani",
  description:
    "Mining Engineering at NIT Rourkela. Pioneering heavy industry through computational precision and advanced geomechanics.",
};

const timeline = [
  {
    year: "2021–2022",
    title: "10th Boards",
    desc: "Passed my class 10th with distinction.",
  },
  {
    year: "2022–2024",
    title: "12th Boards",
    desc: "Passed my class 12th with distinction.",
  },
  {
    year: "2024 Onwards",
    title: "Engineering",
    desc: "Rock Mechanics, Surface Mining, and Underground Coal Mining Systems at NIT Rourkela.",
  },
  {
    year: "2024 Onwards",
    title: "Data Science & Analytics",
    desc: "Pursuing my Data Science career through online mode.",
  },
];

const researchProjects = [
  {
    title: "Satellite Technology for Mining",
    desc: "Emergence of satellite technology for better mine survey with more accuracy and case study.",
    file: "/documents/satellite-tech.pdf",
    linkText: "Read Full Report →",
  },
  {
    title: "EIA Technology in Mining",
    desc: "How important Environmental Impact Assessment is and what are the technologies emerging in it.",
    file: "/documents/eia-mining.pdf",
    linkText: "Read Full Report →",
  },
  {
    title: "Data Science",
    desc: "Smart data management and library system.",
    file: "https://github.com/Anwesh0407/1st-data-science-project-by-Anwesh",
    linkText: "View Repository →",
  },
];

export default function AcademicsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" id="academics-header" style={{ position: 'relative', overflow: 'hidden', background: 'transparent' }}>
        <div className="hero-bg-overlay" style={{ opacity: 0.4, background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)' }}>
          <Image
            src="/images/bg-design-x.png"
            alt="Mining Engineering at NIT Rourkela"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center", filter: "grayscale(1) brightness(0.7)" }}
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="label-md page-header-label animate-fade-in-up">
            Department of Mining Engineering
          </span>
          <h1 className="display-lg page-header-title animate-fade-in-up delay-100" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            Mining Engineering
            <br />
            <span className="text-primary">at NIT Rourkela.</span>
          </h1>
          <p className="body-lg page-header-desc animate-fade-in-up delay-200" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
            Pioneering heavy industry through computational precision and
            advanced geomechanics. A comprehensive academic journey focusing on
            the intersection of raw mechanical force and digital engineering.
          </p>

          <div style={{ marginTop: "24px" }}>
            <div className="chip">
              Current Standing — B.Tech 2024
            </div>
          </div>
        </div>
      </section>

      {/* Academic Timeline */}
      <section className="section" id="academic-timeline">
        <div className="container">
          <div className="section-header">
            <span className="label-md">Chronology</span>
            <h2 className="headline-lg" style={{ marginTop: "12px" }}>
              Academic Timeline
            </h2>
          </div>

          <div className="timeline">
            {timeline.map((item) => (
              <div className="timeline-item" key={item.title}>
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" style={{ maxWidth: "1280px", margin: "0 auto" }} />

      {/* Research Projects */}
      <section className="section" id="research-projects">
        <div className="container">
          <div className="section-header">
            <span className="label-md">Technical Investigations &amp; Publications</span>
            <h2 className="headline-lg" style={{ marginTop: "12px" }}>
              Research Projects
            </h2>
          </div>

          <div className="grid-3">
            {researchProjects.map((project) => (
              <div className="glass-card research-card" key={project.title} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 className="research-card-title">{project.title}</h3>
                  <p className="research-card-desc">{project.desc}</p>
                </div>
                <Link 
                  href={project.file} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="writing-card-link"
                  style={{ marginTop: '24px' }}
                >
                  {project.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
