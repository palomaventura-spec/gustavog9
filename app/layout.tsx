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
  title: "Gustavo Aguiar G9 | Player Profile",
  description:
    "Perfil esportivo de Gustavo Aguiar, atacante no campo e pivô no futsal, com trajetória, estatísticas, conquistas e vídeos.",
  applicationName: "Gustavo Aguiar • G9",
  keywords: [
    "Gustavo Aguiar",
    "G9",
    "Player Profile",
    "Botafogo",
    "Arouca",
    "futebol",
    "futsal",
    "atacante",
    "pivô",
  ],
  authors: [
    {
      name: "Gustavo Aguiar • G9",
    },
  ],
  creator: "Gustavo Aguiar • G9",
  openGraph: {
    title: "Gustavo Aguiar G9 | Player Profile",
    description:
      "Perfil esportivo de Gustavo Aguiar, atacante no campo e pivô no futsal.",
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    siteName: "Gustavo Aguiar • G9",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Aguiar G9 | Player Profile",
    description:
      "Perfil esportivo de Gustavo Aguiar, atacante no campo e pivô no futsal.",
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
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen overflow-x-hidden bg-[#050608] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}