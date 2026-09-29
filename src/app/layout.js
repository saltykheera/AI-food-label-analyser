import './globals.css';

export const metadata = {
  metadataBase: new URL('https://poshanparakh.ai'),
  title: 'Poshan Parakh — Decode what you eat. Instantly.',
  description: 'Minimalist food label scanner powered by Vision AI. Instant nutrition facts, NOVA classification, and allergen alerts with zero clutter.',
  openGraph: {
    title: 'Poshan Parakh — Decode what you eat. Instantly.',
    description: 'Instant nutrition facts, NOVA classification, and allergen alerts with Vision AI.',
    images: ['/assets/hero-food-scan.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
