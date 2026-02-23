import { useEffect, useRef, useState } from "react";
import type { EventData } from "@/types/EventData";
import FlowerDecoration from "@/components/FlowerDecoration";
import DetailCard from "@/components/DetailCard";
import Gallery from "@/components/Gallery";
import CountDown from "@/components/CountDown";
import MusicButton from "@/components/MusicButton";

interface Props {
  data: EventData;
}

export default function BabyShowerBase({ data }: Props) {
  const [openProgress, setOpenProgress] = useState(0);
  const [hasOpened, setHasOpened] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);

  const message = `Hola 👋
Confirmo mi asistencia al baby shower
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

  const mesesMap: Record<string, number> = {
    Enero: 0,
    Febrero: 1,
    Marzo: 2,
    Abril: 3,
    Mayo: 4,
    Junio: 5,
    Julio: 6,
    Agosto: 7,
    Septiembre: 8,
    Octubre: 9,
    Noviembre: 10,
    Diciembre: 11,
  };

  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

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

  const [dayNumberStr, monthStr, yearStr] = data.date.split(" ");
  const dayNumber = Number(dayNumberStr);
  const monthIndex = mesesMap[monthStr];
  const year = Number(yearStr);

  const dateObj = new Date(year, monthIndex, dayNumber);
  const dayName = diasSemana[dateObj.getDay()];

  return (
    <>
      <article className="bg-[#fdf2f2] text-[#5d4037] font-['Montserrat'] overflow-x-hidden">
        {/* ================= PUERTAS ================= */}
        {!hasOpened && (
          <div
            ref={containerRef}
            className="fixed inset-0 z-50 flex pointer-events-none"
            style={{ opacity: 1 - openProgress }}
          >
            <div
              className="flex-1 bg-white shadow-xl transition-transform duration-700"
              style={{ transform: `translateX(-${openProgress * 100}%)` }}
            >
              <FlowerDecoration position="left" />
            </div>

            <div
              className="flex-1 bg-white shadow-xl transition-transform duration-700 relative"
              style={{ transform: `translateX(${openProgress * 100}%)` }}
            >
              <p className="absolute inset-0 flex items-center justify-center text-pink-400 text-3xl rotate-12 font-['Great_Vibes']">
                Desliza para abrir
              </p>
              <FlowerDecoration position="right" />
            </div>
          </div>
        )}

        {/* ================= CONTENIDO ================= */}
        <div className="max-w-md mx-auto relative pt-20 pb-24">
          {/* Bienvenida */}
          <div
            ref={(el) => {
              if (el && !sectionsRef.current.includes(el)) {
                sectionsRef.current.push(el);
              }
            }}
            className="content-section text-center mb-16 flex flex-col justify-center items-center"
          >
            <div className="floating-element">
              <svg width="200" height="200" viewBox="0 0 200 200">
                <defs>
                  <linearGradient
                    id="balloonGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#ffccd5", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#f06292", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M100,20 C135,20 160,50 160,85 C160,120 135,150 100,165 C65,150 40,120 40,85 C40,50 65,20 100,20"
                  fill="url(#balloonGrad)"
                />
                <rect x="90" y="165" width="20" height="20" fill="#a1887f" />
                <line
                  x1="100"
                  y1="165"
                  x2="90"
                  y2="185"
                  stroke="#795548"
                  strokeWidth="1"
                />
                <line
                  x1="100"
                  y1="165"
                  x2="110"
                  y2="185"
                  stroke="#795548"
                  strokeWidth="1"
                />

                <circle cx="100" cy="180" r="15" fill="#ffe0b2" />
                <circle cx="95" cy="178" r="1.5" fill="#333" />
                <circle cx="105" cy="178" r="1.5" fill="#333" />
                <path
                  d="M96,183 Q100,187 104,183"
                  stroke="#e57373"
                  fill="none"
                />
              </svg>
            </div>
            <p className="font-['Dancing_Script'] text-3xl text-pink-500 mt-6">
              “Una dulce niña está en camino…”
            </p>
          </div>
          {/* Evento */}
          <div
            ref={(el) => {
              if (el && !sectionsRef.current.includes(el)) {
                sectionsRef.current.push(el);
              }
            }}
            className="content-section"
          >
            <div className="bg-white/70 backdrop-blur rounded-2xl p-8 shadow-lg text-center">
              <p className="uppercase tracking-widest text-xs text-gray-400">
                Celebra con nosotros el
              </p>
              <h1 className="font-['Great_Vibes'] text-5xl text-pink-600">
                Baby Shower
              </h1>
              <p className="my-2">de</p>
              <h2 className="font-['Great_Vibes'] text-7xl text-pink-700">
                {data.name}
              </h2>
              <div className="opacity-60 mt-10 flex justify-center">
                <svg viewBox="0 0 100 10" width="50%">
                  <path
                    d="M0,5 Q25,0 50,5 T100,5"
                    fill="none"
                    stroke="#f06292"
                    stroke-width="1"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* Detalles */}
          <div
            ref={(el) => {
              if (el && !sectionsRef.current.includes(el)) {
                sectionsRef.current.push(el);
              }
            }}
            className="content-section grid gap-6 mt-14 px-4 text-center pb-8"
          >
            <DetailCard title="Prepárate" accent="right">
              {/* Marco */}
              <div className="my-8 flex justify-center">
                <div className="relative flex items-center gap-3 px-8 py-3 bg-white/70 backdrop-blur rounded-2xl shadow-lg">
                  {/* Marco esquina izquierda */}
                  <span className="absolute left-0 top-0 w-6 h-6 border-l-2 border-t-2 border-pink-400" />

                  {/* Marco esquina derecha */}
                  <span className="absolute right-0 bottom-0 w-6 h-6 border-r-2 border-b-2 border-pink-400" />

                  {/* Fecha */}
                  <span className="text-pink-600 text-xl font-semibold">
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
                    className="text-pink-400"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" />
                  </svg>

                  {/* Hora */}
                  <span className="text-pink-600 text-xl font-semibold">
                    {data.hour}
                  </span>
                </div>
              </div>
              <CountDown data={data} />
            </DetailCard>
            <DetailCard title="¿Cuándo?" accent="left">
              <div className="flex items-center justify-center gap-6 mt-4">
                {/* Día de la semana */}
                <div className="text-gray-500 text-sm font-medium">
                  {dayName}
                </div>

                {/* Separador */}
                <div className="w-px h-12 bg-gray-300" />

                {/* Día + Mes */}
                <div className="text-center">
                  <p className="text-4xl font-bold text-pink-600 leading-none">
                    {dayNumber}
                  </p>
                  <p className="text-xs tracking-widest text-gray-500 uppercase mt-1">
                    {monthStr}
                  </p>
                </div>

                {/* Separador */}
                <div className="w-px h-12 bg-gray-300" />

                {/* Hora */}
                <div className="text-gray-500 text-sm font-medium">
                  {data.hour}
                </div>
              </div>
            </DetailCard>
            <DetailCard title="Ubicación📍" accent="right">
              <p className="text-sm mb-2">{data.direction}</p>
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
            </DetailCard>
          </div>
          {data.images && (
            <div className="py-12 px-4 bg-[#fdfbf7]">
              <Gallery images={data.images} />

              <p className="text-center text-xs text-gray-400 mt-4">
                Desliza para ver más →
              </p>
            </div>
          )}
          {/* RSVP */}
          <div
            ref={(el) => {
              if (el && !sectionsRef.current.includes(el)) {
                sectionsRef.current.push(el);
              }
            }}
            className="content-section text-center mt-20"
          >
            <p className="font-['Dancing_Script'] text-4xl text-pink-600 mb-8">
              ¡Te esperamos!
            </p>

            <a
              href={`https://api.whatsapp.com/send?phone=${data.phone}&text=${encodedMessage}`}
              target="_blank"
              className="
            inline-block
            bg-linear-to-r from-pink-400 to-pink-600
            text-white
            px-10 py-4
            rounded-full
            font-semibold
            shadow-lg
            active:scale-95
            transition"
            >
              Confirmar asistencia
            </a>
          </div>{" "}
          <div className="opacity-30 mt-10">
            <svg viewBox="0 0 100 10" width="100%">
              <path
                d="M0,5 Q25,0 50,5 T100,5"
                fill="none"
                stroke="#f06292"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </article>
      {data.music && <MusicButton src={data.music} />}
    </>
  );
}
