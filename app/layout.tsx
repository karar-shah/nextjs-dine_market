import "./globals.css";
import { Sora } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import React from "react";

const inter = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Dine Market",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
