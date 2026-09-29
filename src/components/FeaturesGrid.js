export default function FeaturesGrid() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header text-center">
          <div className="pill-badge">Feature Suite</div>
          <h2 className="section-title">Engineered to Decode Every Food Industry Secret</h2>
          <p className="section-subtitle">
            Food manufacturers use chemical aliases and microscopic fonts to obscure low-quality fillers. Poshan Parakh AI translates it all into plain, actionable language.
          </p>
        </div>

        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card glass-panel">
            <div className="feature-icon-circle">📖</div>
            <h3 className="feature-heading">Plain-English Jargon Buster</h3>
            <p className="feature-copy">
              Don't know what "Disodium Inosinate" or "Tertiary Butylhydroquinone" actually is? Tap any chemical to see its origin, why brands add it, and if it poses health concerns.
            </p>
            <div className="feature-preview-pill">
              <span className="preview-term">Maltodextrin</span>
              <span className="preview-arrow">→</span>
              <span className="preview-def">High-glycemic corn starch filler that spikes blood sugar</span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature-card glass-panel">
            <div className="feature-icon-circle">🔎</div>
            <h3 className="feature-heading">50+ Hidden Sugar Identifier</h3>
            <p className="feature-copy">
              Companies divide sugar into dextrose, agave syrup, malt syrup, and fruit juice concentrate to avoid listing sugar as the primary ingredient. Our AI totals all hidden sugars.
            </p>
            <div className="feature-preview-pill">
              <span className="preview-term">Total Hidden Sugars:</span>
              <span className="preview-def text-amber">3 different syrups detected</span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature-card glass-panel">
            <div className="feature-icon-circle">🔄</div>
            <h3 className="feature-heading">Smart Healthy Swaps</h3>
            <p className="feature-copy">
              Scanning a junk item doesn't end in frustration. Poshan Parakh AI immediately highlights 2 to 3 certified healthier, lower-sugar, allergen-free alternatives available at your local grocer.
            </p>
            <div className="feature-preview-pill">
              <span className="preview-term">Recommended Swap:</span>
              <span className="preview-def text-emerald">+48 Health Score Upgrade</span>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="feature-card glass-panel">
            <div className="feature-icon-circle">⚡</div>
            <h3 className="feature-heading">Zero-Latency Edge OCR</h3>
            <p className="feature-copy">
              Optimized computer vision algorithms extract text directly on your device in under 400 milliseconds. Works even in poor grocery store basement cell connectivity.
            </p>
            <div className="feature-preview-pill">
              <span className="preview-term">Offline Ready:</span>
              <span className="preview-def">Local cache of top 300,000 foods</span>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="feature-card glass-panel">
            <div className="feature-icon-circle">👪</div>
            <h3 className="feature-heading">Family Multi-Profile Guardian</h3>
            <p className="feature-copy">
              Manage different dietary profiles for your whole family under one account. Verify that a snack is peanut-safe for your child, low-sodium for your parents, and dairy-free for you.
            </p>
            <div className="feature-preview-pill">
              <span className="preview-term">Profiles:</span>
              <span className="preview-def">Up to 6 family members synced</span>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="feature-card glass-panel">
            <div className="feature-icon-circle">📊</div>
            <h3 className="feature-heading">Exportable Health Reports</h3>
            <p className="feature-copy">
              Export your scanned consumption history, additive exposure levels, and nutrient totals into a formatted PDF or CSV for your dietitian, allergist, or gastroenterologist.
            </p>
            <div className="feature-preview-pill">
              <span className="preview-term">Export Format:</span>
              <span className="preview-def">Clinical PDF / CSV format</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
