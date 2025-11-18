import type { Metadata } from "next";
import localFont from "next/font/local"
import {Saira, Tenor_Sans} from "next/font/google"
import "./globals.css";


export const tenor = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tenor",
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
        className={`${avenirLtdPro.variable} ${saira.variable} ${tenor.variable} font-sans  antialiased bg-white`}
      >
        {children}
        
      </body>
    </html>
  );
}
