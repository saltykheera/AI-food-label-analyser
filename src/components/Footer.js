'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="apple-footer">
      <div className="apple-container">
        <div className="apple-footer-disclaimer">
          <p>
            1. proshanprakhar AI analyzes packaging photography using computer vision and nutritional indexes. Always consult healthcare professionals for acute medical allergies or specific clinical dietary requirements.
          </p>
        </div>

        <div className="apple-footer-hairline"></div>

        <div className="apple-footer-bottom">
          <div className="apple-footer-copy">
            <span>Copyright &copy; {new Date().getFullYear()} proshanprakhar. All rights reserved.</span>
          </div>

          <div className="apple-footer-links">
            <Link href="/work">Mobile App (/work)</Link>
            <a href="#demo-section">Interactive Scanner</a>
            <a href="#hero">Overview</a>
            <span className="footer-status-pill">● Vision Server Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
