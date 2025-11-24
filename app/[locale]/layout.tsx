import { Voltaire, Passions_Conflict } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import "../globals.css";
import { routing } from "@/i18n/routing";
import LanguageSwitcher from "../components/languageSwitcher";
import { getLandingData } from "../utils/getLandingData";
import React from "react";
import { ConfigProvider } from "../context/ConfigContext";

const voltaire = Voltaire({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-voltaire",
});

const passions = Passions_Conflict({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-passions",
});

export const metadata = {
  title: "Leco Biagioni - Landing Page",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const { locale } = resolvedParams;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const { messages, config } = await getLandingData(locale);

  const childrenWithProps = (
    <ConfigProvider value={config}>{children}</ConfigProvider>
  );

  return (
    <html lang={locale} className={`${voltaire.variable} ${passions.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {childrenWithProps}
          <LanguageSwitcher />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
