import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: "400",
  variable: "--font-inter-sans"
});



export const metadata: Metadata = {
  title: "Evrad7",
  description: "Portofolio d'un développeur full stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
