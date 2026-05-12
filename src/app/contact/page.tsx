"use client";

import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="contact-container container">
      {/* Back Button */}
      <Link href="/" className="back-btn animate-fade-in">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Back
      </Link>

      <div className="contact-layout">
        {/* Left Side: Info & Map */}
        <div className="contact-left">
          <div className="animate-fade-in-up">
            <span className="label-md" style={{ color: "rgba(255, 255, 255, 0.4)", marginBottom: "16px", display: "block" }}>
              DEPLOYMENT PHASE 04
            </span>
            <h1 className="display-lg" style={{ marginBottom: "32px", fontSize: "clamp(48px, 6vw, 84px)" }}>
              Initiate<br />Contact.
            </h1>
            <p className="body-lg" style={{ maxWidth: "480px", color: "#aaa", marginBottom: "48px" }}>
              Whether it&apos;s a technical query regarding mining engineering, a creative collaboration,
              or a discussion on AI integration—reach out through the secure channel.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div className="chip" style={{ padding: "12px", background: "rgba(255, 77, 90, 0.05)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                </div>
                <div>
                  <span className="label-md" style={{ fontSize: "10px", color: "#666", marginBottom: "4px", display: "block" }}>Personal Comms</span>
                  <p className="body-md" style={{ color: "#fff", fontWeight: 600 }}>anweshbindhani@gmail.com</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div className="chip" style={{ padding: "12px", background: "rgba(255, 77, 90, 0.05)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                </div>
                <div>
                  <span className="label-md" style={{ fontSize: "10px", color: "#666", marginBottom: "4px", display: "block" }}>Student Comms</span>
                  <p className="body-md" style={{ color: "#fff", fontWeight: 600 }}>724mn1005@nitrkl.ac.in</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div className="chip" style={{ padding: "12px", background: "rgba(255, 77, 90, 0.05)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <span className="label-md" style={{ fontSize: "10px", color: "#666", marginBottom: "4px", display: "block" }}>Base Station</span>
                  <p className="body-md" style={{ color: "#fff", fontWeight: 600 }}>NIT Rourkela, Odisha, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="map-wrapper animate-fade-in delay-200">
            {/* Using a styled image for the map to match the specific aesthetic of the screenshot */}
            <div style={{ position: "relative", width: "100%", height: "100%", background: "#050505" }}>
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14761.594738521013!2d84.8914619!3d22.2449557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201f1338575087%3A0xc3408c6a08468759!2sNIT%20Rourkela%20Campus%2C%20Rourkela%2C%20Odisha!5e0!3m2!1sen!2sin!4v1715189000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(1) contrast(1.2) opacity(0.5)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="map-status">
                <div className="status-dot"></div>
                Systems Online
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-container animate-fade-in-up delay-200">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Identification</label>
                <input type="text" placeholder="NAME / ORGANIZATION" className="contact-input" />
              </div>
              <div className="form-group">
                <label>Secure Email Address</label>
                <input type="email" placeholder="EMAIL@DOMAIN.COM" className="contact-input" />
              </div>
            </div>

            <div className="form-group">
              <label>Protocol Type</label>
              <select className="contact-select">
                <option>General Inquiry</option>
                <option>Technical Collaboration</option>
                <option>Creative Project</option>
                <option>Mining Operations</option>
              </select>
            </div>

            <div className="form-group">
              <label>Transmission Content</label>
              <textarea placeholder="TYPE YOUR MESSAGE HERE..." className="contact-textarea"></textarea>
            </div>

            <button type="submit" className="contact-submit">
              CONTACT ME 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
