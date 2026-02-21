import type { EventData } from "@/types/EventData";
import { useEffect, useState } from "react";
import CountDown from "@/components/CountDown";
import Gallery from "@/components/Gallery";
import MusicButton from "@/components/MusicButton";

interface BirthdayTemplateProps {
  data: EventData;
}

export default function XVTemplate({ data }: BirthdayTemplateProps) {
  const [opened, setOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const message = `Hola 👋
Confirmo mi asistencia a los XV años
¡Gracias por la invitación!`;
  const encodedMessage = encodeURIComponent(message);

  useEffect(() => {
    document.body.style.overflow = opened ? "auto" : "hidden";
  }, [opened]);

  return (
    <>
      {!opened && (
        <div
          className={`fixed inset-0 z-50 bg-linear-to-br from-rose-100 via-pink-50 to-amber-50 flex items-center justify-center overflow-hidden transition-all duration-1000 ${
            isOpening ? "opacity-0 scale-150" : "opacity-100 scale-100"
          }`}
        >
          {/* Confeti flotante */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-4 h-4 bg-rose-400 rounded-full animate-bounce opacity-70" />
            <div
              className="absolute top-40 right-20 w-3 h-3 bg-amber-400 rounded-full animate-bounce opacity-70"
              style={{ animationDelay: "0.3s" }}
            />
            <div
              className="absolute bottom-32 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-70"
              style={{ animationDelay: "0.6s" }}
            />
            <div
              className="absolute top-1/3 right-1/3 w-2 h-2 bg-rose-300 rounded-full animate-bounce opacity-70"
              style={{ animationDelay: "0.9s" }}
            />
          </div>

          {/* Decoraciones elegantes en las esquinas */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-amber-300 opacity-60" />
          <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-amber-300 opacity-60" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-amber-300 opacity-60" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-amber-300 opacity-60" />

          {/* Ornamentos en las esquinas */}
          <div className="absolute top-4 left-4 text-3xl text-amber-300 opacity-70">
            ✦
          </div>
          <div className="absolute top-4 right-4 text-3xl text-amber-300 opacity-70">
            ✦
          </div>
          <div className="absolute bottom-4 left-4 text-3xl text-amber-300 opacity-70">
            ✦
          </div>
          <div className="absolute bottom-4 right-4 text-3xl text-amber-300 opacity-70">
            ✦
          </div>

          <div className="text-center px-6 relative z-10">
            {/* Número XV elegante */}
            <div className="mb-6">
              <h2 className="text-9xl font-bold bg-linear-to-r from-rose-400 via-pink-400 to-amber-400 bg-clip-text text-transparent drop-shadow-2xl">
                XV
              </h2>
            </div>
            <h3 className="text-5xl font-light text-rose-900 mb-12 tracking-widest">
              {data.name}
            </h3>

            <button
              onClick={() => {
                setIsOpening(true);
                setTimeout(() => setOpened(true), 1000);
              }}
              className="
                relative px-16 py-5
                bg-linear-to-r from-rose-400 to-amber-400
                text-white
                rounded-full
                font-semibold
                text-lg
                shadow-[0_10px_40px_rgba(251,113,133,0.4)]
                hover:shadow-[0_15px_60px_rgba(251,113,133,0.6)]
                hover:scale-105
                active:scale-95
                transition-all duration-300
                cursor-pointer
                animate-bounce
              "
            >
              <span className="relative z-10">Abrir Invitación</span>
            </button>

            <p className="mt-8 text-rose-600 text-sm tracking-[0.3em] animate-pulse">
              UN MOMENTO MÁGICO
            </p>
          </div>
        </div>
      )}

      <article className="bg-linear-to-b from-rose-50 via-pink-50 to-amber-50 min-h-screen">
        <div className="max-w-2xl mx-auto px-6 py-16 text-center">
          {/* Header moderno */}
          <div className="mb-16 relative">
            {/* Ornamento superior minimalista */}
            <div className="flex justify-center items-center gap-8 mb-12">
              <div className="w-32 h-px bg-linear-to-r from-transparent via-rose-300 to-transparent" />
              <div className="w-2 h-2 bg-rose-400 rounded-full" />
              <div className="w-32 h-px bg-linear-to-l from-transparent via-rose-300 to-transparent" />
            </div>

            {/* Corona decorativa */}
            <div className="text-7xl mb-6 animate-pulse">👑</div>

            <h1 className="text-8xl font-bold mb-6 bg-linear-to-r from-rose-500 via-pink-500 to-amber-500 bg-clip-text text-transparent">
              XV
            </h1>
            <h2 className="text-6xl font-light text-rose-900 mb-6 tracking-wider">
              {data.name}
            </h2>
            <p className="text-2xl text-rose-700 italic font-light">
              “Un sueño hecho realidad”
            </p>

            {/* Ornamento inferior */}
            <div className="flex justify-center items-center gap-3 mt-12">
              <div className="w-20 h-px bg-linear-to-r from-transparent to-amber-300" />
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
              <div className="w-3 h-3 bg-rose-400 rounded-full" />
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
              <div className="w-20 h-px bg-linear-to-l from-transparent to-amber-300" />
            </div>
          </div>

          {/* Countdown */}
          <div className="mb-16">
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-10 shadow-xl border-2 border-rose-300">
              <h3 className="text-3xl font-semibold text-rose-800 mb-8">
                Cuenta Regresiva
              </h3>
              <div className="text-rose-900">
                <CountDown data={data} />
              </div>
            </div>
          </div>

          {/* Detalles del evento */}
          <div className="relative mb-16">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-rose-200">
              <h3 className="text-4xl font-light text-rose-900 mb-10 tracking-wide">
                Detalles del Evento
              </h3>

              <div className="space-y-8 text-left">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-linear-to-br from-rose-400 to-amber-400 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                    <span className="text-3xl">📅</span>
                  </div>
                  <div>
                    <p className="font-semibold text-rose-900 text-xl mb-1">
                      Fecha
                    </p>
                    <p className="text-rose-700 text-lg">{data.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-linear-to-br from-rose-400 to-amber-400 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                    <span className="text-3xl">⏰</span>
                  </div>
                  <div>
                    <p className="font-semibold text-rose-900 text-xl mb-1">
                      Hora
                    </p>
                    <p className="text-rose-700 text-lg">{data.hour}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-linear-to-br from-rose-400 to-amber-400 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                    <span className="text-3xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-rose-900 text-xl mb-1">
                      Lugar
                    </p>
                    <p className="text-rose-700 text-lg mb-3">
                      {data.direction}
                    </p>
                    <a
                      href={data.location}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-semibold text-lg"
                    >
                      Ver ubicación
                      <svg
                        width="18"
                        height="18"
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
                <div className="w-24 h-px bg-linear-to-rfrom-transparent to-rose-300" />
                <h3 className="text-4xl font-light text-rose-900 tracking-wide">
                  Momentos Especiales
                </h3>
                <div className="w-24 h-px bg-linear-to-l from-transparent to-rose-300" />
              </div>
              <Gallery images={data.images} />
              <p className="text-center text-sm text-rose-600 mt-6">
                Desliza para ver más →
              </p>
            </div>
          )}

          {/* Código de vestimenta */}
          {data.vestimentCode && (
            <div className="relative mb-16">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-rose-200">
                <h3 className="text-4xl font-light text-rose-900 mb-8 tracking-wide">
                  Código de Vestimenta
                </h3>
                {data.vestimentCodeImg && (
                  <img
                    src={data.vestimentCodeImg}
                    alt="Código de vestimenta"
                    className="mx-auto mb-4 rounded-2xl shadow-lg"
                  />
                )}
                <p className="text-xl text-rose-800 font-medium">
                  {data.vestimentCode}
                </p>
              </div>
            </div>
          )}

          {/* RSVP */}
          <div className="text-center">
            <p className="text-3xl font-light text-rose-900 mb-10 italic">
              ¡Sería un honor contar con tu presencia!
            </p>
            <a
              href={`https://api.whatsapp.com/send?phone=${data.phone}&text=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                px-16 py-5
                bg-linear-to-r from-rose-400 to-amber-400
                text-white
                rounded-full
                font-semibold
                text-lg
                shadow-[0_10px_40px_rgba(251,113,133,0.4)]
                hover:shadow-[0_15px_60px_rgba(251,113,133,0.6)]
                hover:scale-105
                active:scale-95
                transition-all duration-300
              "
            >
              Confirmar Asistencia
            </a>
          </div>

          {/* Decoración inferior */}
          <div className="mt-16 flex justify-center items-center gap-4 opacity-40">
            <div className="w-32 h-px bg-linear-to-r from-transparent via-rose-300 to-transparent" />
            <div className="w-2 h-2 bg-rose-400 rounded-full" />
            <div className="w-32 h-px bg-linear-to-l from-transparent via-rose-300 to-transparent" />
          </div>
        </div>
      </article>

      {data.music && <MusicButton src={data.music} />}
    </>
  );
}
