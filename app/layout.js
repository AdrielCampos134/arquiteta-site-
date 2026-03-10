import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata = {
  title: "Ana Costa | Arquiteta",
  description: "Portfolio minimalista de Ana Costa, arquiteta em Sao Paulo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-offwhite text-gray-dark`}>
        <div className="relative min-h-screen bg-texture">
          <Navigation />
          <main className="mx-auto w-full max-w-7xl px-5 pb-10 pt-24 sm:px-8 lg:px-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
