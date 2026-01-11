import type { Metadata } from "next";
import { Nunito, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit"
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito"
});

export const metadata: Metadata = {
  title: "Puberty Awareness - Learning App",
  description: "Puberty Buddy learning experience."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${nunito.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
