import type { EventData } from "@/types/EventData";
import CountDown from "@/components/CountDown";
import Gallery from "@/components/Gallery";
import { Heart, Gift, School, PartyPopper } from "lucide-react";
import { useEffect, useState } from "react";
import MusicButton from "@/components/MusicButton";

interface Props {
  data: EventData;
}

export default function JoseYAsmindaTemplate({ data }: Props) {
  const [opened, setOpened] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const encodedMessage = encodeURIComponent(data.messageConfirmation || "");

  useEffect(() => {
    document.body.style.overflow = opened ? "auto" : "hidden";
  }, [opened]);

  const [dia, mes] = data.date.split(" ");

  return (
    <>
      <article className="text-[#1a1a1a] font-['Montserrat'] bg-white">
        {/* Portada - Contenido Central */}
        <div
          className={`fixed inset-0 z-53 flex items-center justify-center p-4 
  transition-opacity duration-500 
  ${opened ? "opacity-0 pointer-events-none hidden" : "opacity-100"}`}
        >
          <div className="relative p-4 sm:p-8 max-w-2xl w-full text-center pointer-events-auto h-[95vh] flex flex-col justify-center">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 bg-linear-to-br from-white via-[#FFFEF9] to-[#F5F5DC] shadow-2xl">
              {/* Esquinas ornamentales */}
              <svg
                className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 text-[#D4AF37]"
                viewBox="0 0 100 100"
              >
                <path
                  d="M0,0 L0,40 Q0,0 40,0 Z"
                  fill="currentColor"
                  opacity="0.3"
                />
                <circle cx="15" cy="15" r="2" fill="currentColor" />
                <circle cx="25" cy="25" r="2" fill="currentColor" />
              </svg>
              <svg
                className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 text-[#D4AF37] rotate-90"
                viewBox="0 0 100 100"
              >
                <path
                  d="M0,0 L0,40 Q0,0 40,0 Z"
                  fill="currentColor"
                  opacity="0.3"
                />
                <circle cx="15" cy="15" r="2" fill="currentColor" />
                <circle cx="25" cy="25" r="2" fill="currentColor" />
              </svg>
              <svg
                className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 text-[#D4AF37] -rotate-90"
                viewBox="0 0 100 100"
              >
                <path
                  d="M0,0 L0,40 Q0,0 40,0 Z"
                  fill="currentColor"
                  opacity="0.3"
                />
                <circle cx="15" cy="15" r="2" fill="currentColor" />
                <circle cx="25" cy="25" r="2" fill="currentColor" />
              </svg>
              <svg
                className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 text-[#D4AF37] rotate-180"
                viewBox="0 0 100 100"
              >
                <path
                  d="M0,0 L0,40 Q0,0 40,0 Z"
                  fill="currentColor"
                  opacity="0.3"
                />
                <circle cx="15" cy="15" r="2" fill="currentColor" />
                <circle cx="25" cy="25" r="2" fill="currentColor" />
              </svg>
              <div className="absolute inset-4 sm:inset-6 border-2 border-[#D4AF37]/20"></div>
            </div>

            {/* Contenido */}
            <div className="relative z-10">
              {/* Corona decorativa superior */}
              <div className="mb-3 sm:mb-4">
                <svg
                  width="120"
                  height="30"
                  viewBox="0 0 150 40"
                  className="mx-auto"
                >
                  <path
                    d="M10,30 Q30,10 50,30 Q70,10 90,30 Q110,10 130,30"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle cx="50" cy="30" r="3" fill="#D4AF37" />
                  <circle cx="90" cy="30" r="3" fill="#D4AF37" />
                  <circle cx="70" cy="10" r="4" fill="#D4AF37" />
                </svg>
              </div>

              {/* Iniciales decorativas */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-white shadow-md">
                  <span className="text-xl sm:text-2xl font-serif text-[#D4AF37] italic">
                    J
                  </span>
                </div>
                <Heart size={20} className="text-[#D4AF37]" fill="#D4AF37" />
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-white shadow-md">
                  <span className="text-xl sm:text-2xl font-serif text-[#D4AF37] italic">
                    A
                  </span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-6xl font-serif text-[#D4AF37] mb-2 font-light">
                JOSÉ
              </h1>

              {/* Separador ornamental */}
              <div className="flex items-center justify-center gap-2 my-3">
                <svg width="30" height="15" viewBox="0 0 40 20">
                  <path
                    d="M0,10 Q10,5 20,10 Q30,15 40,10"
                    stroke="#D4AF37"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
                <span className="text-xl font-serif text-[#D4AF37] italic">
                  &
                </span>
                <svg width="30" height="15" viewBox="0 0 40 20">
                  <path
                    d="M0,10 Q10,5 20,10 Q30,15 40,10"
                    stroke="#D4AF37"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </div>

              <h1 className="text-4xl sm:text-6xl font-serif text-[#D4AF37] mb-4 font-light">
                ASMINDA
              </h1>

              {/* Línea decorativa */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#D4AF37]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                <div className="w-12 h-px bg-[#D4AF37]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                <div className="w-6 h-px bg-[#D4AF37]"></div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 italic mb-4 max-w-sm mx-auto px-4">
                {data.phrase}
              </p>

              <div className="mb-5">
                <div className="inline-block px-6 py-2 border-2 border-[#D4AF37] bg-white/80">
                  <p className="text-xs tracking-wide text-gray-700">
                    {data.date} • {data.hour}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpened(true)}
                className="bg-[#D4AF37] text-white px-12 py-3 text-[10px] tracking-[0.3em] uppercase shadow-xl hover:shadow-2xl hover:bg-[#B8941E] transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Abrir Invitación</span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>

              {/* Corona decorativa inferior */}
              <div className="mt-4">
                <svg
                  width="80"
                  height="25"
                  viewBox="0 0 100 30"
                  className="mx-auto"
                >
                  <path
                    d="M10,20 Q30,5 50,20 Q70,5 90,20"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle cx="30" cy="5" r="2" fill="#D4AF37" />
                  <circle cx="50" cy="20" r="3" fill="#D4AF37" />
                  <circle cx="70" cy="5" r="2" fill="#D4AF37" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Portada - Puerta Izquierda */}
        <div
          className={`fixed inset-y-0 left-0 w-1/2 z-50 bg-linear-to-br from-white to-[#F5F5DC] transition-transform duration-1000 ${opened ? "-translate-x-full" : ""}`}
        />

        {/* Portada - Puerta Derecha */}
        <div
          className={`fixed inset-y-0 right-0 w-1/2 z-50 bg-linear-to-bl from-white to-[#F5F5DC] transition-transform duration-1000 ${opened ? "translate-x-full" : ""}`}
        />

        {/* Hero */}
        <article className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
          <img
            src={data.images?.[2]}
            alt="Boda"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/30" />
          <div className="relative z-10 px-6 text-center">
            <h2 className="text-7xl font-serif mb-6 text-[#D4AF37] uppercase  ">
              José
              <br />
              <span className="text-5xl">&</span>
              <br />
              Asminda
            </h2>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto mb-6" />
            <h3 className="text-lg tracking-[0.3em] uppercase text-[#D4AF37]">
              {data.date}
            </h3>
          </div>
        </article>

        {/* Padres */}
        <article className="py-6 px-6 bg-white text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-2">
              <svg
                width="180"
                height="80"
                viewBox="0 0 200 80"
                className="mx-auto"
              >
                <g stroke="#D4AF37" strokeWidth="1.5" fill="none">
                  {/* Línea decorativa principal */}
                  <path d="M20 40 Q60 10 100 40 Q140 10 180 40" />

                  {/* Flores decorativas */}
                  <circle cx="60" cy="10" r="3" fill="#D4AF37" opacity="0.6" />
                  <circle cx="140" cy="10" r="3" fill="#D4AF37" opacity="0.6" />

                  {/* Corazón central */}
                  <circle cx="100" cy="40" r="6" fill="#D4AF37" />
                  <circle cx="96" cy="37" r="2" fill="white" opacity="0.5" />

                  {/* Hojas decorativas */}
                  <path d="M40 30 Q45 25 50 30" strokeWidth="1" opacity="0.7" />
                  <path
                    d="M150 30 Q155 25 160 30"
                    strokeWidth="1"
                    opacity="0.7"
                  />

                  {/* Puntos decorativos */}
                  <circle cx="30" cy="35" r="2" fill="#D4AF37" opacity="0.5" />
                  <circle cx="170" cy="35" r="2" fill="#D4AF37" opacity="0.5" />
                  <circle
                    cx="80"
                    cy="20"
                    r="1.5"
                    fill="#D4AF37"
                    opacity="0.4"
                  />
                  <circle
                    cx="120"
                    cy="20"
                    r="1.5"
                    fill="#D4AF37"
                    opacity="0.4"
                  />

                  {/* Líneas secundarias */}
                  <path
                    d="M25 45 Q100 50 175 45"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                </g>
              </svg>
            </div>
            <div className="space-y-6 mb-10">
              <div className="flex justify-center items-center gap-4">
                <p className="font-serif text-lg text-gray-700 w-48 text-right">
                  {data.namesParents?.dadBoy}
                </p>
                <span className="text-[#D4AF37]">&</span>
                <p className="font-serif text-lg text-gray-700 w-48 text-left">
                  {data.namesParents?.momBoy}
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="font-serif text-lg text-gray-700 w-48 text-right">
                  {data.namesParents?.dadGirl}
                </p>
                <span className="text-[#D4AF37]">&</span>
                <p className="font-serif text-lg text-gray-700 w-48 text-left">
                  {data.namesParents?.momGirl}
                </p>
              </div>
            </div>
            <p className="text-gray-500 italic text-base mb-2">
              Se complacen en anunciarles
            </p>
            <p className="text-gray-500 italic mb-8 text-base">
              el enlace matrimonial de sus hijos
            </p>
            <h2 className="text-5xl font-serif text-[#D4AF37] mb-12 uppercase">
              José
              <br />
              <span className="text-5xl">&</span>
              <br />
              Asminda
            </h2>
          </div>

          <div className="my-10 flex justify-center">
            <div
              className="
      relative flex items-center gap-6 px-10 py-4
      bg-white
      text-[#2b2b2b]
      rounded-2xl
      border border-black/10
      shadow-[0_12px_30px_rgba(0,0,0,0.08)]
      tracking-[0.25em]
      text-sm
      uppercase
    "
            >
              {/* Línea izquierda */}
              <span className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-px bg-black/20" />

              {/* Fecha */}
              <span className="font-medium text-lg">{`${dia} de ${mes}`}</span>

              {/* Separador */}
              <span className="w-2 h-2 rounded-full bg-black/40" />

              {/* Hora */}
              <span className="font-medium text-lg">{data.hour}</span>

              {/* Línea derecha */}
              <span className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-px bg-black/20" />
            </div>
          </div>

          <h3 className="text-2xl font-serif mb-10 text-[#D4AF37]">
            Faltan pocos días…
          </h3>

          {/* Decoración alrededor del contador */}
          <div className="relative max-w-3xl mx-auto px-8 py-12">
            {/* Borde decorativo completo */}
            <div className="absolute inset-0 border-2 border-[#D4AF37]/20 rounded-lg"></div>

            {/* Esquinas decorativas */}
            <div className="absolute -top-1 -left-1 w-12 h-12">
              <svg viewBox="0 0 50 50" className="w-full h-full">
                <path
                  d="M0,15 L0,0 L15,0"
                  stroke="#D4AF37"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="8" cy="8" r="2" fill="#D4AF37" />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-12 h-12">
              <svg viewBox="0 0 50 50" className="w-full h-full">
                <path
                  d="M50,15 L50,0 L35,0"
                  stroke="#D4AF37"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="42" cy="8" r="2" fill="#D4AF37" />
              </svg>
            </div>
            <div className="absolute -bottom-1 -left-1 w-12 h-12">
              <svg viewBox="0 0 50 50" className="w-full h-full">
                <path
                  d="M0,35 L0,50 L15,50"
                  stroke="#D4AF37"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="8" cy="42" r="2" fill="#D4AF37" />
              </svg>
            </div>
            <div className="absolute -bottom-1 -right-1 w-12 h-12">
              <svg viewBox="0 0 50 50" className="w-full h-full">
                <path
                  d="M50,35 L50,50 L35,50"
                  stroke="#D4AF37"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="42" cy="42" r="2" fill="#D4AF37" />
              </svg>
            </div>

            {/* Detalles florales en los lados */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <svg width="24" height="60" viewBox="0 0 24 60">
                <circle cx="12" cy="15" r="4" fill="#D4AF37" opacity="0.6" />
                <circle cx="12" cy="30" r="5" fill="#D4AF37" />
                <circle cx="12" cy="45" r="4" fill="#D4AF37" opacity="0.6" />
                <path
                  d="M12,15 L12,45"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  opacity="0.4"
                />
              </svg>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <svg width="24" height="60" viewBox="0 0 24 60">
                <circle cx="12" cy="15" r="4" fill="#D4AF37" opacity="0.6" />
                <circle cx="12" cy="30" r="5" fill="#D4AF37" />
                <circle cx="12" cy="45" r="4" fill="#D4AF37" opacity="0.6" />
                <path
                  d="M12,15 L12,45"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  opacity="0.4"
                />
              </svg>
            </div>

            {/* Adorno superior central */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-3">
              <Heart size={24} className="text-[#D4AF37]" fill="#D4AF37" />
            </div>

            <CountDown data={data} />
          </div>
        </article>

        {/* Galería */}
        {data.images && (
          <article className="py-14 bg-[#FAFAFA]">
            <h3 className="text-center text-3xl font-serif mb-10 tracking-wide text-[#D4AF37]">
              Nuestra Historia
            </h3>
            <Gallery images={data.images} />
            <p className="text-center text-xs text-gray-400 mt-4">
              Desliza para ver más →
            </p>
          </article>
        )}

        {/* Ceremonia */}
        <article className="py-14 px-8 bg-white">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#D4AF37] text-[#D4AF37]">
              <School size={40} />
            </div>
            <h4 className="text-2xl font-serif mb-3 text-[#D4AF37]">
              Ceremonia
            </h4>
            <p className="text-gray-600">
              {data.ceremonyWedding}
              <br />
              {data.ceremonyHour}
            </p>
          </div>
        </article>
        <hr className="border-dashed mb-6 w-50 mx-auto" />
        {/* Recepción */}
        <article className="py-14 px-8 bg-[#FAFAFA]">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#D4AF37] text-[#D4AF37]">
              <PartyPopper size={40} />
            </div>
            <h4 className="text-2xl font-serif mb-3 text-[#D4AF37]">
              Recepción
            </h4>
            <p className="text-gray-600">
              {data.ceremonyWedding}
              <br />
              {data.hour}
            </p>
          </div>
        </article>

        {/* Ubicación */}
        <article className="py-14 px-6 text-center bg-white">
          <hr className="border-dashed mb-6 w-50 mx-auto" />
          <h2 className="text-3xl font-serif mb-6 text-[#D4AF37]">Ubicación</h2>
          <p className="text-gray-600 mb-8">
            {data.date} - {data.hour}
          </p>
          {data.suscription === "intermediary" ||
          data.suscription === "premiun" ? (
            <div className="max-w-2xl mx-auto">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl border-4"
                style={{ borderColor: "#D4AF37" }}
              >
                <iframe
                  src={data.location}
                  height="350"
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition shadow-lg"
              // style={{ backgroundColor: colors.primary, color: "#fff" }}
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
        </article>

        {/* Dress Code */}
        <article className="py-14 px-8 bg-[#FAFAFA]">
          <div className="flex flex-col items-center gap-14 text-center">
            <div>
              <Gift
                size={64}
                strokeWidth={1.5}
                className="mx-auto mb-6 text-[#D4AF37]"
              />
              <h5 className="font-serif text-xl mb-2 text-[#D4AF37]">
                Mesa de regalos
              </h5>
              <p className="text-gray-600">Lluvia de sobres</p>
            </div>
          </div>
        </article>

        {/* RSVP */}
        <article className="py-20 px-8 text-white text-center bg-linear-to-br from-[#D4AF37] to-[#B8941E]">
          <div className="max-w-2xl mx-auto">
            {/* Decoración superior */}
            <div className="mb-8">
              <Heart
                size={48}
                className="mx-auto mb-4"
                fill="white"
                opacity="0.9"
              />
            </div>

            <h3 className="text-4xl sm:text-5xl font-serif mb-6">
              ¿Nos acompañas?
            </h3>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-white/50"></div>
              <p className="text-lg italic opacity-90">
                Tu presencia es nuestro mejor regalo
              </p>
              <div className="w-16 h-px bg-white/50"></div>
            </div>

            {/* Decoración inferior */}
            <div className="mt-8">
              <div className="flex items-center justify-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-3 h-3 rounded-full bg-white/80"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
              </div>
            </div>
          </div>
        </article>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/50">
            <div className="bg-white p-10 max-w-sm w-full text-center shadow-2xl">
              <h4 className="text-2xl font-serif mb-6 text-[#D4AF37]">
                Importante
              </h4>
              <p className="text-gray-700 mb-8">
                Únicamente pase para 2 personas
              </p>
              <button
                onClick={() => {
                  setShowModal(false);
                  window.open(
                    `https://api.whatsapp.com/send?phone=${data.phone}&text=${encodedMessage}`,
                    "_blank",
                  );
                }}
                className="w-full px-6 py-4 text-white font-semibold bg-[#D4AF37] hover:bg-[#B8941E] transition-colors"
              >
                Confirmar
              </button>
            </div>
          </div>
        )}

        <footer className="py-12 text-center text-gray-400 text-[10px] uppercase tracking-widest bg-white">
          {data.name} • {new Date().getFullYear()} • Con Amor
        </footer>
      </article>
      <MusicButton src={data.music || ""} />
    </>
  );
}
