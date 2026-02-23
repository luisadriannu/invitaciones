import { useEffect, useState } from "react";
import type { EventData } from "@/types/EventData";
import CountDown from "@/components/CountDown";
import Gallery from "@/components/Gallery";
import MusicButton from "@/components/MusicButton";

interface Props {
  data: EventData;
}

export default function BirthdayModernTemplate({ data }: Props) {
  const [opening, setOpening] = useState(false);
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

  // Bloquear scroll mientras puertas estén visibles
  useEffect(() => {
    document.body.style.overflow = opened ? "auto" : "hidden";
  }, [opened]);

  const handleOpen = () => {
    setOpening(true);

    // Espera a que termine la animación de las puertas
    setTimeout(() => {
      setOpened(true);
    }, 800);
  };

  const message = `Hola 👋
Quiero confirmar mi asistencia a la fiesta 🎉
¡Gracias por la invitación!`;

  const encodedMessage = encodeURIComponent(message);

  return (
    <>
      <article className="bg-black text-white min-h-screen overflow-hidden">
        {/* ================= PUERTAS NEON ================= */}
        {!opened && (
          <div className="fixed inset-0 z-50 bg-black overflow-hidden">
            {/* Glow central */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.3),transparent_60%)]" />

            {/* PUERTA IZQUIERDA */}
            <div
              className="
              absolute top-0 left-0 h-full w-1/2
              bg-linear-to-l from-[#1a0028] via-[#0a0010] to-black
              shadow-[inset_-40px_0_80px_rgba(0,0,0,0.9)]
              transition-transform duration-1200 ease-in-out
            "
              style={{
                transform: opening ? "translateX(-100%)" : "translateX(0)",
              }}
            >
              <div className="absolute inset-y-0 right-6 w-0.5 bg-fuchsia-500/60 animate-pulse" />
              <div className="absolute inset-y-0 right-14 w-px bg-cyan-400/40" />
            </div>

            {/* PUERTA DERECHA */}
            <div
              className="
              absolute top-0 right-0 h-full w-1/2
             bg-linear-to-r from-[#002b36] via-[#00161a] to-black
              shadow-[inset_40px_0_80px_rgba(0,0,0,0.9)]
              transition-transform duration-1200 ease-in-out
            "
              style={{
                transform: opening ? "translateX(100%)" : "translateX(0)",
              }}
            >
              <div className="absolute inset-y-0 left-6 w-0.5 bg-cyan-400/60 animate-pulse" />
              <div className="absolute inset-y-0 left-14 w-px bg-fuchsia-500/40" />
            </div>

            {/* CONTENIDO CENTRAL */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <p className="text-xs tracking-[0.4em] text-gray-400 mb-4">
                EVENTO ESPECIAL
              </p>

              <h2
                className="
                text-4xl md:text-6xl font-black tracking-widest
                bg-linear-to-r from-fuchsia-500 via-cyan-400 to-fuchsia-500
                bg-clip-text text-transparent
                drop-shadow-[0_0_40px_rgba(217,70,239,0.9)]
                mb-12
              "
              >
                {data.age} <br /> {data.name}
              </h2>

              <button
                onClick={handleOpen}
                className="
                px-16 py-4 rounded-full
                font-bold tracking-widest
                text-black
                bg-linear-to-r from-fuchsia-500 to-cyan-400
                shadow-[0_0_60px_rgba(34,211,238,0.9)]
                hover:scale-110
                hover:shadow-[0_0_90px_rgba(217,70,239,1)]
                transition
                cursor-pointer
              "
              >
                Toca aquí
              </button>

              <span className="mt-8 text-xs tracking-widest text-gray-500">
                Abre la invitación
              </span>
            </div>
          </div>
        )}

        {/* ================= CONTENIDO ================= */}
        <div
          className={`
          px-6 py-12 transition-opacity duration-1000
          ${opened ? "opacity-100" : "opacity-0"}
        `}
        >
          {/* Header */}
          <div className="text-center py-5 relative">
            {/* Decoración neón superior */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md">
              {/* Líneas neón horizontales */}
              <div className="flex justify-center gap-2 mb-4">
                <div className="w-16 h-0.5 bg-linear-to-r from-transparent via-fuchsia-500 to-transparent shadow-[0_0_10px_#d946ef] animate-pulse" />
                <div
                  className="w-8 h-0.5 bg-linear-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#22d3ee]"
                  style={{ animationDelay: "0.3s" }}
                />
                <div className="w-16 h-0.5 bg-linear-to-r from-transparent via-fuchsia-500 to-transparent shadow-[0_0_10px_#d946ef] animate-pulse" />
              </div>

              {/* Círculos neón flotantes */}
              <div className="absolute -top-2 left-8 w-3 h-3 rounded-full bg-fuchsia-500 shadow-[0_0_20px_#d946ef] animate-pulse" />
              <div
                className="absolute -top-4 left-20 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute -top-2 right-8 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="absolute -top-4 right-20 w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_15px_#d946ef]"
                style={{ animationDelay: "0.7s" }}
              />
            </div>

            <h2 className="text-[120px] font-black text-fuchsia-500 drop-shadow-[0_0_30px_#d946ef] mt-8">
              {data.age}
            </h2>

            <h1 className="text-5xl font-bold mt-4 drop-shadow-[0_0_10px_#22d3ee]">
              {data.name}
            </h1>

            <p
              className="
    mt-4
    text-lg
    font-semibold
    tracking-wide
    relative
    inline-block
    text-transparent
    bg-clip-text
    bg-[linear-gradient(110deg,#9ca3af,45%,#22d3ee,55%,#9ca3af)]
    bg-size-[250%_100%]
    animate-neon-scan
  "
            >
              Prepárate para una noche increíble
            </p>
          </div>

          <div className="my-10 flex justify-center">
            <div
              className="
      relative flex items-center gap-4 px-10 py-4
      bg-black/80 backdrop-blur
      text-white text-xl font-semibold tracking-widest
      rounded-xl
      border border-fuchsia-500/40
      shadow-[0_0_35px_rgba(217,70,239,0.45)]
    "
            >
              {/* Marco esquina izquierda */}
              <span
                className="
        absolute left-0 top-0 w-6 h-6
        border-l-2 border-t-2 border-fuchsia-500
        drop-shadow-[0_0_12px_rgba(217,70,239,1)]
      "
              />

              {/* Marco esquina derecha */}
              <span
                className="
        absolute right-0 bottom-0 w-6 h-6
        border-r-2 border-b-2 border-cyan-400
        drop-shadow-[0_0_12px_rgba(34,211,238,1)]
      "
              />

              {/* Fecha */}
              <span
                className="
        bg-linear-to-r from-fuchsia-400 via-white to-cyan-400
        bg-clip-text text-transparent
        drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]
      "
              >
                {`${dia}.${meses[mes]}`}
              </span>

              {/* Icono estrella */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="
        text-fuchsia-400
        drop-shadow-[0_0_15px_rgba(217,70,239,1)]
        animate-pulse
      "
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" />
              </svg>

              {/* Hora */}
              <span
                className="
        bg-linear-to-r from-cyan-400 via-white to-fuchsia-400
        bg-clip-text text-transparent
        drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]
      "
              >
                {data.hour}
              </span>
            </div>
          </div>

          <CountDown data={data} />

          {/* RSVP */}
          <div className="mt-10 flex flex-col justify-center text-center">
            {" "}
            <p className="text-lg">Nos encantaría que nos acompañes</p>
            <a
              href={`https://api.whatsapp.com/send?phone=${data.phone}&text=${encodedMessage}`}
              target="_blank"
              rel="noreferrer"
              className="
    relative inline-flex items-center justify-center
    px-14 py-4 rounded-full
    font-extrabold tracking-[0.25em]
    text-white
    bg-linear-to-r from-fuchsia-500 via-purple-500 to-cyan-400
    shadow-[0_0_35px_rgba(217,70,239,0.9)]
    transition-all duration-300
    hover:scale-110
    hover:shadow-[0_0_60px_rgba(34,211,238,1)]
    active:scale-95
    overflow-hidden 
    mt-8
  "
            >
              {/* Halo animado */}
              <span
                className="
      absolute -inset-1
      rounded-full
      bg-linear-to-r from-cyan-400 via-fuchsia-500 to-cyan-400
      opacity-40
      blur-xl
      animate-pulse
      -z-10
    "
              />
              CONFIRMAR ASISTENCIA
            </a>
          </div>

          {/* Ubicación */}
          <div className="my-16 text-center">
            {" "}
            <hr className="border-dashed mb-6 w-50 mx-auto" />
            <h2 className="text-2xl text-center mb-4 drop-shadow-[0_0_10px_#d946ef]">
              Ubicación📍
            </h2>{" "}
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
            <p className="mt-2 text-fuchsia-400 drop-shadow-[0_0_15px_#d946ef]">
              El mejor regalo será tu presencia
            </p>
          </div>
        </div>
      </article>
      {data.music && <MusicButton src={data.music} />}
    </>
  );
}
