import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://helldivers.help"),
  title: "Helldivers.help — Helldivers 2 помощник: Вики & другое",
  description:
    "Helldiver.help — это сайт-помощник каждому Адскому Десантнику, который сражается за продвижение демократии, свободы и процветания по всей галактике.",
  openGraph: {
    url: "https://helldivers.help",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/documents/b6abc398-b62a-4ca3-be93-ed8964096447.png?token=Xx2BnhRVlWJOvfcF69nnqP-PeXQrmZ0KB-L7_XAoMSM&height=630&width=1200&expires=33247969668",
        width: 1200,
        height: 630,
      },
      {
        url: "https://opengraph.b-cdn.net/production/documents/b6abc398-b62a-4ca3-be93-ed8964096447.png?token=Xx2BnhRVlWJOvfcF69nnqP-PeXQrmZ0KB-L7_XAoMSM&height=1260&width=2400&expires=33247969668",
        width: 2400,
        height: 1260,
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helldivers.help — Helldivers 2 помощник: Вики & другое",
    description:
      "Helldiver.help — это сайт-помощник каждому Адскому Десантнику, который сражается за продвижение демократии, свободы и процветания по всей галактике.",
    images: {
      url: "https://opengraph.b-cdn.net/production/documents/b6abc398-b62a-4ca3-be93-ed8964096447.png?token=Xx2BnhRVlWJOvfcF69nnqP-PeXQrmZ0KB-L7_XAoMSM&height=630&width=1200&expires=33247969668",
    },
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
