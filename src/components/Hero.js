'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="apple-hero-section" id="hero">
      <div className="apple-hero-container">
        {/* Headline Group */}
        <div className="apple-hero-copy">
          <span className="apple-hero-eyebrow">proshanprakhar Vision AI</span>
          <h1 className="apple-hero-title">
            Decode what you eat.
            <br />
            <span className="apple-hero-title-sub">Instantly.</span>
          </h1>
          <p className="apple-hero-lead">
            Point your camera at any nutrition panel. AI extracts microscopic fine print, calculates real health scores, and flags allergens in seconds.
          </p>

          {/* Minimal Apple Action Buttons */}
          <div className="apple-hero-actions">
            <Link href="/work" className="apple-btn-primary">
              Open Mobile Scanner
            </Link>
            <a href="#demo-section" className="apple-link-action">
              Try the simulator
              <span className="apple-arrow">&rarr;</span>
            </a>
          </div>

          <div className="apple-hero-trust-row">
            <span>Powered by Gemini Vision</span>
            <span className="trust-dot">•</span>
            <span>NOVA 1–4 Standards</span>
            <span className="trust-dot">•</span>
            <span>Zero Guesswork</span>
          </div>
        </div>

        {/* Cinematic Device Visual */}
        <div className="apple-device-viewport">
          <div className="apple-iphone-canvas">
            {/* Minimalist Phone Hardware Mockup */}
            <div className="apple-iphone-chassis">
              {/* Dynamic Island */}
              <div className="apple-dynamic-island"></div>

              {/* Minimal App Screen */}
              <div className="apple-screen-surface">
                {/* Minimal Header */}
                <div className="apple-screen-top">
                  <span className="apple-time">9:41</span>
                  <div className="apple-status-indicators">
                    <span className="apple-signal"></span>
                    <span className="apple-battery"></span>
                  </div>
                </div>

                {/* Scanned Card Inside Screen */}
                <div className="apple-scan-card-display">
                  <div className="apple-scan-tag">
                    <span className="apple-tag-dot"></span>
                    <span>AI Vision Verified</span>
                  </div>

                  <h3 className="apple-screen-product">Greek Yogurt - Plain Non-Fat</h3>
                  <p className="apple-screen-brand">Chobani • 3/4 Cup (170g)</p>

                  {/* Circular Health Meter */}
                  <div className="apple-ring-meter">
                    <svg viewBox="0 0 100 100" className="apple-svg-ring">
                      <circle className="apple-ring-bg" cx="50" cy="50" r="42" />
                      <circle
                        className="apple-ring-progress"
                        cx="50"
                        cy="50"
                        r="42"
                        strokeDasharray="263.89"
                        strokeDashoffset="10.5"
                      />
                    </svg>
                    <div className="apple-ring-center">
                      <span className="apple-ring-num">96</span>
                      <span className="apple-ring-label">Grade A</span>
                    </div>
                  </div>

                  {/* NOVA Pill */}
                  <div className="apple-nova-pill">
                    <strong>NOVA Group 1</strong>
                    <span>Unprocessed whole food</span>
                  </div>

                  {/* 4 Clean Metric Blocks */}
                  <div className="apple-macro-row">
                    <div className="apple-macro-box">
                      <span className="macro-lbl">Calories</span>
                      <strong className="macro-val">90</strong>
                    </div>
                    <div className="apple-macro-box highlight">
                      <span className="macro-lbl">Protein</span>
                      <strong className="macro-val text-green">16g</strong>
                    </div>
                    <div className="apple-macro-box">
                      <span className="macro-lbl">Sugar</span>
                      <strong className="macro-val">5g</strong>
                    </div>
                    <div className="apple-macro-box">
                      <span className="macro-lbl">Fat</span>
                      <strong className="macro-val">0g</strong>
                    </div>
                  </div>

                  <Link href="/work" className="apple-screen-action-btn">
                    Launch Scanner in /work &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
