"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ScrollViewProvider } from "@/lib/hooks/useScreenScrollPosition";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <ScrollViewProvider>
      <Header />
      {children}
      <Footer />
    </ScrollViewProvider>
  );
}
