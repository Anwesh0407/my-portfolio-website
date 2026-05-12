import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing & Thoughts | Anwesh Bindhani",
  description:
    "Exploring the intersection of structural engineering, industrial design, and the digital future. Documenting technical breakthroughs and conceptual shifts.",
};

const writingEntries = [
  {
    title: "face.ai",
    desc: "A short film with an open ending — a creation of mine written, directed, produced, and edited by me.",
    category: "Movie Scripts",
    file: "/documents/face-ai.pdf",
  },
  {
    title: "Museum of Art",
    desc: "A short story written by me which came to my mind looking at a photograph that I took.",
    category: "Short Story",
    file: "/documents/museum-of-art.pdf",
  },
  {
    title: "Darshan 9.0",
    desc: "A nukkad natak written by my group and further performed on a college level.",
    category: "Nukkad Natak",
    file: "/documents/darshan-nukkad.pdf",
  },
];

const categories = [
  { name: "Movie Scripts", file: "/documents/movie-scripts-archive.pdf" },
  { name: "Poems", file: "/documents/poems-collection.pdf" },
  { name: "Nukkad Natak", file: "/documents/nukkad-natak-archive.pdf" },
];

export default function WritingPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" id="writing-header">
        <div className="container">
          <span className="label-md page-header-label animate-fade-in-up">
            Archive 001 / Creative Writing
          </span>
          <h1 className="display-lg page-header-title animate-fade-in-up delay-100">
            Writing &amp;
            <br />
            <span className="text-primary">Thoughts.</span>
          </h1>
          <p className="body-lg page-header-desc animate-fade-in-up delay-200">
            Exploring the intersection of structural engineering, industrial
            design, and the digital future. Documenting technical breakthroughs
            and conceptual shifts.
          </p>
        </div>
      </section>

      {/* Writing Entries */}
      <section className="section" id="writing-entries">
        <div className="container">
          <div style={{ display: "flex", gap: "12px", marginBottom: "48px", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <Link 
                href={cat.file} 
                key={cat.name} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="chip"
                style={{ textDecoration: 'none', transition: 'all 0.3s ease' }}
              >
                {cat.name}
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {writingEntries.map((entry, i) => (
              <div className="glass-card writing-card" key={entry.title}>
                <div className="chip" style={{ marginBottom: "16px", width: "fit-content" }}>
                  {entry.category}
                </div>
                <h2 className="writing-card-title">{entry.title}</h2>
                <p className="writing-card-desc">{entry.desc}</p>
                <Link 
                  href={entry.file} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="writing-card-link"
                >
                  Read Document →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-footer">
        <div className="container">
          <p className="cta-footer-text">Please reach out.</p>
          <Link href="/contact" className="btn-primary">
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}
