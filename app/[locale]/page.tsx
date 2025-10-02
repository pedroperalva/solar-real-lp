"use client";

import { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);

  const handleImgClick = (src: string) => {
    setModalImg(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  const scrollToForm = () => {
    const formSection = document.getElementById("form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cards = [
    {
      title: t("packages.items.assessoria.title"),
      description: t("packages.items.assessoria.description"),
    },
    {
      title: t("packages.items.local.title"),
      description: t("packages.items.local.description"),
    },
    {
      title: t("packages.items.buffet.title"),
      description: t("packages.items.buffet.description"),
    },
    {
      title: t("packages.items.bar.title"),
      description: t("packages.items.bar.description"),
    },
    {
      title: t("packages.items.decor.title"),
      description: t("packages.items.decor.description"),
    },
    {
      title: t("packages.items.dj.title"),
      description: t("packages.items.dj.description"),
    },
  ];

  return (
    <main className="w-full min-h-screen flex flex-col">
      {/* HERO */}
      <section id="hero">
        <div className="hero-img-wrap">
          <img
            src="https://hzksjbnudhswgqmccfnu.supabase.co/storage/v1/object/public/imagens-site-leco/LPs/Solar%20Real/bann.png"
            alt="hero banner"
          />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center z-20 w-full px-8">
          <h1 className="font-passions-conflict text-white lg:text-9xl md:text-8xl text-7xl my-4">
            {t("hero.title")}
          </h1>
          <p className="text-white md:text-xl">{t("hero.subtitle")}</p>
        </div>
      </section>

      {/* BUFFET & DECOR */}
      <section className="flex flex-col items-center justify-center text-center gap-4 px-8">
        <h1 className="text-6xl font-passions-conflict text-[#576250]">
          {t("buffetDecor.title")}
        </h1>
        <p>{t("buffetDecor.subtitle")}</p>
        {/* aqui continuam suas imagens (sem tradução) */}
      </section>

      {/* QUEM SOMOS */}
      <section className="flex flex-col px-8 mt-16">
        <div className="w-full max-w-[1048px] mx-auto">
          <h1 className="text-gray-500 text-xl mb-4 text-center md:text-start">
            {t("about.title")}
          </h1>
          <div className="w-full bg-white rounded-lg md:shadow-md grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Vídeo */}
            <div className="w-full flex justify-center md:justify-start">
              <video
                className="w-full max-h-[400px] md:max-h-[450px] object-cover rounded-lg"
                controls
                preload="auto"
              >
                <source
                  src="https://lifecampogrande.com.br/testes/wp-content/uploads/2025/08/IMG_4191.mp4"
                  type="video/mp4"
                />
                Seu navegador não suporta vídeo.
              </video>
            </div>

            {/* Texto */}
            <div className="flex flex-col col-span-2 md:p-6">
              <h2 className="text-6xl font-passions-conflict mb-2 text-[#576250]">
                {t("about.name")}
              </h2>
              <span className="text-sm text-gray-500 mb-4">
                {t("about.role")}
              </span>
              <p className="text-gray-500 mb-4 text-xl">
                {t("about.description")}
              </p>
              <button
                onClick={scrollToForm}
                className="self-center md:self-end mt-auto bg-[#576250] text-white px-5 py-2 rounded hover:bg-[#4a5344] transition cursor-pointer"
              >
                {t("about.cta")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PACOTES */}
      <section
        className="w-full bg-no-repeat bg-center bg-cover mt-12 px-8 min-h-[675px] flex flex-col justify-center items-center"
        style={{ backgroundImage: 'url("/vector.png")' }}
      >
        <div className="max-w-[1048px] mx-auto text-center sm:text-left mt-12">
          <h2 className="text-3xl font-bold text-[#576250] mb-2">
            {t("packages.title")}
          </h2>
          <p className="text-gray-500 mb-10">{t("packages.subtitle")}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="font-semibold text-lg text-gray-700 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-500">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section className="w-full flex justify-center px-8 my-16">
        <div className="max-w-[700px]">
          <div className="mx-auto my-10 p-2 md:p-6 border border-[#9ca18d] rounded-xl text-center flex flex-col justify-center">
            <p className="text-3xl font-semibold text-[#576250] mb-2">
              {t("investment.title")}
            </p>
            <p className="text-3xl font-semibold text-[#576250] mb-4">
              {t("investment.price")}
            </p>
          </div>
          <p className="md:text-2xl text-gray-500 leading-relaxed text-center">
            {t("investment.note")}
          </p>
        </div>
      </section>

      {/* FORM */}
      <section
        id="form"
        className="w-full mx-auto mb-16 px-8 flex justify-center"
      >
        <div className="max-w-[700px]">
          <h2 className="text-center text-2xl font-semibold text-gray-700 mb-3">
            {t("form.title")}
          </h2>
          <p className="text-center text-sm text-gray-500 leading-relaxed mb-8">
            {t("form.subtitle")}
          </p>

          <h3 className="text-center font-medium text-base mb-3">
            {t("form.contact")}
          </h3>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder={t("form.fields.name")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3923]"
            />
            <input
              type="email"
              placeholder={t("form.fields.email")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3923]"
            />
            <input
              type="tel"
              placeholder={t("form.fields.phone")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3923]"
            />
            <select
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3923]"
              defaultValue=""
              required
            >
              <option value="" disabled>
                {t("form.fields.event")}
              </option>
              <option value="Casamento">{t("form.fields.wedding")}</option>
              <option value="Bodas">{t("form.fields.anniversary")}</option>
              <option value="Batizado">{t("form.fields.baptism")}</option>
            </select>

            <textarea
              rows={4}
              placeholder={t("form.fields.message")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3923] resize-none"
            />

            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-[#576250] px-4 py-2 text-white font-medium hover:bg-[#4a5344] transition cursor-pointer"
            >
              {t("form.button")}
            </button>
          </form>
        </div>
      </section>

      {/* MODAL */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.8)]"
          onClick={closeModal}
        >
          <img
            src={modalImg ?? ""}
            alt="Imagem ampliada"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg border-4 border-white"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold rounded-full w-10 h-10 flex items-center justify-center transition cursor-pointer"
            onClick={closeModal}
            aria-label="Fechar"
          >
            ×
          </button>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#424242] min-h-[170px] w-full flex flex-col lg:flex-row items-center justify-around gap-4 px-12 py-6">
        <img
          src="https://hzksjbnudhswgqmccfnu.supabase.co/storage/v1/object/public/imagens-site-leco/logos/marca-1-cor-fundo-escuro.png"
          alt="logo"
          className="w-[300px]"
        />
        <p className="text-gray-400">{t("footer.rights")}</p>
        <a
          className="text-gray-400 hover:underline"
          href="https://www.lecobiagioni.com"
          target="_blank"
        >
          www.lecobiagioni.com
        </a>
        <a href="https://www.instagram.com/lecobiagioni/" target="_blank">
          <FaInstagram className="text-gray-400 text-xl cursor-pointer" />
        </a>
      </footer>
    </main>
  );
}
