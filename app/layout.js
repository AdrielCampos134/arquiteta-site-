import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "Ana Costa | Arquiteta",
  description: "Portfolio minimalista de Ana Costa, arquiteta em Sao Paulo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${manrope.variable} ${cormorant.variable} antialiased bg-offwhite text-gray-dark`}>
        <div className="relative min-h-screen bg-texture">
          <Navigation />
          <main className="mx-auto w-full max-w-7xl px-4 pb-10 pt-20 sm:px-8 sm:pt-24 lg:px-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
