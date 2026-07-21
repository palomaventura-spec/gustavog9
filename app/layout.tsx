import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gustavoaguiarg9.online"),

  title: {
    default: "Gustavo Aguiar G9 | Jovem Atleta do Botafogo",
    template: "%s | Gustavo Aguiar G9",
  },

  description:
    "Site oficial de Gustavo Aguiar (G9), jovem atleta luso-brasileiro nascido em 2018. Atacante no futebol e pivô no futsal, com trajetória, estatísticas, conquistas e vídeos.",

  applicationName: "Gustavo Aguiar • G9",

  keywords: [
    "Gustavo Aguiar",
    "Gustavo Aguiar G9",
    "G9",
    "Botafogo",
    "Botafogo futebol",
    "Botafogo futsal",
    "Arouca futsal",
    "jovem atleta",
    "atleta nascido em 2018",
    "futebol de base",
    "futsal de base",
    "atacante",
    "pivô",
    "player profile",
    "football player",
    "youth football",
  ],

  authors: [
    {
      name: "Gustavo Aguiar • G9",
      url: "https://gustavoaguiarg9.online",
    },
  ],

  creator: "Gustavo Aguiar • G9",
  publisher: "Gustavo Aguiar • G9",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Gustavo Aguiar G9 | Jovem Atleta do Botafogo",
    description:
      "Conheça a trajetória, as estatísticas, as conquistas e os melhores vídeos de Gustavo Aguiar, atacante no futebol e pivô no futsal.",
    url: "https://gustavoaguiarg9.online",
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    siteName: "Gustavo Aguiar • G9",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gustavo Aguiar G9 — Jovem atleta do Botafogo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gustavo Aguiar G9 | Jovem Atleta do Botafogo",
    description:
      "Trajetória, estatísticas, conquistas e vídeos de Gustavo Aguiar no futebol e no futsal.",
    images: ["/images/og-image.jpg"],
  },

  category: "sports",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050608",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen overflow-x-hidden bg-[#050608] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}