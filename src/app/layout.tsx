
import type { Metadata } from "next";
import localFont from "next/font/local"
import {Saira, Tenor_Sans} from "next/font/google"
import "./globals.css";
import AppGate from "@/components/AppGate";
import { GoogleAnalytics } from "@next/third-parties/google";


export const tenor = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tenor-sans",
})

export const saira = Saira({
  subsets: ["latin"],
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900",
  ],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-saira-mono",
});
const avenirLtdPro = localFont({
   src: [
    {
      path: "../../public/fonts/AvenirLTProLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/AvenirLTProLightOblique.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/AvenirLTProBook.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/AvenirLTProBookOblique.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/AvenirLTProRoman.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/AvenirLTProOblique.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/AvenirLTProMedium.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/AvenirLTProMediumOblique.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/AvenirLTProHeavy.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/AvenirLTProHeavyOblique.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/AvenirLTProBlack.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/AvenirLTProBlackOblique.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-avenir-sans",
  display: "swap",
})


export const metadata: Metadata = {
  metadataBase: new URL("https://evrad7.dev"),

  title: {
    default: "Evrad7 – Développeur Fullstack",
    template: "%s | Evrad7",
  },

  description:
    "Portfolio de TSOATA Evrad Loïc, développeur fullstack spécialisé dans la conception de solutions numériques robustes, évolutives et sécurisées. J’accompagne les projets de la réflexion à la mise en production, avec un fort accent sur la qualité, la performance, la collaboration et l’impact métier.",

  authors: [
    {
      name: "TSOATA Evrad Loïc",
      url: "https://evrad7.dev",
    },
  ],

  openGraph: {
    title: "Evrad7 – Développeur Fullstack",
    description:
      "Découvrez le portfolio de TSOATA Evrad Loïc, développeur fullstack impliqué dans la conception de solutions numériques performantes, fiables et orientées utilisateurs.",
    url: "https://evrad7.dev",
    siteName: "Evrad7",
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Evrad7 – Développeur Fullstack",
    description:
      "Portfolio de TSOATA Evrad Loïc, développeur fullstack orienté qualité, performance et collaboration.",
  },

  robots: {
    index: true,
    follow: true,
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${avenirLtdPro.variable} ${saira.variable} ${tenor.variable} font-sans  antialiased bg-white`}
      >
        <AppGate>{children}</AppGate>
      </body>
      <GoogleAnalytics gaId = {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!}/>
    </html>
  );
}
