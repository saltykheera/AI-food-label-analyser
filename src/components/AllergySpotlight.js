export default function AllergySpotlight() {
  return (
    <section className="allergy-engine-section" id="allergy-engine">
      <div className="container">
        <div className="allergy-spotlight-grid">
          <div className="allergy-spotlight-content">
            <div className="pill-badge pill-alert">
              <span>⚠️ Zero-Compromise Safety</span>
            </div>
            <h2 className="section-title">
              Detect Hidden Allergens That Brands Bury in Small Print
            </h2>
            <p className="section-desc">
              Food allergies can be dangerous or even life-threatening. Brands frequently disguise allergens under scientific names or hide them in shared facility disclaimers. Poshan Parakh AI exposes them instantly.
            </p>

            <div className="allergy-features-list">
              <div className="feature-item">
                <div className="feature-check">✓</div>
                <div>
                  <strong>Derivative Allergen Recognition</strong>
                  <p>Catches casein, whey, and lactose for dairy allergies; flags spelt, kamut, and malt for gluten sensitivity; spots lecithin and edamame for soy allergies.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-check">✓</div>
                <div>
                  <strong>Shared Facility &amp; Cross-Contamination Warnings</strong>
                  <p>Extracts "may contain trace amounts" and "manufactured on shared machinery" notices often overlooked by human eyes.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-check">✓</div>
                <div>
                  <strong>Custom Dietary Profiles</strong>
                  <p>Support for Celiac, Alpha-Gal (red meat allergy), Histamine Intolerance, Low FODMAP, Phenylketonuria (PKU), and clean-eating regimens.</p>
                </div>
              </div>
            </div>

            <div className="allergy-cta-box">
              <a href="#demo-section" className="btn btn-primary">
                Test Allergen Radar in Demo
              </a>
              <span className="medical-notice">Certified against FDA &amp; EFSA allergen standards</span>
            </div>
          </div>

          {/* Phone Mockup with Real Allergy Warning */}
          <div className="allergy-mockup-wrapper">
            <div className="allergy-mockup-ambient"></div>
            <div className="mockup-frame glass-panel">
              <div className="mockup-status-header">
                <span className="mockup-time">9:41 AM</span>
                <span className="mockup-status-icons">📶 5G 🔋 98%</span>
              </div>
              <div className="mockup-screen-content">
                <img
                  src="/assets/mobile-scanner-ui.jpg"
                  alt="NutriScan smartphone app warning user about hidden dairy and soy"
                  className="mockup-img"
                />
              </div>
              <div className="mockup-caption">
                <span className="caption-pulse"></span>
                <strong>Live Detection:</strong> Dairy derivative flagged in grocery aisle in 380ms.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
