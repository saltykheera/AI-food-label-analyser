'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="apple-global-nav" id="site-header">
      <div className="apple-nav-container">
        {/* Brand */}
        <Link href="/" className="apple-nav-brand" onClick={closeMenu}>
          <svg className="apple-brand-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="3" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span className="apple-brand-text">Poshan Parakh</span>
        </Link>

        {/* Minimal Navigation */}
        <nav className={`apple-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#hero" className="apple-nav-item" onClick={closeMenu}>
            Overview
          </a>
          <a href="#demo-section" className="apple-nav-item" onClick={closeMenu}>
            Scanner
          </a>
          <a href="#pillars" className="apple-nav-item" onClick={closeMenu}>
            Features
          </a>
          <Link href="/work" className="apple-nav-item apple-nav-highlight" onClick={closeMenu}>
            Mobile App
          </Link>
        </nav>

        {/* Action Button */}
        <div className="apple-nav-actions">
          <Link href="/work" className="apple-btn-pill">
            Scan Label
          </Link>

          <button
            className="apple-nav-toggle"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={mobileMenuOpen ? 'active' : ''}></span>
            <span className={mobileMenuOpen ? 'active' : ''}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
