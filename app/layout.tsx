import { Poppins } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";
import React from "react";
const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
  adjustFontFallback: true,
  preload: true,
  display: "swap",
  style: "normal",
  variable: "--font-poppins",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

export const metadata = {
  title: "True tech services",
  description:
    "True tech services, bringing you development at your fingertips",
};

export default function RootLayout({ children }:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
            <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
