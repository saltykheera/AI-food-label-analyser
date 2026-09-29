export default function Workflow() {
  return (
    <section className="workflow-section" id="how-it-works">
      <div className="container">
        <div className="section-header text-center">
          <div className="pill-badge">Seamless Journey</div>
          <h2 className="section-title">From Microscopic Fine Print to Total Clarity in 6 Steps</h2>
          <p className="section-subtitle">
            Poshan Parakh AI replaces 15 minutes of squinting at ingredient lists with a single 0.4-second intelligent scan.
          </p>
        </div>

        <div className="workflow-grid">
          {/* Step 1 */}
          <div className="workflow-card glass-panel">
            <div className="step-badge">Step 01</div>
            <div className="workflow-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
            <h3 className="workflow-title">Point &amp; Snap or Upload</h3>
            <p className="workflow-desc">
              Capture curved bottles, bent pouches, or crumpled snack wrappers. Our edge-adaptive computer vision compensates for glare, creases, and low light.
            </p>
          </div>

          {/* Step 2 */}
          <div className="workflow-card glass-panel">
            <div className="step-badge">Step 02</div>
            <div className="workflow-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="9" x2="15" y2="9"></line>
                <line x1="9" y1="13" x2="15" y2="13"></line>
                <line x1="9" y1="17" x2="13" y2="17"></line>
              </svg>
            </div>
            <h3 className="workflow-title">AI Vision OCR Extracts Data</h3>
            <p className="workflow-desc">
              Our neural OCR decompiles microscopic 4pt typography, multilingual ingredient lists, and US/EU nutrition fact formats into structured semantic data.
            </p>
          </div>

          {/* Step 3 */}
          <div className="workflow-card glass-panel">
            <div className="step-badge">Step 03</div>
            <div className="workflow-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <h3 className="workflow-title">Deep Chemical Decompilation</h3>
            <p className="workflow-desc">
              Cross-references ingredients against 12,000+ scientific records. Unmasks 50+ alias names for added sugars, chemical emulsifiers, and artificial preservatives.
            </p>
          </div>

          {/* Step 4 */}
          <div className="workflow-card glass-panel">
            <div className="step-badge">Step 04</div>
            <div className="workflow-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 className="workflow-title">Algorithmic Health Score</h3>
            <p className="workflow-desc">
              Calculates an objective 0–100 score balancing nutrient density (fiber, vitamins, proteins) against negative markers (sodium, refined sugar, ultra-processing).
            </p>
          </div>

          {/* Step 5 */}
          <div className="workflow-card glass-panel highlight-border">
            <div className="step-badge badge-alert">Step 05 • Life-Saving</div>
            <div className="workflow-icon-wrap icon-alert">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <h3 className="workflow-title">Personal Allergy Guardian</h3>
            <p className="workflow-desc">
              Instantly checks against your personal dietary profile. Triggers immediate audible and visual alerts for direct ingredients, derivatives, and cross-contamination risks.
            </p>
          </div>

          {/* Step 6 */}
          <div className="workflow-card glass-panel">
            <div className="step-badge">Step 06</div>
            <div className="workflow-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </div>
            <h3 className="workflow-title">Logged to Food History</h3>
            <p className="workflow-desc">
              Every scanned item is automatically cataloged in your personal consumption diary. Monitor your weekly average score, identify inflammatory trends, and export records for your doctor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
