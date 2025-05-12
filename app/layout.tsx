import type { Metadata } from "next";
import { Inter } from "next/font/google";
// styling
import "slick-carousel/slick/slick.css";
import "./globals.css";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Interior",
  description: "Interior Designs and Plans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-primary text-tertiary overflow-x-hidden ${inter.className}`}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
