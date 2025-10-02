import { Voltaire, Passions_Conflict } from "next/font/google";
import "./globals.css";

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
  title: "Meu site",
  description: "Exemplo com fontes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${voltaire.variable} ${passions.variable}`}>
      <body>{children}</body>
    </html>
  );
}
