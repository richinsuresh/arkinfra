import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChakraProviders from "@/providers/ChakraProviders";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Firm — Premium Real Estate",
  description: "Curated apartments, villas, and commercial spaces",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProviders>
          <Navbar />
          {children}
          <Footer />
        </ChakraProviders>
      </body>
    </html>
  );
}
