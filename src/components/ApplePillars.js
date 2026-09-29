'use client';

import Link from 'next/link';

export default function ApplePillars() {
  return (
    <section className="apple-pillars-section" id="pillars">
      <div className="apple-container">
        <div className="apple-section-header">
          <span className="apple-section-kicker">Core Capabilities</span>
          <h2 className="apple-section-title">Designed for clarity.</h2>
          <p className="apple-section-desc">
            No nutrition degree required. Just three simple principles that keep you informed.
          </p>
        </div>

        <div className="apple-pillars-grid">
          {/* Card 1 */}
          <div className="apple-pillar-card">
            <div className="apple-pillar-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="22" y1="12" x2="18" y2="12"></line>
                <line x1="6" y1="12" x2="2" y2="12"></line>
                <line x1="12" y1="6" x2="12" y2="2"></line>
                <line x1="12" y1="22" x2="12" y2="18"></line>
              </svg>
            </div>
            <h3 className="apple-pillar-heading">Vision Intelligence.</h3>
            <p className="apple-pillar-body">
              Gemini Vision AI deciphers distorted, reflective, and microscopic packaging labels in under 400 milliseconds.
            </p>
          </div>

          {/* Card 2 */}
          <div className="apple-pillar-card">
            <div className="apple-pillar-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34c759" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="apple-pillar-heading">Nutritional Truth.</h3>
            <p className="apple-pillar-body">
              International NOVA 1–4 classification and 0–100 health scoring cut through misleading marketing claims.
            </p>
          </div>

          {/* Card 3 */}
          <div className="apple-pillar-card">
            <div className="apple-pillar-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff9f0a" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 className="apple-pillar-heading">Allergen Safety.</h3>
            <p className="apple-pillar-body">
              Instant alerts for dairy, gluten, soy, nuts, and artificial additives before food ever touches your cart.
            </p>
          </div>
        </div>

        {/* Minimalist Bottom Callout */}
        <div className="apple-minimal-cta-banner">
          <div className="apple-cta-text-group">
            <h3>Try it directly on your smartphone.</h3>
            <p>No app store download needed. Fast, lightweight, camera-ready.</p>
          </div>
          <Link href="/work" className="apple-btn-primary">
            Launch /work
          </Link>
        </div>
      </div>
    </section>
  );
}
