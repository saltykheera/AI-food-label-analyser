'use client';

import { useState } from 'react';
import { FAQ_DATA } from '@/data/mockData';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-container">
        <div className="section-header text-center">
          <div className="pill-badge">Got Questions?</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about Poshan Parakh AI accuracy, privacy, and technology.
          </p>
        </div>

        <div className="faq-accordion">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item glass-panel ${isOpen ? 'active' : ''}`}
              >
                <button
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => toggleIndex(idx)}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
