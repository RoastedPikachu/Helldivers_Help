import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helldivers.help — Helldivers 2 помощник: Вики & другое",
  description:
    "Helldiver.help — это сайт-помощник каждому Адскому Десантнику, который сражается за продвижение демократии, свободы и процветания по всей галактике.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
          <!-- Facebook Meta Tags -->
          <meta property="og:url" content="https://helldivers.help"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Helldivers.help — Helldivers 2 помощник: Вики & другое"/>
          <meta property="og:description" content="Helldiver.help — это сайт-помощник каждому Адскому Десантнику, который сражается за продвижение демократии, свободы и процветания по всей галактике."/>
          <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/34ee463e-310b-4544-998d-0b632ac9e76b.png?token=taqbWFqaZ-I9IW7-QkB8RGd4EFSE6V_ggg7wlfQfSRo&height=630&width=1200&expires=33247965426"/>

          <!-- Twitter Meta Tags -->
          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="twitter:domain" content="helldivers-help.vercel.app"/>
          <meta property="twitter:url" content="https://helldivers-help.vercel.app"/>
          <meta name="twitter:title" content="Helldivers.help — Helldivers 2 помощник: Вики & другое"/>
          <meta name="twitter:description" content="Helldiver.help — это сайт-помощник каждому Адскому Десантнику, который сражается за продвижение демократии, свободы и процветания по всей галактике."/>
          <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/34ee463e-310b-4544-998d-0b632ac9e76b.png?token=taqbWFqaZ-I9IW7-QkB8RGd4EFSE6V_ggg7wlfQfSRo&height=630&width=1200&expires=33247965426"/>
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
