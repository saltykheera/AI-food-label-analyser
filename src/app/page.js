'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LiveScannerDemo from '@/components/LiveScannerDemo';
import ApplePillars from '@/components/ApplePillars';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="apple-page-wrapper">
      <Header />
      <main>
        <Hero />
        <LiveScannerDemo />
        <ApplePillars />
      </main>
      <Footer />
    </div>
  );
}
