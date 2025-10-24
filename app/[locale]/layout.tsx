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
  params: { locale: string };
}) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Carrega mensagens e config da LP
  const { messages, config } = getLandingData(locale);

  // Provide config via React Context so client components can consume it safely
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
