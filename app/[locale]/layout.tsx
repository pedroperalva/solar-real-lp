import { Voltaire, Passions_Conflict } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import "../globals.css";
import { routing } from "@/i18n/routing";
import LanguageSwitcher from "../components/languageSwitcher";

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
  title: "Solar Real - Leco Biagioni",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${voltaire.variable} ${passions.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale}>
          {children}
          <LanguageSwitcher />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
