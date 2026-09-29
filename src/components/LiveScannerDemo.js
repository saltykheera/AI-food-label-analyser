'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/mockData';

export default function LiveScannerDemo() {
  const [productsData, setProductsData] = useState(PRODUCTS);
  const [currentId, setCurrentId] = useState('chobani');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStepText, setScanStepText] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);

  const fileInputRef = useRef(null);
  const currentProduct = productsData[currentId] || productsData.chobani;

  const runScan = (targetId, customData = null) => {
    setIsScanning(true);
    setScanStepText('Analyzing label optics with Gemini Vision...');

    setTimeout(() => {
      setIsScanning(false);
      if (customData) {
        setProductsData((prev) => ({ ...prev, [targetId]: customData }));
      }
      setCurrentId(targetId);
    }, 700);
  };

  const handleFileUpload = async (file) => {
    if (!file) return;
    setIsScanning(true);
    setScanStepText('Uploading label to Vision AI backend...');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/analyze', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      const customProduct = {
        id: 'custom',
        name: data.product_name || `Scanned: ${file.name.replace(/\.[^/.]+$/, '')}`,
        brand: `${data.brand || 'Scanned Label'} • ${data.nutritional_highlights?.serving_size || 'Serving'}`,
        category: data.category || 'Food Label',
        score: data.health_score || 85,
        grade: `Grade ${data.health_grade || 'A'}`,
        scoreColor: (data.health_score || 85) >= 80 ? '#34c759' : (data.health_score || 85) >= 50 ? '#ff9f0a' : '#ff3b30',
        nova_group: data.nova_group || 1,
        nova_label: data.nova_label || 'Unprocessed',
        verdict: data.verdict || 'Label successfully extracted.',
        positives: data.positives || [],
        negatives: data.negatives || [],
        nutrition: {
          cal: data.nutritional_highlights?.calories || '—',
          sugar: data.nutritional_highlights?.sugar || '—',
          fat: data.nutritional_highlights?.fat || '—',
          protein: data.nutritional_highlights?.protein || '—',
        },
        allergenTags: data.allergen_warnings || [],
      };

      runScan('custom', customProduct);
    } catch {
      runScan('custom');
    }
  };

  const score = currentProduct.score ?? 96;
  const scoreColor = score >= 80 ? '#34c759' : score >= 50 ? '#ff9f0a' : '#ff3b30';
  const circumference = 2 * Math.PI * 46;
  const offset = circumference - (score / 100) * circumference;

  return (
    <section className="apple-scanner-section" id="demo-section">
      <div className="apple-container">
        {/* Section Header */}
        <div className="apple-section-header">
          <span className="apple-section-kicker">Interactive Scanner</span>
          <h2 className="apple-section-title">See it in action.</h2>
          <p className="apple-section-desc">
            Choose a sample food label below or upload your own to test real-time AI extraction.
          </p>
        </div>

        {/* Apple Style Segmented Pill Control */}
        <div className="apple-segmented-tabs">
          <button
            type="button"
            className={`apple-tab-pill ${currentId === 'chobani' ? 'active' : ''}`}
            onClick={() => runScan('chobani')}
          >
            <span>🥛 Plain Greek Yogurt</span>
            <span className="apple-tab-score text-green">96</span>
          </button>

          <button
            type="button"
            className={`apple-tab-pill ${currentId === 'bar' ? 'active' : ''}`}
            onClick={() => runScan('bar')}
          >
            <span>🥣 SuperGreen Bowl</span>
            <span className="apple-tab-score text-green">92</span>
          </button>

          <button
            type="button"
            className={`apple-tab-pill ${currentId === 'spread' ? 'active' : ''}`}
            onClick={() => runScan('spread')}
          >
            <span>🍫 Hazelnut Spread</span>
            <span className="apple-tab-score text-red">34</span>
          </button>
        </div>

        {/* Main Clean Workspace */}
        <div className="apple-scanner-grid">
          {/* Left: Upload Tile */}
          <div
            className={`apple-upload-tile ${isDragOver ? 'drag-over' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragOver(false);
              if (e.dataTransfer.files?.[0]) handleFileUpload(e.dataTransfer.files[0]);
            }}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="sr-only-input"
              onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
            />

            <div className="apple-upload-center">
              <div className="apple-camera-icon-bubble">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
              <h3 className="apple-upload-title">Drop your food label photo</h3>
              <p className="apple-upload-subtitle">or click to browse your files</p>
              <button
                type="button"
                className="apple-btn-secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
              >
                Choose Photo
              </button>
            </div>

            <div className="apple-mobile-callout-bottom">
              <span>On mobile? </span>
              <Link href="/work" className="apple-link-blue" onClick={(e) => e.stopPropagation()}>
                Use camera mode in /work &rarr;
              </Link>
            </div>
          </div>

          {/* Right: Clean Apple Result Card */}
          <div className="apple-result-card">
            {isScanning && (
              <div className="apple-scanning-loader">
                <div className="apple-loader-ring"></div>
                <p className="apple-loader-text">{scanStepText}</p>
              </div>
            )}

            <div className="apple-card-inner">
              {/* Product Identity Header */}
              <div className="apple-result-top">
                <div className="apple-result-text">
                  <span className="apple-product-cat">{currentProduct.category}</span>
                  <h3 className="apple-result-title">{currentProduct.name}</h3>
                  <p className="apple-result-sub">{currentProduct.brand}</p>
                </div>

                {/* Score Circular Meter */}
                <div className="apple-score-widget">
                  <div className="apple-circle-box">
                    <svg viewBox="0 0 110 110" className="apple-score-svg">
                      <circle className="apple-track" cx="55" cy="55" r="46" />
                      <circle
                        className="apple-progress"
                        cx="55"
                        cy="55"
                        r="46"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        style={{ stroke: scoreColor }}
                      />
                    </svg>
                    <div className="apple-score-center">
                      <strong className="apple-num">{score}</strong>
                      <span className="apple-scale">/100</span>
                    </div>
                  </div>
                  <span className="apple-grade-tag" style={{ color: scoreColor }}>
                    {currentProduct.grade}
                  </span>
                </div>
              </div>

              {/* NOVA & Verdict Box */}
              {currentProduct.verdict && (
                <div className="apple-verdict-box">
                  <div className="apple-verdict-pill-row">
                    <span className="apple-nova-badge">
                      NOVA {currentProduct.nova_group || 1}
                    </span>
                    <span className="apple-verdict-label">AI Health Verdict</span>
                  </div>
                  <p className="apple-verdict-quote">
                    "{currentProduct.verdict}"
                  </p>
                </div>
              )}

              {/* Clean 4-Metric Grid */}
              <div className="apple-metrics-grid">
                <div className="apple-metric-tile">
                  <span className="metric-tag">Calories</span>
                  <strong className="metric-figure">{currentProduct.nutrition?.cal}</strong>
                </div>
                <div className="apple-metric-tile highlight">
                  <span className="metric-tag">Protein</span>
                  <strong className="metric-figure text-green">{currentProduct.nutrition?.protein}</strong>
                </div>
                <div className="apple-metric-tile">
                  <span className="metric-tag">Sugar</span>
                  <strong className="metric-figure">{currentProduct.nutrition?.sugar}</strong>
                </div>
                <div className="apple-metric-tile">
                  <span className="metric-tag">Fat</span>
                  <strong className="metric-figure">{currentProduct.nutrition?.fat}</strong>
                </div>
              </div>

              {/* Positives & Negatives Minimal Summary */}
              {currentProduct.positives && currentProduct.positives.length > 0 && (
                <div className="apple-highlights-list">
                  {currentProduct.positives.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="apple-item-row positive">
                      <span className="apple-check-icon">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                  {currentProduct.negatives && currentProduct.negatives.slice(0, 1).map((item, idx) => (
                    <div key={idx} className="apple-item-row negative">
                      <span className="apple-alert-icon">!</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
