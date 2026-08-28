import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andrzej Maślankiewicz — Psycholog & Psychoterapeuta Poznań",
  description: "Profesjonalny gabinet psychoterapeutyczny w centrum Poznania. Konsultacje psychologiczne, psychoterapia indywidualna, wsparcie w kryzysie, lękach i depresji.",
  keywords: "psycholog Poznań, psychoterapeuta Poznań, psychoterapia Poznań, terapia CBT Poznań, pomoc psychologiczna Poznań, gabinet psychologiczny",
  authors: [{ name: "Andrzej Maślankiewicz" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-cream-950 bg-cream-50">
        {children}
      </body>
    </html>
  );
}
