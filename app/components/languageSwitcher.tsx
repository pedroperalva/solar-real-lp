"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.startsWith("/en") ? "en" : "pt";
  const [locale, setLocale] = useState(currentLocale);

  useEffect(() => {
    setLocale(currentLocale);
  }, [pathname]);

  const toggleLocale = () => {
    const newLocale = locale === "pt" ? "en" : "pt";
    setLocale(newLocale);

    const newPath = pathname.replace(/^\/(pt|en)/, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLocale}
      className="fixed bottom-5 right-5 w-14 h-14 rounded-full shadow-lg flex items-center justify-center border border-gray-200 bg-white hover:scale-110 transition-transform cursor-pointer z-30"
    >
      <img
        src={
          locale === "pt"
            ? "http://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg"
            : "http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
        }
        alt={locale === "pt" ? "BR Flag" : "US Flag"}
        className="w-8 h-8"
      />
    </button>
  );
}
