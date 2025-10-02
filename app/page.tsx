"use client";

import { useState } from "react";

import { FaInstagram } from "react-icons/fa6";

export default function Home() {
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
      title: "Assessoria & Cerimonial",
      description:
        "Profissionais experientes para garantir que tudo ocorra conforme o planejado.",
    },
    {
      title: "Local & Foto & Filmagem",
      description:
        "Solar Real com gerador, limpeza e segurança e profissionais para capturar cada momento mágico.",
    },
    {
      title: "Buffet & Doces",
      description:
        "Mesa de antepastos, coquetel volante e mini porções, além de doces para deliciar seus convidados e seu grande dia.",
    },
    {
      title: "Open Bar",
      description:
        "Drinks variados importados para refrescar esse momento único.",
    },
    {
      title: "Decoração Completa",
      description: "Transformamos o espaço no cenário dos seus sonhos.",
    },
    {
      title: "DJ & Estrutura de Som & Luz",
      description: "Músicas e iluminação perfeitas para animar a sua festa.",
    },
  ];

  return (
    <main className="w-full min-h-screen flex flex-col">
      <section id="hero">
        <div className="hero-img-wrap">
          <img
            src={
              "https://hzksjbnudhswgqmccfnu.supabase.co/storage/v1/object/public/imagens-site-leco/LPs/Solar%20Real/bann.png"
            }
            alt="hero banner"
          />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center z-20 w-full px-8">
          <h1 className="font-passions-conflict text-white lg:text-9xl md:text-8xl text-7xl my-4">
            Solar Real
          </h1>
          <p className="text-white md:text-xl">
            Descubra a magia do Solar Real, uma mansão colonial do século XIX
            que oferece vistas deslumbrantes do Rio de Janeiro.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center text-center gap-4 px-8">
        <h1 className="text-6xl font-passions-conflict text-[#576250]">
          Buffet & Decor
        </h1>
        <p>Que você se lembrará para sempre</p>
        <div className="mx-auto max-w-[1048px] grid xl:grid-cols-4 gap-4 grid-cols-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-full">
              <img
                src="https://hzksjbnudhswgqmccfnu.supabase.co/storage/v1/object/public/imagens-site-leco/portfolio/casamento-felipe-e-juan-alem-do-sonho/0714_0714-casamento-felipe-e-juan-alem-do-sonho-guaratiba-rj-13-10-2024.jpg"
                className="w-full h-auto max-w-full sm:max-w-[250px] object-cover rounded-lg mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                alt={`Imagem ${i + 1}`}
                onClick={() =>
                  handleImgClick(
                    "https://hzksjbnudhswgqmccfnu.supabase.co/storage/v1/object/public/imagens-site-leco/portfolio/casamento-felipe-e-juan-alem-do-sonho/0714_0714-casamento-felipe-e-juan-alem-do-sonho-guaratiba-rj-13-10-2024.jpg"
                  )
                }
              />
            </div>
          ))}
        </div>
      </section>
      {/* Seção Quem Somos */}
      <section className="flex flex-col px-8 mt-16">
        <div className="w-full max-w-[1048px] mx-auto">
          <h1 className="text-gray-500 text-xl mb-4 text-center md:text-start">
            Quem Somos
          </h1>
          <div className="w-full bg-white rounded-lg md:shadow-md grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Video */}
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
                Leco Biagioni
              </h2>
              <span className="text-sm text-gray-500 mb-4">
                Wedding Planner
              </span>
              <p className="text-gray-500 mb-4 text-xl">
                Nossa equipe de assessoria e cerimonial, liderada por Leco
                Biagioni, está aqui para transformar seu casamento em uma
                experiência única e inesquecível. Com anos de experiência e um
                olhar atento aos detalhes, garantimos que cada momento seja
                perfeito. Leco Biagioni trabalha com os melhores fornecedores do
                mercado, e os noivos contarão com sua assessoria do início ao
                fim.
              </p>
              <button
                onClick={scrollToForm}
                className="self-center md:self-end mt-auto bg-[#576250] text-white px-5 py-2 rounded hover:bg-[#4a5344] transition cursor-pointer"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Pacotes All-Inclusive */}
      <section
        className="w-full bg-no-repeat bg-center bg-cover mt-12 px-8 min-h-[675px] flex flex-col justify-center items-center"
        style={{ backgroundImage: 'url("/vector.png")' }}
      >
        <div className="max-w-[1048px] mx-auto text-center sm:text-left mt-12">
          <h2 className="text-3xl font-bold text-[#576250] mb-2">
            Pacotes All-Inclusive
          </h2>
          <p className="text-gray-500 mb-10">
            Nossa proposta inclui todos os pilares essenciais para um casamento
            de sucesso:
          </p>

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
      <section className="w-full flex flex-col items-center px-6 md:mt-0 mt-16">
        {/* Título */}
        <h1 className="font-passions-conflict text-6xl text-[#576250] mb-2">
          Solar Real
        </h1>
        <p className="text-gray-500 text-lg mb-10 text-center">
          Uma Mansão Colonial com Vistas Cinematográficas do Rio
        </p>

        {/* Card */}
        <div className="max-w-[1048px] w-full bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full flex justify-center">
            <img
              src="https://hzksjbnudhswgqmccfnu.supabase.co/storage/v1/object/public/imagens-site-leco/portfolio/casamento-felipe-e-juan-alem-do-sonho/0714_0714-casamento-felipe-e-juan-alem-do-sonho-guaratiba-rj-13-10-2024.jpg"
              alt="Casamento no Solar Real"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-center p-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              Vistas Cinematográficas
            </h2>
            <span className="text-sm text-gray-500 mb-4">Solar Real</span>
            <p className="text-gray-600 mb-4">
              Descubra a magia do Solar Real, uma mansão colonial do século XIX
              que oferece vistas deslumbrantes do Rio de Janeiro. Localizada em
              um dos bairros mais tradicionais da cidade, essa propriedade
              histórica é o local perfeito para realizar uma festa inesquecível.
            </p>
            <p className="text-gray-600 mb-4">
              As vistas do Rio de Janeiro a partir do Solar Real são
              verdadeiramente cinematográficas. Imagine-se cercado pela beleza
              natural da cidade, com a oportunidade de aproveitar ao máximo a
              sua festa.
            </p>
            <p className="text-gray-600 font-semibold">
              Uma Festa como se fosse na Sua Casa!
            </p>
            <p className="text-gray-600">
              Com sua arquitetura colonial e atmosfera acolhedora, o Solar Real
              permite que você e seus convidados se sintam em casa. É o local
              perfeito para realizar uma festa íntima e sofisticada, com todos
              os detalhes que você deseja.
            </p>
          </div>
        </div>
      </section>
      <section
        className="w-full bg-no-repeat bg-center bg-cover mt-12 px-8 min-h-[675px] flex flex-col justify-center items-center"
        style={{ backgroundImage: 'url("/vector.png")' }}
      >
        <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-6 max-w-[1048px] w-full">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src={`https://hzksjbnudhswgqmccfnu.supabase.co/storage/v1/object/public/imagens-site-leco/portfolio/casamento-felipe-e-juan-alem-do-sonho/0714_0714-casamento-felipe-e-juan-alem-do-sonho-guaratiba-rj-13-10-2024.jpg`}
                alt={`Imagem ${i}`}
                className="w-full h-auto max-h-[250px] object-cover rounded-lg shadow-md hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out"
                onClick={() =>
                  handleImgClick(
                    "https://hzksjbnudhswgqmccfnu.supabase.co/storage/v1/object/public/imagens-site-leco/portfolio/casamento-felipe-e-juan-alem-do-sonho/0714_0714-casamento-felipe-e-juan-alem-do-sonho-guaratiba-rj-13-10-2024.jpg"
                  )
                }
              />
            </div>
          ))}
        </div>
      </section>
      <section className="w-full flex justify-center px-8 my-16">
        <div className="max-w-[700px]">
          <div className="mx-auto my-10 p-2 md:p-6 border border-[#9ca18d] rounded-xl text-center flex flex-col justify-center">
            <p className="text-3xl font-semibold text-[#576250] mb-2">
              Investimento:
            </p>
            <p className="text-3xl font-semibold text-[#576250] mb-4">
              À partir de R$ 180.000,00*
            </p>
          </div>
          <p className="md:text-2xl text-gray-500 leading-relaxed text-center">
            *Este valor é baseado em 100 convidados e pode sofrer alteração para
            mais ou para menos dependendo da personalização que será feita para
            cada casal.
          </p>
        </div>
      </section>
      <section
        id="form"
        className="w-full mx-auto mb-16 px-8 flex justify-center"
      >
        {/* Título */}
        <div className="max-w-[700px]">
          <h2 className="text-center text-2xl font-semibold text-gray-700 mb-3">
            Nós cuidamos de todos os detalhes
          </h2>
          <p className="text-center text-sm text-gray-500 leading-relaxed mb-8">
            Deixe que a nossa equipe de especialistas cuide de todos os detalhes
            para que você possa aproveitar cada momento ao lado dos seus amigos
            e familiares. Entre em contato conosco e vamos começar a planejar o
            casamento dos seus sonhos!
          </p>

          {/* Informações de Contato */}
          <h3 className="text-center font-medium text-base mb-3">
            Informações de Contato
          </h3>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Nome"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3923]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3923]"
            />
            <input
              type="tel"
              placeholder="Celular"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3923]"
            />
            <select
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3923]"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Selecione o tipo de evento
              </option>
              <option value="Casamento">Casamento</option>
              <option value="Bodas">Bodas</option>
              <option value="Aniversário">Aniversário</option>
              <option value="Batizado">Batizado</option>
            </select>

            <textarea
              rows={4}
              placeholder="Deixe qualquer mensagem que possa nos ajudar a entender melhor!"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3923] resize-none"
            />

            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-[#576250] px-4 py-2 text-white font-medium hover:bg-[#4a5344] transition cursor-pointer"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Modal de Imagem */}
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

      <footer className="bg-[#424242] min-h-[170px] w-full flex flex-col lg:flex-row items-center justify-around gap-4 px-12 py-6">
        <img
          src="https://hzksjbnudhswgqmccfnu.supabase.co/storage/v1/object/public/imagens-site-leco/logos/marca-1-cor-fundo-escuro.png"
          alt="logo"
          className="w-[300px]"
        />
        <p className="text-gray-400">2025 - Todos os direitor reservados</p>
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
