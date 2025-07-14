import { Poppins } from "next/font/google";
import React from "react";
import "./globals.css";
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

export default function RootLayout({ children }:{children:React.ReactNode}) {
  return (
      <html lang="en">
      <head>
        <title>True-Tech Digital Web Services - Making Web Design Accessible To All</title>
        <meta name="title" content="True-Tech Digital Web Services - Making Web Design Accessible To All" />
        <meta property="og:title" content="True-Tech Digital Services - Making Web Design Accessible To All" />
        <meta property="og:description" content="True-Tech provides full-stack website design, hosting, and search engine optimization (SEO) services to grow businesses of all sizes." />
        <meta name="description" content="True-Tech provides full-stack website design, hosting, and search engine optimization (SEO) services to grow businesses of all sizes." />
      </head>
      <body className={`${poppins.className} antialiased`}>
      {children}
      </body>
      </html>
  );
}
