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
    "Site oficial de Gustavo Aguiar (G9), jovem atleta luso-brasileiro. Conheça sua trajetória, estatísticas, vídeos e conquistas no futebol e futsal.",

  applicationName: "Gustavo Aguiar • G9",

  keywords: [
    "Gustavo Aguiar",
    "Gustavo Aguiar G9",
    "G9",
    "Botafogo",
    "Botafogo Futebol",
    "Botafogo Futsal",
    "Arouca",
    "Jovem Atleta",
    "Futebol",
    "Futsal",
    "Player Profile",
    "Football Player",
    "Youth Football",
    "Soccer",
    "Portugal",
    "Brasil",
  ],

  authors: [
    {
      name: "Paloma d'Aguiar",
      url: "https://gustavoaguiarg9.online",
    },
  ],

  creator: "Paloma d'Aguiar",

  publisher: "Gustavo Aguiar",

  category: "Sports",

  referrer: "origin-when-cross-origin",

  alternates: {
    canonical: "https://gustavoaguiarg9.online",

    languages: {
      "pt-BR": "https://gustavoaguiarg9.online",
      "en-US": "https://gustavoaguiarg9.online/en",
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",

    apple: [
      {
        url: "/apple-touch-icon.png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Gustavo Aguiar G9 | Jovem Atleta do Botafogo",

    description:
      "Conheça Gustavo Aguiar (G9), jovem atleta luso-brasileiro. Trajetória, estatísticas, vídeos e conquistas.",

    url: "https://gustavoaguiarg9.online",

    siteName: "Gustavo Aguiar G9",

    locale: "pt_BR",

    alternateLocale: ["en_US"],

    type: "website",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gustavo Aguiar G9",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Gustavo Aguiar G9",

    description:
      "Conheça Gustavo Aguiar (G9), jovem atleta do Botafogo.",

    images: ["/images/og-image.jpg"],
  },
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
    <html
      lang="pt-BR"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen overflow-x-hidden bg-[#050608] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}