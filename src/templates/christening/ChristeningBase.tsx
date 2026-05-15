import { useEffect, useRef, useState } from "react";
import type { EventData } from "@/types/EventData";
import Gallery from "@/components/Gallery";
import CountDown from "@/components/CountDown";
import MusicButton from "@/components/MusicButton";

interface Props {
  data: EventData;
}

export default function ChristeningBase({ data }: Props) {
  const [openProgress, setOpenProgress] = useState(0);
  const [hasOpened, setHasOpened] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);

  const message = `Hola 👋
Confirmo mi asistencia al bautizo
¡Gracias por la invitación!`;
  const encodedMessage = encodeURIComponent(message);

  /* =========================
     PUERTAS (SCROLL CONTROL)
  ========================== */
  useEffect(() => {
    if (hasOpened) return;

    const handleScroll = () => {
      const progress = Math.min(window.scrollY / (window.innerHeight * 0.5), 1);
      setOpenProgress(progress);

      if (progress >= 1) {
        setHasOpened(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasOpened]);

  /* =========================
     FADE-IN SECTIONS
  ========================== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    sectionsRef.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // const mesesMap: Record<string, number> = {
  //   Enero: 0,
  //   Febrero: 1,
  //   Marzo: 2,
  //   Abril: 3,
  //   Mayo: 4,
  //   Junio: 5,
  //   Julio: 6,
  //   Agosto: 7,
  //   Septiembre: 8,
  //   Octubre: 9,
  //   Noviembre: 10,
  //   Diciembre: 11,
  // };

  // const diasSemana = [
  //   "Domingo",
  //   "Lunes",
  //   "Martes",
  //   "Miércoles",
  //   "Jueves",
  //   "Viernes",
  //   "Sábado",
  // ];

  // const meses: Record<string, string> = {
  //   Enero: "01",
  //   Febrero: "02",
  //   Marzo: "03",
  //   Abril: "04",
  //   Mayo: "05",
  //   Junio: "06",
  //   Julio: "07",
  //   Agosto: "08",
  //   Septiembre: "09",
  //   Octubre: "10",
  //   Noviembre: "11",
  //   Diciembre: "12",
  // };
  // const [dia, mes] = data.date.split(" ");

  const [
    dayNumberStr,
    monthStr,
    // yearStr
  ] = data.date.split(" ");
  const dayNumber = Number(dayNumberStr);
  // const monthIndex = mesesMap[monthStr];
  // const year = Number(yearStr);

  // const dateObj = new Date(year, monthIndex, dayNumber);
  // const dayName = diasSemana[dateObj.getDay()];

  const [particles] = useState(() =>
    [...Array(20)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${3 + Math.random() * 5}s`,
    })),
  );
  const coverImage = data.images?.[0];

  return (
    <>
      <article className="relative overflow-x-hidden bg-[#f8f5ef] text-[#6b5b4d] font-['Montserrat']">
        {/* ================= FONDO DECORATIVO ================= */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-120px] left-[-80px] w-72 h-72 bg-[#d4af37]/10 blur-3xl rounded-full" />
          <div className="absolute bottom-[-120px] right-[-80px] w-72 h-72 bg-[#d4af37]/10 blur-3xl rounded-full" />

          {/* Partículas */}
          {particles.map((particle, i) => (
            <span
              key={i}
              className="absolute w-1 h-1 bg-[#d4af37]/40 rounded-full animate-pulse"
              style={{
                top: particle.top,
                left: particle.left,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>

        {/* ================= PUERTAS ================= */}

        {!hasOpened && (
          <div
            ref={containerRef}
            className="fixed inset-0 z-50 flex pointer-events-none"
            style={{ opacity: 1 - openProgress }}
          >
            {/* IZQUIERDA */}
            <div
              className="flex-1 relative bg-[#fffdf9] shadow-2xl transition-transform duration-700 border-r border-[#d4af3730]"
              style={{ transform: `translateX(-${openProgress * 100}%)` }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff,#f4ede3)]" />

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-[#d4af37]/40 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="1.5"
                  >
                    <path d="M12 3v18" />
                    <path d="M8 7h8" />
                  </svg>
                </div>
              </div>
            </div>

            {/* DERECHA */}
            <div
              className="flex-1 relative bg-[#fffdf9] shadow-2xl transition-transform duration-700"
              style={{ transform: `translateX(${openProgress * 100}%)` }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff,#f4ede3)]" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <p className="tracking-[0.4em] uppercase text-xs text-[#b89b5e] mb-4">
                  Invitación
                </p>

                <h1 className="font-['Cormorant_Garamond'] text-5xl text-[#6b5b4d]">
                  Bautizo
                </h1>

                <p className="mt-6 text-[#a08d74] italic text-sm">
                  Desliza para abrir
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= CONTENIDO ================= */}

        <div className="relative max-w-md mx-auto px-5 pt-20 pb-24">
          {/* HERO */}

          <div
            ref={(el) => {
              if (el && !sectionsRef.current.includes(el)) {
                sectionsRef.current.push(el);
              }
            }}
            className="content-section flex flex-col items-center text-center"
          >
            {/* FOTO */}
            <div className="relative">
              <div className="absolute inset-0 blur-2xl bg-[#d4af37]/20 rounded-full scale-110" />

              <div className="relative w-56 h-56 rounded-full overflow-hidden border-[6px] border-[#d4af37]/40 shadow-[0_10px_40px_rgba(212,175,55,0.25)]">
                <img
                  src={coverImage}
                  alt="Imagen de la festejada"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="mt-10 tracking-[0.4em] uppercase text-xs text-[#b89b5e]">
              Mi Bautizo
            </p>

            <h1 className="font-['Cormorant_Garamond'] text-6xl text-[#6b5b4d] mt-4">
              {data.name}
            </h1>

            <p className="italic text-[#9c8c7c] mt-6 text-lg">
              “Dios ha enviado un ángel a nuestras vidas”
            </p>

            {/* DECORACIÓN */}
            <div className="opacity-50 mt-10 w-full flex justify-center">
              <svg viewBox="0 0 200 20" width="180">
                <path
                  d="M0 10 Q50 0 100 10 T200 10"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>

          {/* ================= TARJETA EVENTO ================= */}

          <div
            ref={(el) => {
              if (el && !sectionsRef.current.includes(el)) {
                sectionsRef.current.push(el);
              }
            }}
            className="content-section mt-16"
          >
            <div
              className="
          bg-white/70
          backdrop-blur-xl
          border border-[#d4af3730]
          rounded-[32px]
          p-8
          text-center
          shadow-[0_10px_40px_rgba(212,175,55,0.12)]
        "
            >
              <p
                className="
      uppercase
      tracking-[0.35em]
      text-[11px]
      text-[#b6a76d]
      font-medium
      mb-6
    "
              >
                CELEBRA CON NOSOTROS
              </p>

              <h2
                className="
      font-['Cormorant_Garamond']
      text-[52px]
      leading-none
      text-[#6f5d50]
      font-normal
    "
              >
                El Bautizo de
              </h2>
              <br />
              <h1
                className="
      font-['Great_Vibes']
      text-[70px]
      leading-[0.95]
      text-[#efc8d2]
      mt-2
      drop-shadow-[0_2px_8px_rgba(239,200,210,0.18)]
    "
              >
                Camila <br />
                Vicenta <br />
                Rivas De <br />
                Jesús
              </h1>

              <p
                className="
      mt-10
      italic
      text-[#8c7668]
      text-[20px]
      font-['Cormorant_Garamond']
    "
              >
                Un día lleno de amor, fe y bendiciones
              </p>
            </div>
          </div>

          {/* ================= PADRES Y PADRINOS ================= */}

          <div
            ref={(el) => {
              if (el && !sectionsRef.current.includes(el)) {
                sectionsRef.current.push(el);
              }
            }}
            className="content-section mt-15"
          >
            <div
              className="
      bg-white/70
      backdrop-blur-xl
      rounded-[32px]
      border border-[#d4af3730]
      shadow-[0_10px_40px_rgba(212,175,55,0.10)]
      p-10
      text-center
      overflow-hidden
      relative
    "
            >
              {/* Glow decorativo */}
              <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-56 h-56 bg-[#d4af37]/10 blur-3xl rounded-full" />

              {/* ================= DECORACIÓN ================= */}

              <div className="relative mb-10 flex justify-center">
                <svg
                  width="220"
                  height="90"
                  viewBox="0 0 220 90"
                  className="opacity-80"
                >
                  <g stroke="#d4af37" strokeWidth="1.2" fill="none">
                    {/* Línea principal */}
                    <path d="M20 45 Q70 10 110 45 Q150 10 200 45" />

                    {/* Línea secundaria */}
                    <path
                      d="M35 55 Q110 70 185 55"
                      opacity="0.35"
                      strokeWidth="0.8"
                    />

                    {/* Cruz central */}
                    <path d="M110 28v24" strokeWidth="1.6" />
                    <path d="M102 36h16" strokeWidth="1.6" />

                    {/* Ornamentales */}
                    <circle
                      cx="70"
                      cy="15"
                      r="3"
                      fill="#d4af37"
                      opacity="0.5"
                    />
                    <circle
                      cx="150"
                      cy="15"
                      r="3"
                      fill="#d4af37"
                      opacity="0.5"
                    />

                    <circle
                      cx="45"
                      cy="42"
                      r="2"
                      fill="#d4af37"
                      opacity="0.35"
                    />
                    <circle
                      cx="175"
                      cy="42"
                      r="2"
                      fill="#d4af37"
                      opacity="0.35"
                    />
                  </g>
                </svg>
              </div>

              {/* ================= PADRES ================= */}

              <p
                className="
        uppercase
        tracking-[0.35em]
        text-[11px]
        text-[#b6a76d]
        mb-8
      "
              >
                Padres
              </p>

              <div className="space-y-10 relative z-10">
                {/* PAPÁS */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-px bg-[#d4af3730]" />

                    <p className="font-['Cormorant_Garamond'] italic text-[#b6a76d] text-xl">
                      Papás
                    </p>

                    <div className="w-10 h-px bg-[#d4af3730]" />
                  </div>

                  <div className="space-y-3">
                    <p
                      className="
              font-['Cormorant_Garamond']
              text-3xl
              text-[#6f5d50]
              leading-tight
            "
                    >
                      {data.namesParents?.dadGirl}
                    </p>

                    <p className="text-[#d4af37] text-2xl">&</p>

                    <p
                      className="
              font-['Cormorant_Garamond']
              text-3xl
              text-[#6f5d50]
              leading-tight
            "
                    >
                      {data.namesParents?.momGirl}
                    </p>
                  </div>
                </div>

                {/* DIVISOR */}
                <div className="flex justify-center py-2">
                  <svg width="120" height="20" viewBox="0 0 120 20">
                    <path
                      d="M0 10 Q30 0 60 10 T120 10"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="1"
                      opacity="0.5"
                    />
                  </svg>
                </div>

                {/* ================= PADRINOS ================= */}

                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-px bg-[#d4af3730]" />

                    <p className="font-['Cormorant_Garamond'] italic text-[#b6a76d] text-xl">
                      Padrinos
                    </p>

                    <div className="w-10 h-px bg-[#d4af3730]" />
                  </div>

                  <div className="space-y-3">
                    <p
                      className="
              font-['Cormorant_Garamond']
              text-3xl
              text-[#6f5d50]
              leading-tight
            "
                    >
                      {data.godparents?.men}
                    </p>

                    <p className="text-[#d4af37] text-2xl">&</p>

                    <p
                      className="
              font-['Cormorant_Garamond']
              text-3xl
              text-[#6f5d50]
              leading-tight
            "
                    >
                      {data.godparents?.girl}
                    </p>
                  </div>
                </div>
              </div>

              {/* MENSAJE */}

              <div className="mt-14 relative z-10">
                <p
                  className="
          italic
          text-[#8c7668]
          text-lg
          font-['Cormorant_Garamond']
        "
                >
                  Con amor y alegría
                </p>

                <p
                  className="
          mt-2
          text-[#a08d74]
          text-sm
          tracking-[0.15em]
          uppercase
        "
                >
                  Acompañan este día tan especial
                </p>
              </div>
            </div>
          </div>

          {/* ================= DETALLES ================= */}

          <div
            ref={(el) => {
              if (el && !sectionsRef.current.includes(el)) {
                sectionsRef.current.push(el);
              }
            }}
            className="content-section mt-10 grid gap-6"
          >
            {/* FECHA */}
            <div className="bg-white/70 backdrop-blur-xl rounded-[28px] border border-[#d4af3730] p-8 shadow-xl text-center">
              <p className="tracking-[0.3em] uppercase text-xs text-[#b89b5e]">
                Fecha
              </p>

              <div className="mt-6 flex justify-center items-center gap-6">
                <div>
                  <p className="text-5xl font-bold text-[#d4af37]">
                    {dayNumber}
                  </p>

                  <p className="uppercase tracking-[0.2em] text-xs mt-2">
                    {monthStr}
                  </p>
                </div>

                <div className="w-px h-16 bg-[#d4af3730]" />

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#a08d74]">
                    Hora
                  </p>

                  <p className="text-2xl mt-2 font-semibold">{data.hour}</p>
                </div>
              </div>
            </div>

            {/* COUNTDOWN */}

            <div className="bg-white/70 backdrop-blur-xl rounded-[28px] border border-[#d4af3730] p-8 shadow-xl">
              <p className="tracking-[0.3em] uppercase text-xs text-center text-[#b89b5e] mb-8">
                Cuenta regresiva
              </p>

              <CountDown data={data} />
            </div>

            <div className="    bg-white/70    backdrop-blur-xl    rounded-[28px]    border border-[#d4af3730]    p-8    shadow-xl    text-center  ">
              {" "}
              <p className="tracking-[0.3em] uppercase text-xs text-[#b89b5e]">
                {" "}
                Recepción{" "}
              </p>{" "}
              <div className="flex justify-center mt-5">
                {" "}
                <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M3 21h18" /> <path d="M5 21v-7l8 -4v11" />{" "}
                    <path d="M19 21v-10l-6 -4" />{" "}
                  </svg>{" "}
                </div>{" "}
              </div>{" "}
              <p className="mt-6 text-[#7e6d5e] leading-relaxed">
                {" "}
                {data.direction2}{" "}
              </p>{" "}
              <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#d4af37]/10">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <circle cx="12" cy="12" r="9" /> <path d="M12 7v5l3 3" />{" "}
                </svg>{" "}
                <span className="text-[#6b5b4d] font-medium">
                  {" "}
                  {data.hour2}{" "}
                </span>{" "}
              </div>
            </div>

            {/* UBICACIÓN */}

            <div className="bg-white/70 backdrop-blur-xl rounded-[28px] border border-[#d4af3730] p-8 shadow-xl text-center">
              <p className="tracking-[0.3em] uppercase text-xs text-[#b89b5e]">
                Ubicación
              </p>

              <p className="mt-6 text-[#7e6d5e]">{data.direction}</p>

              <div className="mt-8">
                {data.suscription === "intermediary" ? (
                  <iframe
                    src={data.location}
                    height="250"
                    className="w-full rounded-2xl border border-[#d4af3730]"
                    loading="lazy"
                  />
                ) : (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.location}
                    className="
                inline-flex
                items-center
                gap-1
                px-8
                py-4
                rounded-full
                bg-[#d4af37]
                hover:bg-[#caa02c]
                text-white
                font-semibold
                shadow-xl
                transition-all
                active:scale-95
              "
                  >
                    Ver ubicación
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* ================= GALERÍA ================= */}

          {data.images && (
            <div className="mt-20">
              <h3 className="text-center text-3xl font-serif mb-10 tracking-wide text-[#D4AF37]">
                Galería
              </h3>
              <Gallery images={data.images} />

              <p className="text-center text-xs tracking-[0.2em] uppercase text-[#a08d74] mt-6">
                Desliza para ver más
              </p>
            </div>
          )}

          {/* ================= CÓDIGO DE VESTIMENTA ================= */}
          <div className="mt-20    bg-white/70    backdrop-blur-xl    rounded-[28px]    border border-[#d4af3730]    p-8    shadow-xl    text-center  ">
            {" "}
            <p className="tracking-[0.3em] uppercase text-xs text-[#b89b5e]">
              {" "}
              Código de Vestimenta{" "}
            </p>{" "}
            <div className="flex justify-center mt-6">
              {" "}
              <div className="relative">
                {" "}
                {/* Glow */}{" "}
                <div className="absolute inset-0 blur-2xl bg-[#d4af37]/20 rounded-full scale-125" />{" "}
                {/* Icono */}{" "}
                <div className="relative w-20 h-20 rounded-full bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af3730]">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M6 2l3 6l-3 2v10h12v-10l-3 -2l3 -6" />{" "}
                    <path d="M9 8h6" />{" "}
                  </svg>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <p className="mt-8 text-2xl font-['Cormorant_Garamond'] text-[#6b5b4d]">
              {" "}
              {data.vestimentCode}{" "}
            </p>{" "}
            <p className="mt-3 text-sm italic text-[#9c8c7c]">
              {" "}
              Gracias por acompañarnos con una vestimenta acorde a la
              ocasión{" "}
            </p>
          </div>

          {/* ================= RSVP ================= */}
          <div
            ref={(el) => {
              if (el && !sectionsRef.current.includes(el)) {
                sectionsRef.current.push(el);
              }
            }}
            className="content-section mt-24 text-center"
          >
            <p className="font-['Cormorant_Garamond'] text-5xl text-[#6b5b4d]">
              Será un honor compartir este día contigo
            </p>

            <p className="mt-6 text-[#9c8c7c] italic">
              Acompáñanos a celebrar esta bendición
            </p>

            <a
              href={`https://api.whatsapp.com/send?phone=${data.phone}&text=${encodedMessage}`}
              target="_blank"
              className="
          inline-flex
          items-center
          gap-1
          mt-10
          px-10
          py-5
          rounded-full
          bg-[#d4af37]
          hover:bg-[#caa02c]
          text-white
          font-semibold
          shadow-[0_10px_30px_rgba(212,175,55,0.35)]
          transition-all
          active:scale-95
        "
            >
              Confirmar asistencia
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
            </a>

            <p
              className="
    italic
    text-[#8c7668]
    text-[22px]
    leading-relaxed
    font-['Cormorant_Garamond']
    max-w-[340px]
    mx-auto
    mt-10
  "
            >
              “Mi Bautizo es el inicio de un camino lleno de fe, amor y
              bendiciones de Dios.”
            </p>
            {/* DECORACIÓN FINAL */}
            <div className="opacity-40 mt-10 flex justify-center">
              <svg viewBox="0 0 200 20" width="180">
                <path
                  d="M0 10 Q50 0 100 10 T200 10"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>
      </article>

      {data.music && <MusicButton src={data.music} />}
    </>
  );
}
