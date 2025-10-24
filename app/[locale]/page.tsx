"use client";

import { useState, useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { FaInstagram } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { ConfigContext } from "../context/ConfigContext";

export default function Home() {
  const t = useTranslations();

  const config = useContext(ConfigContext);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

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

  // EmailJS send handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Basic validation
    if (!name || !email || !eventType) {
      setStatusMsg(t("form.status.missingFields"));
      return;
    }

    setSending(true);
    setStatusMsg(null);

    try {
      const SERVICE_ID =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const TEMPLATE_ID =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const PUBLIC_KEY =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      console.log("EmailJS result", result);
      setStatusMsg(t("form.status.success"));

      // reset form
      setName("");
      setEmail("");
      setPhone("");
      setEventType("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatusMsg(t("form.status.error"));
    } finally {
      setSending(false);
    }
  };

  const cards = [
    t("packages.items.assessoria.title"),
    t("packages.items.local.title"),
    t("packages.items.buffet.title"),
    t("packages.items.bar.title"),
    t("packages.items.decor.title"),
    t("packages.items.dj.title"),
  ];

  return (
    <main className="w-full min-h-screen flex flex-col">
      {/* HERO */}
      <section id="hero">
        <div className="hero-img-wrap">
          <img
            src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/LPs/Solar%20Real/bann.png`}
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
          {t("buffet.title")}
        </h1>
        <p>{t("buffet.subtitle")}</p>

        {/* Desktop Grid */}
        <div className="hidden sm:grid mx-auto max-w-[1048px] xl:grid-cols-4 sm:grid-cols-2 gap-4">
          {config?.imagesArray1.map((image: string, i: number) => (
            <div key={i} className="w-full">
              <img
                src={`${process.env.NEXT_PUBLIC_LIFE_URL}/${image}`}
                alt={`Imagem ${i + 1}`}
                className="w-full max-h-[165px] object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() =>
                  handleImgClick(`${process.env.NEXT_PUBLIC_LIFE_URL}/${image}`)
                }
              />
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden w-full max-w-[520px]">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {config?.imagesArray1.map((image: string, i: number) => (
              <SwiperSlide key={i}>
                <img
                  src={`${process.env.NEXT_PUBLIC_LIFE_URL}/${image}`}
                  alt={`Imagem ${i + 1}`}
                  className="w-full h-[300px] object-cover rounded-lg cursor-pointer"
                  onClick={() =>
                    handleImgClick(
                      `${process.env.NEXT_PUBLIC_LIFE_URL}/${image}`
                    )
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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
                  src={`${process.env.NEXT_PUBLIC_LIFE_URL}/IMG_4191.mp4`}
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
            {cards.map((cardNames, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex justify-center items-center"
              >
                <h3 className="font-semibold text-lg text-gray-700 mb-2">
                  {cardNames}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center px-6 md:mt-0 mt-16">
        <h1 className="font-passions-conflict text-6xl text-[#576250] mb-2">
          {t("event.title")}
        </h1>
        <p className="text-gray-500 text-lg mb-10 text-center">
          {t("event.subtitle")}
        </p>

        <div className="max-w-[1048px] w-full bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full flex justify-center">
            <img
              src={`${process.env.NEXT_PUBLIC_LIFE_URL}/Casamento-Daiana-e-Lucas_1051-scaled.jpg`}
              alt="Casamento no Solar Real"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-center p-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              {t("event.card.title")}
            </h2>
            <span className="text-sm text-gray-500 mb-4">
              {t("event.card.place")}
            </span>
            <p className="text-gray-600 mb-4">{t("event.card.paragraph1")}</p>
            <p className="text-gray-600 mb-4">{t("event.card.paragraph2")}</p>
            <p className="text-gray-600 font-semibold">
              {t("event.card.paragraph3")}
            </p>
            <p className="text-gray-600">{t("event.card.paragraph4")}</p>
          </div>
        </div>
      </section>

      <section
        className="w-full bg-no-repeat bg-center bg-cover mt-12 px-8 min-h-[675px] flex flex-col justify-center items-center"
        style={{ backgroundImage: 'url("/vector.png")' }}
      >
        <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-6 max-w-[1048px] w-full">
          {config?.imagesArray2.map((image: string, i: number) => (
            <div
              key={i}
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_LIFE_URL}/${image}`}
                alt={`Imagem ${i}`}
                className="w-full h-auto max-h-[250px] object-cover rounded-lg shadow-md hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out"
                onClick={() =>
                  handleImgClick(`${process.env.NEXT_PUBLIC_LIFE_URL}/${image}`)
                }
              />
            </div>
          ))}
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
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            <input
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder={t("form.fields.name")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3923]"
            />
            <input
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder={t("form.fields.email")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3923]"
            />
            <input
              name="user_phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder={t("form.fields.phone")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3923]"
            />
            <select
              name="event_type"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
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
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("form.fields.message")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3923] resize-none"
            />

            <button
              type="submit"
              disabled={sending}
              className="mt-6 w-full rounded-md bg-[#576250] px-4 py-2 text-white font-medium hover:bg-[#4a5344] transition cursor-pointer disabled:opacity-50"
            >
              {sending ? "Enviando..." : t("form.button")}
            </button>

            {statusMsg && (
              <p className="text-sm text-center mt-2 text-gray-700">
                {statusMsg}
              </p>
            )}
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
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/logos/marca-1-cor-fundo-escuro.png`}
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
