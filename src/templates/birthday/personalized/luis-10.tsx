import type { EventData } from "@/types/EventData";
import { useEffect, useState } from "react";
import CountDown from "@/components/CountDown";
import Gallery from "@/components/Gallery";
import MusicButton from "@/components/MusicButton";
import dinosaurios from "@/assets/pictures/dinorsaurios.png";

interface Luis10TemplateProps {
  data: EventData;
}

export default function Luis10Template({ data }: Luis10TemplateProps) {
  const [opened, setOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const message = `Hola 👋
Confirmo mi asistencia a la fiesta de cumpleaños
¡Gracias por la invitación!`;
  const encodedMessage = encodeURIComponent(message);

  useEffect(() => {
    document.body.style.overflow = opened ? "auto" : "hidden";
  }, [opened]);

  return (
    <>
      {!opened && (
        <div
          className={`fixed inset-0 z-50 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 flex items-center justify-center overflow-hidden transition-all duration-1000 ${
            isOpening ? "opacity-0 scale-150" : "opacity-100 scale-100"
          }`}
        >
          {/* Hojas flotantes */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-8 h-8 text-green-400 animate-bounce opacity-60">
              🌿
            </div>
            <div
              className="absolute top-40 right-20 w-8 h-8 text-green-300 animate-bounce opacity-60"
              style={{ animationDelay: "0.3s" }}
            >
              🍃
            </div>
            <div
              className="absolute bottom-32 left-1/4 w-8 h-8 text-emerald-400 animate-bounce opacity-60"
              style={{ animationDelay: "0.6s" }}
            >
              🌿
            </div>
            <div
              className="absolute top-1/3 right-1/3 w-8 h-8 text-teal-400 animate-bounce opacity-60"
              style={{ animationDelay: "0.9s" }}
            >
              🍃
            </div>
          </div>

          <div className="text-center px-6 relative z-10">
            {/* Dinosaurio grande */}
            <div className="mb-8 text-9xl animate-bounce">🦕</div>

            <h2 className="text-7xl font-bold mb-4 bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(52,211,153,0.6)]">
              ¡Fiesta Jurásica!
            </h2>
            <h3 className="text-5xl font-bold text-green-100 mb-4">
              {data.name}
            </h3>
            <p className="text-3xl font-bold text-emerald-300 mb-12">
              cumple {data.age} años
            </p>

            <button
              onClick={() => {
                setIsOpening(true);
                setTimeout(() => setOpened(true), 1000);
              }}
              className="
                relative px-14 py-5
                bg-gradient-to-r from-green-600 to-emerald-600
                text-white
                rounded-full
                font-bold
                text-xl
                shadow-[0_0_40px_rgba(52,211,153,0.6)]
                hover:shadow-[0_0_60px_rgba(52,211,153,0.9)]
                hover:scale-110
                active:scale-95
                transition-all duration-300
                cursor-pointer
                border-2 border-green-400
              "
            >
              <span className="relative z-10">¡Abrir Invitación!</span>
            </button>

            <p className="mt-8 text-green-200 text-sm tracking-[0.3em] animate-pulse">
              ¡PREPÁRATE PARA LA AVENTURA!
            </p>
          </div>
        </div>
      )}

      <article className="bg-gradient-to-b from-green-100 via-emerald-50 to-teal-50 min-h-screen relative overflow-hidden">
        {/* Hojas decorativas en la parte superior */}
        <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
          <div className="absolute top-0 left-0 text-6xl opacity-40 transform -rotate-12">
            🍃
          </div>
          <div className="absolute top-2 left-20 text-5xl opacity-50 transform rotate-45">
            🌿
          </div>
          <div className="absolute top-4 left-40 text-4xl opacity-30 transform -rotate-30">
            🍂
          </div>
          <div className="absolute top-1 left-60 text-5xl opacity-45 transform rotate-12">
            🍃
          </div>
          <div className="absolute top-3 right-60 text-6xl opacity-35 transform -rotate-45">
            🌿
          </div>
          <div className="absolute top-0 right-40 text-5xl opacity-50 transform rotate-30">
            🍂
          </div>
          <div className="absolute top-2 right-20 text-4xl opacity-40 transform -rotate-12">
            🍃
          </div>
          <div className="absolute top-4 right-0 text-6xl opacity-30 transform rotate-45">
            🌿
          </div>
        </div>

        {/* Lianas laterales */}
        <div className="absolute left-0 top-0 bottom-0 w-8 opacity-60">
          <svg width="32" height="100%" viewBox="0 0 32 800" preserveAspectRatio="none" className="text-green-600">
            <path d="M8 0 Q16 50 8 100 T8 200 T8 300 T8 400 T8 500 T8 600 T8 700 T8 800" fill="none" stroke="currentColor" strokeWidth="4" />
            <circle cx="8" cy="50" r="3" fill="currentColor" />
            <circle cx="8" cy="150" r="3" fill="currentColor" />
            <circle cx="8" cy="250" r="3" fill="currentColor" />
            <circle cx="8" cy="350" r="3" fill="currentColor" />
            <circle cx="8" cy="450" r="3" fill="currentColor" />
            <circle cx="8" cy="550" r="3" fill="currentColor" />
            <circle cx="8" cy="650" r="3" fill="currentColor" />
            <circle cx="8" cy="750" r="3" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-8 opacity-60">
          <svg width="32" height="100%" viewBox="0 0 32 800" preserveAspectRatio="none" className="text-green-600">
            <path d="M24 0 Q16 50 24 100 T24 200 T24 300 T24 400 T24 500 T24 600 T24 700 T24 800" fill="none" stroke="currentColor" strokeWidth="4" />
            <circle cx="24" cy="50" r="3" fill="currentColor" />
            <circle cx="24" cy="150" r="3" fill="currentColor" />
            <circle cx="24" cy="250" r="3" fill="currentColor" />
            <circle cx="24" cy="350" r="3" fill="currentColor" />
            <circle cx="24" cy="450" r="3" fill="currentColor" />
            <circle cx="24" cy="550" r="3" fill="currentColor" />
            <circle cx="24" cy="650" r="3" fill="currentColor" />
            <circle cx="24" cy="750" r="3" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-2xl mx-auto px-6 py-16 text-center relative z-10">
          {/* Header */}
          <div className="mb-10 relative">
            {/* Dinosaurios decorativos */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <span className="text-6xl">🦕</span>
              <span className="text-7xl">🦖</span>
              <span className="text-6xl">🦕</span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent drop-shadow-lg break-words">
              ¡FIESTA JURÁSICA!
            </h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-green-800 mb-4 break-words">
              {data.name}
            </h2>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-700 break-words">
              Cumple {data.age} años
            </p>

            {/* Huellas de dinosaurio */}
            <div className="flex justify-center items-center gap-3 mt-10">
              <img
                src={dinosaurios}
                alt="Dinosaurios"
                className="w-full max-w-md mx-auto rounded-2xl "
              />
            </div>
          </div>

          {/* Countdown */}
          <div className="mb-16 text-green-800">
            <CountDown data={data} />
          </div>

          {/* Detalles del evento */}
          <div className="relative mb-16">
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border-4 border-green-400">
              <h3 className="text-4xl font-bold text-green-800 mb-10 flex items-center justify-center gap-3">
                Detalles de la Aventura
              </h3>

              <div className="space-y-8 text-left">
                <div className="flex items-start gap-5">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg text-4xl">
                    📅
                  </div>
                  <div>
                    <p className="font-bold text-green-900 text-2xl mb-1">
                      Fecha
                    </p>
                    <p className="text-green-700 text-xl">{data.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg text-4xl">
                    ⏰
                  </div>
                  <div>
                    <p className="font-bold text-green-900 text-2xl mb-1">
                      Hora
                    </p>
                    <p className="text-green-700 text-xl">{data.hour}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg text-4xl">
                    📍
                  </div>
                  <div>
                    <p className="font-bold text-green-900 text-2xl mb-1">
                      Lugar
                    </p>
                    <p className="text-green-700 text-xl mb-3">
                      {data.direction}
                    </p>
                    <a
                      href={data.location}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-bold text-xl"
                    >
                      Ver ubicación
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Galería */}
          {data.images && (
            <div className="mb-16">
              <div className="flex justify-center items-center gap-4 mb-10">
                <h3 className="text-4xl font-bold text-green-800">
                  Momentos Especiales
                </h3>
              </div>
              <Gallery images={data.images} />
              <p className="text-center text-sm text-green-600 mt-6 font-bold">
                Desliza para ver más →
              </p>
            </div>
          )}

          {/* Código de vestimenta */}
          {data.vestimentCode && (
            <div className="relative mb-16">
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border-4 border-green-400">
                <h3 className="text-4xl font-bold text-green-800 mb-8 flex items-center justify-center gap-3">
                  Código de Vestimenta
                </h3>
                {data.vestimentCodeImg && (
                  <img
                    src={data.vestimentCodeImg}
                    alt="Código de vestimenta"
                    className="mx-auto mb-4 rounded-2xl"
                  />
                )}
                <p className="text-2xl text-green-800 font-bold">
                  {data.vestimentCode}
                </p>
              </div>
            </div>
          )}

          {/* RSVP */}
          <div className="text-center">
            <p className="text-4xl font-bold text-green-900 mb-10">
              ¡No te pierdas esta aventura prehistórica!
            </p>
            <a
              href={`https://api.whatsapp.com/send?phone=${data.phone}&text=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                px-16 py-6
                bg-gradient-to-r from-green-600 to-emerald-600
                text-white
                rounded-full
                font-bold
                text-2xl
                shadow-[0_10px_40px_rgba(52,211,153,0.4)]
                hover:shadow-[0_15px_60px_rgba(52,211,153,0.6)]
                hover:scale-110
                active:scale-95
                transition-all duration-300
                border-2 border-green-400
              "
            >
              Confirmar Asistencia
            </a>
          </div>

          {/* Decoración inferior con árboles */}
          <div className="mt-16 relative">
            {/* Árboles decorativos */}
            <div className="flex justify-center items-end gap-2 mb-8 flex-wrap">
              <span className="text-5xl sm:text-6xl opacity-50">🌳</span>
              <span className="text-6xl sm:text-7xl opacity-60">🌲</span>
              <span className="text-4xl sm:text-5xl opacity-45">🌴</span>
              <span className="text-7xl sm:text-8xl opacity-55">🌳</span>
              <span className="text-5xl sm:text-6xl opacity-50">🌲</span>
              <span className="text-6xl sm:text-7xl opacity-60">🌴</span>
              <span className="text-4xl sm:text-5xl opacity-45">🌳</span>
            </div>
          </div>
        </div>
      </article>

      {data.music && <MusicButton src={data.music} />}
    </>
  );
}
