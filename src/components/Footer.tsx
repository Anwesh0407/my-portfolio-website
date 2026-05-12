import Link from "next/link";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/a.nw.esh.04?igsh=MTNkY2ltMnM0M3VvYg%3D%3D&utm_source=qr" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anwesh-bindhani-04b30b318" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCC0061uWz3Gk93DdctSFcJQ" },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Anwesh-Bindhani?ev=hdr_xprf" },
  { label: "GitHub", href: "https://github.com/Anwesh0407" },
];

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer-inner" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" className="navbar-brand">
          ANWESH BINDHANI
        </Link>
        <ul className="footer-social" style={{ marginBottom: 0 }}>
          {socialLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} style={{ fontSize: '11px', letterSpacing: '0.1em' }}>
                {link.label.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="container" style={{ marginTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <p className="footer-copyright" style={{ fontSize: '10px', color: '#444' }}>
          © {new Date().getFullYear()} ANWESH BINDHANI. ALL RIGHTS RESERVED.
        </p>
        <p className="footer-copyright" style={{ fontSize: '10px', color: '#444' }}>
          MINING ENGINEERING & CREATIVE TECHNOLOGY
        </p>
      </div>
    </footer>
  );
}

