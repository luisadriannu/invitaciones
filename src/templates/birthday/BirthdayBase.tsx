import type { EventData } from "@/types/EventData";
import CountDown from "@/components/CountDown";
import Gallery from "@/components/Gallery";
import { useEffect, useState } from "react";
import background from "@/assets/pictures/background-birthday.jpg";
import confetti from "canvas-confetti";

import MusicButton from "@/components/MusicButton";

interface Props {
  data: EventData;
}

export default function BirthdayBaseTemplate({ data }: Props) {
  const [opened, setOpened] = useState(false);
  const meses: Record<string, string> = {
    Enero: "01",
    Febrero: "02",
    Marzo: "03",
    Abril: "04",
    Mayo: "05",
    Junio: "06",
    Julio: "07",
    Agosto: "08",
    Septiembre: "09",
    Octubre: "10",
    Noviembre: "11",
    Diciembre: "12",
  };
  const [dia, mes] = data.date.split(" ");

  const message = `Hola 👋
Quiero confirmar mi asistencia a la fiesta 🎉
¡Gracias por la invitación!`;

  const encodedMessage = encodeURIComponent(message);

  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <>
      {!opened && (
        <div
          className="fixed inset-0 z-50 flex overflow-hidden"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-[#0b1020]/75" />

          {/* Puerta izquierda */}
          <div
            className="
        relative w-1/2 h-full
        bg-[#0b1020]/60
        transition-transform duration-1000 ease-in-out
      "
            style={{
              transform: opened ? "translateX(-100%)" : "translateX(0)",
            }}
          />

          {/* Puerta derecha */}
          <div
            className="
        relative w-1/2 h-full
        bg-[#0b1020]/60
        transition-transform duration-1000 ease-in-out
      "
            style={{
              transform: opened ? "translateX(100%)" : "translateX(0)",
            }}
          />

          {/* CONTENIDO CENTRAL */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
            {/* Edad con diseño llamativo */}
            <h2 className="text-8xl font-black mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.8)] animate-pulse">
              {data.age}
            </h2>
            
            {/* Nombre con diseño llamativo */}
            <h3 className="text-5xl font-bold text-white mb-12 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
              {data.name}
            </h3>

            {/* BOTÓN CON BORDE GIRATORIO */}
            <div className="relative inline-block rounded-full p-[3px] overflow-hidden">
              {/* Borde animado con gradiente colorido */}
              <div
                className="
            absolute inset-0
            bg-gradient-to-r from-purple-500 via-pink-500 via-blue-500 to-purple-500
            animate-spin-slow
          "
              />

              {/* Botón real */}
              <button
                onClick={() => setOpened(true)}
                className="
            relative
            px-12 py-5
            bg-[#0b1020]
            text-white
            rounded-full
            font-bold
            text-xl
            tracking-wide
            shadow-[0_0_40px_rgba(168,85,247,0.6)]
            hover:shadow-[0_0_60px_rgba(168,85,247,0.9)]
            hover:scale-105
            active:scale-95
            transition-all duration-300
            cursor-pointer
          "
              >
                Toca aquí
              </button>
            </div>

            <p className="mt-6 text-gray-300 text-sm tracking-wide animate-bounce">
              Abre la invitación
            </p>
          </div>
        </div>
      )}

      <article className="text-white bg-[#0b1020]">
        <div
          className={`
      max-w-lg relative text-center mx-auto px-6 py-10
      transition-opacity duration-700
      ${opened ? "opacity-100" : "opacity-0"}
    `}
        >
          {/* Header */}
          <div className="pt-10 relative">
            {/* Globos flotantes dispersos */}
            <div className="absolute top-0 left-0 right-0 w-full h-24">
              {/* Globo rojo - izquierda arriba */}
              <div
                className="absolute left-8 top-0 animate-float"
                style={{ animationDelay: "0s" }}
              >
                <div className="w-10 h-12 bg-linear-to-b from-red-400 to-red-600 rounded-full relative shadow-lg">
                  <div className="absolute top-2 left-2 w-3 h-3 bg-red-200/40 rounded-full" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-6 bg-red-600/60" />
                </div>
              </div>

              {/* Globo rosa - izquierda centro */}
              <div
                className="absolute left-20 top-8 animate-float"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-12 h-14 bg-linear-to-b from-pink-400 to-pink-600 rounded-full relative shadow-lg">
                  <div className="absolute top-2 left-3 w-4 h-4 bg-pink-200/40 rounded-full" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-pink-600/60" />
                </div>
              </div>

              {/* Globo morado - centro */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-2 animate-float"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="w-14 h-16 bg-linear-to-b from-purple-400 to-purple-600 rounded-full relative shadow-lg">
                  <div className="absolute top-2 left-4 w-5 h-5 bg-purple-200/40 rounded-full" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-10 bg-purple-600/60" />
                </div>
              </div>

              {/* Globo azul - derecha centro */}
              <div
                className="absolute right-20 top-6 animate-float"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="w-12 h-14 bg-linear-to-b from-blue-400 to-blue-600 rounded-full relative shadow-lg">
                  <div className="absolute top-2 left-3 w-4 h-4 bg-blue-200/40 rounded-full" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-blue-600/60" />
                </div>
              </div>

              {/* Globo amarillo - derecha arriba */}
              <div
                className="absolute right-8 top-1 animate-float"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="w-10 h-12 bg-linear-to-b from-yellow-400 to-yellow-600 rounded-full relative shadow-lg">
                  <div className="absolute top-2 left-2 w-3 h-3 bg-yellow-200/40 rounded-full" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-yellow-600/60" />
                </div>
              </div>
            </div>

            <h2 className="text-9xl font-black mt-15 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.8)]">
              {data.age}
            </h2>
            <h1 className="mt-4 text-5xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">{data.name}</h1>
            <p className="mt-3 text-gray-300 font-semibold">
              Te invito a festejar mi cumpleaños
            </p>
          </div>

          <div className="my-8 flex justify-center">
            <div
              className="
      relative flex items-center gap-3 px-8 py-3
      bg-[#0b1020]
      text-white text-xl font-semibold tracking-wider
      rounded-md
      shadow-[0_0_25px_rgba(59,130,246,0.35)]
    "
            >
              {/* Marco esquina izquierda */}
              <span
                className="absolute left-0 top-0 w-6 h-6 border-l-2 border-t-2 border-sky-400
                     drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]"
              />

              {/* Marco esquina derecha */}
              <span
                className="absolute right-0 bottom-0 w-6 h-6 border-r-2 border-b-2 border-sky-400
                     drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]"
              />

              {/* Fecha */}
              <span className="drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
                {`${dia}.${meses[mes]}`}
              </span>

              {/* Estrella */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.9)]"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" />
              </svg>

              {/* Hora */}
              <span className="drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
                {data.hour}
              </span>
            </div>
          </div>

          <CountDown data={data} />

          {/* RSVP */}
          <div className="mt-8">
            <p className="text-lg">Nos encantaría que nos acompañes</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://api.whatsapp.com/send?phone=${data.phone}&text=${encodedMessage}`}
              className="
    inline-block
    px-6 py-3
    bg-slate-200
    text-[#0b1020]
    rounded-full
    font-semibold
    hover:bg-slate-300
    transition
    my-8
  "
            >
              Confirmar asistencia
            </a>
          </div>

          {/* Location */}
          <div className="mb-16">
            <hr className="border-dashed mb-6 w-50 mx-auto" />
            <h2 className="text-2xl font-semibold mb-2">Ubicación📍</h2>
            <p>
              {data.date} - {data.hour}
            </p>
            <img src={data.partyType} alt="Tipo de fiesta" />

            {data.suscription === "intermediary" ? (
              <iframe
                src={data.location}
                height="250"
                className="w-full rounded-lg"
                loading="lazy"
              />
            ) : (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={data.location}
                className="
    inline-flex items-center gap-2
    px-6 py-3
    bg-slate-200
    text-[#0b1020]
    rounded-full
    font-semibold
    hover:bg-slate-300
    transition
  "
              >
                <span>Ver ubicación</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0"
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

          {/* Extra */}
          <div className="mt-10 text-gray-300">
            {" "}
            <hr className="border-dashed mb-6 w-50 mx-auto" />
            <p className="text-2xl font-semibold mb-4">Código de vestimenta</p>
            <img
              className="mt-4"
              src={data.vestimentCodeImg}
              alt="Código de vestimenta"
            />
            <p className="text-lg">{data.vestimentCode}</p>
            <p className="mt-2">El mejor regalo será tu presencia🎁</p>
          </div>
        </div>
      </article>
      {data.music && <MusicButton src={data.music} />}
    </>
  );
}
