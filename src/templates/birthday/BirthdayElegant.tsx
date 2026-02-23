import type { EventData } from "@/types/EventData";
import CountDown from "@/components/CountDown";
import Gallery from "@/components/Gallery";
import MusicButton from "@/components/MusicButton";
import { useEffect, useState } from "react";

interface Props {
  data: EventData;
}

export default function BirthdayElegantTemplate({ data }: Props) {
  const [opening, setOpening] = useState(false);
  const [opened, setOpened] = useState(false);
  const message =
    "Hola 👋 Quiero confirmar mi asistencia a la fiesta 🎉 ¡Gracias por la invitación!";
  const encodedMessage = encodeURIComponent(message);

  useEffect(() => {
    document.body.style.overflow = opened ? "auto" : "hidden";
  }, [opened]);
  return (
    <>
      {!opened && (
        <div
          className="
      fixed inset-0 z-50
      bg-[#0e0e0e]
      transition-transform duration-1200 ease-in-out
    "
          style={{
            transform: opening ? "translateY(-100%)" : "translateY(0)",
          }}
        >
          {/* Contenido central */}
          <div className="h-full flex items-center justify-center text-center px-6">
            <div className="border border-[#C9A24D]/60 px-12 py-14 rounded-xl bg-black/40 backdrop-blur-sm">
              <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-4">
                Invitación especial
              </p>

              <h2 className="text-4xl font-serif text-[#C9A24D] mb-10">
                {data.age} <br /> {data.name}
              </h2>

              <button
                onClick={() => {
                  setOpening(true);
                  setTimeout(() => setOpened(true), 1200);
                }}
                className="
            px-10 py-3
            border border-[#C9A24D]
            text-[#C9A24D]
            rounded-full
            tracking-widest
            text-sm
            hover:bg-[#C9A24D]
            hover:text-black
            transition-all
            animate-elegant-pulse
            cursor-pointer
          "
              >
                Abrir invitación
              </button>
            </div>
          </div>
        </div>
      )}

      <article
        className="
    bg-[#0e0e0e] text-[#f5f5f5]
    min-h-screen px-6 py-16 font-serif
  "
      >
        <div className="text-center max-w-2xl mx-auto relative">
          {/* Decoración elegante superior */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-full">
            {/* Ornamento central */}
            <div className="flex justify-center items-center gap-3">
              <div className="w-16 h-px bg-linear-to-r from-transparent to-[#C9A24D]/60" />
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                className="text-[#C9A24D]"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="3"
                  fill="currentColor"
                  opacity="0.8"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.4"
                />
                <path
                  d="M20 12 L20 8 M20 28 L20 32 M12 20 L8 20 M28 20 L32 20"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.6"
                />
              </svg>
              <div className="w-16 h-px bg-linear-to-l from-transparent to-[#C9A24D]/60" />
            </div>

            {/* Detalles decorativos */}
            <div className="absolute -top-2 left-12 w-1 h-1 rounded-full bg-[#C9A24D]/40" />
            <div className="absolute -top-4 left-20 w-1.5 h-1.5 rounded-full bg-[#C9A24D]/60" />
            <div className="absolute -top-2 right-12 w-1 h-1 rounded-full bg-[#C9A24D]/40" />
            <div className="absolute -top-4 right-20 w-1.5 h-1.5 rounded-full bg-[#C9A24D]/60" />
          </div>

          <h2 className="text-[100px] text-[#C9A24D] tracking-widest mt-8">
            {data.age}
          </h2>
          <h1 className="text-5xl mt-2">{data.name}</h1>
          <div className="w-24 h-0.5 bg-[#C9A24D] mx-auto my-6" />
          <p className="text-lg opacity-80">
            Acompáñanos a celebrar una fecha especial
          </p>
        </div>

        <CountDown data={data} />

        <div className="text-center my-16">
          <a
            href={`https://api.whatsapp.com/send?phone=${data.phone}&text=${encodedMessage}`}
            className="
     px-8 py-3 border border-[#C9A24D] text-[#C9A24D] rounded-full hover:bg-[#C9A24D] hover:text-black transition
    "
            target="_blank"
            rel="noreferer"
          >
            Confirmar asistencia
          </a>
        </div>

        <div className="my-16 text-center">
          {" "}
          <hr className="border-dashed mb-6 w-50 mx-auto" />
          <h2 className="text-2xl mb-4">Lugar del evento📍</h2>
          <p>
            {data.date} - {data.hour}
          </p>
          <img src={data.partyType} alt="Tipo de fiesta" />
          {data.suscription === "intermediary" ? (
            <div className="relative p-[2px] rounded-2xl bg-linear-to-r from-[#C9A24D]/70 via-[#f5e6b3]/80 to-[#C9A24D]/70 shadow-[0_0_25px_rgba(201,162,77,0.35)]">
              <div className="bg-[#0e0e0e] rounded-2xl overflow-hidden">
                <iframe
                  src={data.location}
                  height="250"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={data.location}
              className="
    group inline-flex items-center gap-2
    px-7 py-3
    rounded-full
    font-semibold tracking-wide
    text-cyan-300
    bg-[#05080f]
    border border-cyan-400/40
    shadow-[0_0_12px_rgba(34,211,238,0.4)]
    hover:text-white
    hover:border-cyan-300
    hover:shadow-[0_0_25px_rgba(34,211,238,0.9)]
    transition-all duration-300
  "
            >
              <span>Ver ubicación</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="
    shrink-0
    text-cyan-400
    drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]
    transition-transform
  "
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" />
              </svg>
            </a>
          )}
        </div>

        {/* Gallery */}
        {data.images && (
          <>
            <h3 className="text-2xl mb-4 text-center">Momentos</h3>
            <Gallery images={data.images} />

            <p className="text-center text-xs text-gray-400 mt-4">
              Desliza para ver más →
            </p>
          </>
        )}

        <div className="mt-10 text-gray-300 text-center">
          {" "}
          <hr className="border-dashed mb-6 w-50 mx-auto" />
          <p className="text-2xl font-semibold mb-4">Código de vestimenta</p>
          <img
            className="mt-4"
            src={data.vestimentCodeImg}
            alt="Código de vestimenta"
          />
          <p className="text-lg">{data.vestimentCode}</p>
          <p className="mt-2">El mejor regalo será tu presencia</p>
        </div>
      </article>
      {data.music && <MusicButton src={data.music} />}
    </>
  );
}
