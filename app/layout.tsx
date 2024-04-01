import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helldivers.help — Helldivers 2 помощник: Вики & другое",
  description:
    "Helldiver.help — это сайт-помощник каждому Адскому Десантнику, который сражается за продвижение демократии, свободы и процветания по всей галактике.",
  openGraph: {
    url: "https://helldivers.help",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/documents/34ee463e-310b-4544-998d-0b632ac9e76b.png?token=taqbWFqaZ-I9IW7-QkB8RGd4EFSE6V_ggg7wlfQfSRo&height=630&width=1200&expires=33247965426",
        width: 1200,
        height: 630,
      },
      {
        url: "https://opengraph.b-cdn.net/production/documents/34ee463e-310b-4544-998d-0b632ac9e76b.png?token=taqbWFqaZ-I9IW7-QkB8RGd4EFSE6V_ggg7wlfQfSRo&height=1260&width=2400&expires=33247965426",
        width: 2400,
        height: 1260,
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
