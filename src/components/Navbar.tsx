"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/photo-artwork", label: "Photo Artwork" },
  { href: "/video-artwork", label: "Video Artwork" },
  { href: "/writing", label: "Writing" },
  { href: "/academics", label: "Academics" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" id="main-nav">
      <div className="navbar-inner">
        <Link href="/" className="navbar-brand">
          ANWESH BINDHANI
        </Link>

        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="nav-toggle"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar-links-container ${menuOpen ? "open" : ""}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn-primary">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

