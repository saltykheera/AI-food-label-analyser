'use client';

import { useEffect } from 'react';

export default function QrModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="qr-modal active" role="dialog" aria-modal="true" style={{ display: 'flex' }}>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-card glass-panel text-center">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          &times;
        </button>
        <h3>Scan on Your Smartphone</h3>
        <p className="text-muted" style={{ marginBottom: '20px' }}>
          Point your camera to launch the Poshan Parakh AI scanner instantly with zero download.
        </p>

        {/* Crisp vector QR code */}
        <div className="qr-code-box">
          <svg className="qr-svg" viewBox="0 0 100 100" width="180" height="180">
            <rect width="100" height="100" fill="#ffffff" rx="10" />
            <rect x="10" y="10" width="24" height="24" fill="#0B0F17" rx="3" />
            <rect x="14" y="14" width="16" height="16" fill="#ffffff" />
            <rect x="18" y="18" width="8" height="8" fill="#10B981" />

            <rect x="66" y="10" width="24" height="24" fill="#0B0F17" rx="3" />
            <rect x="70" y="14" width="16" height="16" fill="#ffffff" />
            <rect x="74" y="18" width="8" height="8" fill="#10B981" />

            <rect x="10" y="66" width="24" height="24" fill="#0B0F17" rx="3" />
            <rect x="14" y="70" width="16" height="16" fill="#ffffff" />
            <rect x="18" y="74" width="8" height="8" fill="#10B981" />

            <rect x="42" y="12" width="6" height="6" fill="#0B0F17" />
            <rect x="52" y="12" width="6" height="6" fill="#0B0F17" />
            <rect x="42" y="24" width="6" height="6" fill="#0B0F17" />
            <rect x="52" y="32" width="6" height="6" fill="#10B981" />
            <rect x="12" y="44" width="6" height="6" fill="#0B0F17" />
            <rect x="24" y="44" width="6" height="6" fill="#0B0F17" />
            <rect x="36" y="44" width="6" height="6" fill="#0B0F17" />
            <rect x="48" y="44" width="6" height="6" fill="#0B0F17" />
            <rect x="60" y="44" width="6" height="6" fill="#0B0F17" />
            <rect x="72" y="44" width="6" height="6" fill="#0B0F17" />
            <rect x="84" y="44" width="6" height="6" fill="#0B0F17" />
            <rect x="42" y="56" width="6" height="6" fill="#0B0F17" />
            <rect x="54" y="56" width="6" height="6" fill="#0B0F17" />
            <rect x="66" y="56" width="6" height="6" fill="#10B981" />
            <rect x="42" y="68" width="6" height="6" fill="#0B0F17" />
            <rect x="54" y="78" width="6" height="6" fill="#0B0F17" />
            <rect x="66" y="68" width="6" height="6" fill="#0B0F17" />
            <rect x="78" y="78" width="6" height="6" fill="#0B0F17" />
            <rect x="88" y="68" width="6" height="6" fill="#10B981" />
          </svg>
        </div>

        <p style={{ marginTop: '15px', fontSize: '0.85rem', color: '#10B981' }}>
          Scan with your iPhone or Android Camera
        </p>
      </div>
    </div>
  );
}
