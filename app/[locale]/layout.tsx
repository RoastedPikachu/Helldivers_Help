import type { Metadata } from "next";

import Script from "next/script";
import Head from "next/head";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

import { Inter } from "next/font/google";

import { locales } from "@/i18n";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  generator: "Next.js",
  manifest: "/manifest.json",
  metadataBase: new URL("https://helldivers.help"),
  openGraph: {
    url: "https://helldivers.help",
    images: [
      {
        url: "https://i.imgur.com/IKNpzmt.png",
        width: 1200,
        height: 630,
      },
      {
        url: "https://i.imgur.com/V9ngT26.png",
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
      url: "https://imgur.com/cda1931d-f4fd-44a4-8ce1-2d4810066ce8",
    },
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <Head>
        <link
          rel="icon"
          href="@/app/icon.png"
          type="image/png"
          sizes="512x512"
        />
        <link
          rel="apple-touch-icon"
          href="@/app/apple-touch-icon.png"
          sizes="180x180"
        />
      </Head>

      <body className={inter.className}>
        <Script src="/static/googleAnalytics/index.js" strategy="lazyOnload" />
        <Script src="/static/metric/index.js" strategy="lazyOnload" />

        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
