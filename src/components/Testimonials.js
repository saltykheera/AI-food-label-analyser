export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="pill-badge">User Stories</div>
          <h2 className="section-title">Trusted by Dietitians, Parents &amp; Foodies</h2>
          <p className="section-subtitle">
            See how real people use Poshan Parakh AI every week to avoid hospital visits and make healthier choices.
          </p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card glass-panel">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-quote">
              &ldquo;My 7-year-old has a severe peanut and tree nut allergy. Grocery shopping used to take me hours reading microscopic warnings. Poshan Parakh AI flagged a hidden shared-facility notice on a biscuit brand I almost bought. It literally prevented an ER visit.&rdquo;
            </p>
            <div className="testimonial-author">
              <div className="author-avatar avatar-1">ES</div>
              <div>
                <strong>Elena S.</strong>
                <span>Allergy Mom &amp; Teacher</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card glass-panel">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-quote">
              &ldquo;As a registered dietitian, I recommend Poshan Parakh AI to all my pre-diabetic patients. The way it breaks down hidden alias names for high-fructose corn syrup and gives a realistic health score is far superior to standard nutrition tables.&rdquo;
            </p>
            <div className="testimonial-author">
              <div className="author-avatar avatar-2">Dr.M</div>
              <div>
                <strong>Dr. Marcus Vance, MS, RD</strong>
                <span>Clinical Nutrition Specialist</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card glass-panel">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-quote">
              &ldquo;I have Celiac disease and inflammatory bowel issues. The ingredient jargon buster is fantastic—I learned which emulsifiers trigger my flare-ups and my weekly health score has gone from 54 to 88 over the last two months.&rdquo;
            </p>
            <div className="testimonial-author">
              <div className="author-avatar avatar-3">KL</div>
              <div>
                <strong>Kavita L.</strong>
                <span>Software Engineer &amp; Marathon Runner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
