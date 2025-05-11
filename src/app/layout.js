import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SWingRope | Innovative Rope-Based Wind Energy Solution",
  description: "SWingRope delivers a revolutionary approach to wind energy with our rope-based technology. Efficient, elegant, and environmentally friendly.",
  keywords: "wind energy, renewable energy, rope-based technology, clean energy, sustainable energy, green technology",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "SWingRope | Innovative Wind Energy",
    description: "Revolutionary rope-based wind energy technology that's efficient, elegant, and environmentally friendly.",
    type: "website",
    locale: "en_US",
    siteName: "SWingRope",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Cookie consent banner can be added here */}
        {children}
      </body>
    </html>
  );
}
