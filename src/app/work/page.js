'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { analyzeFoodLabel } from '@/utils/analyzerPresets';

export default function WorkPage() {
  const [currentResult, setCurrentResult] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [scanStep, setScanStep] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);

  const cameraInputRef = useRef(null);
  const fileInputRef = useRef(null);

  // Audio feedback
  const playSound = (type = 'success') => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'success') {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
        osc.start();
        osc.stop(ctx.currentTime + 0.22);
      }
    } catch {
      // Audio optional
    }
  };

  const processImageFile = async (file) => {
    if (!file) return;

    setIsAnalyzing(true);
    setScanStep('Analyzing label...');

    // Preview
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);

    try {
      const res = await analyzeFoodLabel(file);
      setCurrentResult(res);
      playSound('success');
      setIsAnalyzing(false);
    } catch (err) {
      setIsAnalyzing(false);
      console.error(err);
    }
  };

  const resetScan = () => {
    setCurrentResult(null);
    setImagePreview(null);
    if (cameraInputRef.current) cameraInputRef.current.value = '';
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const score = currentResult?.health_score ?? 96;
  const scoreColor = score >= 80 ? '#34c759' : score >= 50 ? '#ff9f0a' : '#ff3b30';
  const circumference = 2 * Math.PI * 44;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="work-light-wrapper">
      {/* Hidden file inputs */}
      <input
        type="file"
        ref={cameraInputRef}
        accept="image/*"
        capture="environment"
        className="sr-only-input"
        onChange={(e) => e.target.files?.[0] && processImageFile(e.target.files[0])}
      />
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="sr-only-input"
        onChange={(e) => e.target.files?.[0] && processImageFile(e.target.files[0])}
      />

      {/* Minimal Apple Light Header */}
      <header className="work-light-header">
        <div className="work-light-header-inner">
          <Link href="/" className="work-light-back">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Home</span>
          </Link>

          <span className="work-light-title">proshanprakhar</span>

          {currentResult ? (
            <button type="button" onClick={resetScan} className="work-light-action-link">
              New Scan
            </button>
          ) : (
            <div style={{ width: 48 }}></div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="work-light-main">
        {/* Upload State (When No Result Yet) */}
        {!currentResult && !isAnalyzing && (
          <div className="work-light-upload-card">
            <div className="work-light-upload-icon-box">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>

            <h1 className="work-light-heading">Scan Food Label</h1>
            <p className="work-light-sub">Take a photo of any nutrition label to get instant health analysis.</p>

            <div className="work-light-btn-group">
              <button
                type="button"
                className="work-btn-camera"
                onClick={() => cameraInputRef.current?.click()}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
                <span>Take Photo</span>
              </button>

              <button
                type="button"
                className="work-btn-photo"
                onClick={() => fileInputRef.current?.click()}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <span>Choose Photo</span>
              </button>
            </div>

            {/* Subtle Drop Target */}
            <div
              className={`work-light-dropzone ${isDragOver ? 'drag-over' : ''}`}
              onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragOver(false);
                if (e.dataTransfer.files?.[0]) processImageFile(e.dataTransfer.files[0]);
              }}
              onClick={() => fileInputRef.current?.click()}
            >
              <span>or drag and drop photo here</span>
            </div>
          </div>
        )}

        {/* Loading State */}
        {isAnalyzing && (
          <div className="work-light-loading-card">
            <div className="apple-loader-ring"></div>
            <p className="work-loading-text">{scanStep}</p>
          </div>
        )}

        {/* Results State: Clean, Minimal, Light Mode */}
        {currentResult && !isAnalyzing && (
          <div className="work-light-result-card">
            {/* Health Score Circular Gauge */}
            <div className="work-result-hero">
              <div className="work-score-ring-wrap">
                <svg className="work-score-svg" viewBox="0 0 100 100">
                  <circle className="work-track" cx="50" cy="50" r="44" />
                  <circle
                    className="work-progress"
                    cx="50"
                    cy="50"
                    r="44"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ stroke: scoreColor }}
                  />
                </svg>
                <div className="work-score-center">
                  <strong className="work-score-val">{score}</strong>
                  <span className="work-score-grade" style={{ color: scoreColor }}>
                    Grade {currentResult.health_grade || 'A'}
                  </span>
                </div>
              </div>

              <div className="work-product-info">
                <h2 className="work-product-title">{currentResult.product_name}</h2>
                <p className="work-product-brand">
                  {currentResult.brand} • {currentResult.category}
                </p>
                <div className="work-nova-tag">
                  <strong>NOVA {currentResult.nova_group || 1}</strong>
                  <span>{currentResult.nova_label || 'Unprocessed'}</span>
                </div>
              </div>
            </div>

            {/* Verdict (Single clean sentence) */}
            {currentResult.verdict && (
              <div className="work-light-verdict">
                <p>"{currentResult.verdict}"</p>
              </div>
            )}

            {/* Allergen Warning Pill (If any) */}
            {currentResult.allergen_warnings && currentResult.allergen_warnings.length > 0 && (
              <div className="work-light-allergen-pill">
                <span>⚠️ {currentResult.allergen_warnings.join(' • ')}</span>
              </div>
            )}

            {/* 4 Clean Key Nutrition Tiles */}
            {currentResult.nutritional_highlights && (
              <div className="work-light-macro-grid">
                <div className="work-macro-card">
                  <span className="macro-label">Calories</span>
                  <strong className="macro-num">{currentResult.nutritional_highlights.calories || '—'}</strong>
                </div>
                <div className="work-macro-card highlight">
                  <span className="macro-label">Protein</span>
                  <strong className="macro-num text-green">{currentResult.nutritional_highlights.protein || '—'}</strong>
                </div>
                <div className="work-macro-card">
                  <span className="macro-label">Sugar</span>
                  <strong className="macro-num">{currentResult.nutritional_highlights.sugar || '—'}</strong>
                </div>
                <div className="work-macro-card">
                  <span className="macro-label">Fat</span>
                  <strong className="macro-num">{currentResult.nutritional_highlights.fat || '—'}</strong>
                </div>
              </div>
            )}

            {/* Key Positive Highlight */}
            {currentResult.positives && currentResult.positives[0] && (
              <div className="work-light-benefit">
                <span className="benefit-check">✓</span>
                <span>{currentResult.positives[0]}</span>
              </div>
            )}

            {/* Action Button */}
            <div className="work-light-actions">
              <button
                type="button"
                className="work-btn-primary"
                onClick={() => cameraInputRef.current?.click()}
              >
                Scan Another Label
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
