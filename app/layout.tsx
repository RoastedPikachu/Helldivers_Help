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
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Helldivers.help: Сайт-помощник Адским Десантникам и борцам за демократию"
        />
        <meta
          property="og:description"
          content="Полный справочник по всем планетам, вооружению, снаряжению, противникам и многому другому, что может встретить на пути Адский Десантник"
        />
        <meta property="og:image" content="/static/OpenGraphImage.png" />
        <meta property="og:url" content="https://helldivers.help" />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
