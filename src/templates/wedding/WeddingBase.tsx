import type { EventData } from "@/types/EventData";
import CountDown from "@/components/CountDown";
import Gallery from "@/components/Gallery";
import {
  Heart,
  Gift,
  School,
  Utensils,
  PartyPopper,
  Music,
} from "lucide-react";
import { useEffect, useState } from "react";
import MusicButton from "@/components/MusicButton";

interface Props {
  data: EventData;
}

export default function WeddingBaseTemplate({ data }: Props) {
  const message = data.messageConfirmation || "";
  const [opened, setOpened] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const encodedMessage = encodeURIComponent(message);

  const isSpecialGuest =
    typeof window !== "undefined" &&
    window.location.pathname.includes("yuritzi-y-geovanny");

  const colors = {
    primary: data.colors?.primary || "#c5a059",
    secondary: data.colors?.secondary || "#333",
    accent: data.colors?.accent || "#b38f4d",
    background: data.colors?.background || "#fdfbf7",
  };

  useEffect(() => {
    document.body.style.overflow = opened ? "auto" : "hidden";
  }, [opened]);

  const handleConfirm = () => {
    if (data.petitionSpecially && !isSpecialGuest) {
      setShowModal(true);
    } else {
      window.open(
        `https://api.whatsapp.com/send?phone=${data.phone}&text=${encodedMessage}`,
        "_blank",
      );
    }
  };

  const handleModalConfirm = () => {
    setShowModal(false);
    window.open(
      `https://api.whatsapp.com/send?phone=${data.phone}&text=${encodedMessage}`,
      "_blank",
    );
  };
  const meses: Record<string, string> = {
    Enero: "Enero",
    Febrero: "Febrero",
    Marzo: "Marzo",
    Abril: "Abril",
    Mayo: "Mayo",
    Junio: "Junio",
    Julio: "Julio",
    Agosto: "Agosto",
    Septiembre: "Septiembre",
    Octubre: "Octubre",
    Noviembre: "Noviembre",
    Diciembre: "Diciembre",
  };

  const [dia, mes] = data.date.split(" ");

  return (
    <>
      <article
        className="text-[#333] font-['Montserrat']"
        style={{ backgroundColor: colors.background }}
      >
        <div
          className={`
    fixed inset-0 z-50 flex items-center justify-center px-6
    bg-[#f4f1ea] 
    transition-transform duration-1000 ease-in-out 
    ${opened ? "-translate-y-full pointer-events-none" : "translate-y-0"}
  `}
        >
          <div
            className="border-2 p-12 relative max-w-md w-full text-center"
            style={{ borderColor: colors.primary }}
          >
            {/* Decoración floral esquina superior izquierda */}
            <svg
              className="absolute top-0 left-0 w-24 h-24"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0 Q15 15 0 30 Q10 20 20 30 Q15 15 30 0"
                fill={colors.primary}
                opacity="0.2"
              />
              <circle
                cx="15"
                cy="15"
                r="3"
                fill={colors.primary}
                opacity="0.4"
              />
              <path
                d="M5 5 Q12 8 10 15 M10 5 Q8 12 15 10"
                stroke={colors.primary}
                strokeWidth="1"
                opacity="0.3"
              />
            </svg>

            {/* Decoración floral esquina superior derecha */}
            <svg
              className="absolute top-0 right-0 w-24 h-24"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 0 Q85 15 100 30 Q90 20 80 30 Q85 15 70 0"
                fill={colors.primary}
                opacity="0.2"
              />
              <circle
                cx="85"
                cy="15"
                r="3"
                fill={colors.primary}
                opacity="0.4"
              />
              <path
                d="M95 5 Q88 8 90 15 M90 5 Q92 12 85 10"
                stroke={colors.primary}
                strokeWidth="1"
                opacity="0.3"
              />
            </svg>

            {/* Decoración floral esquina inferior izquierda */}
            <svg
              className="absolute bottom-0 left-0 w-24 h-24"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 100 Q15 85 0 70 Q10 80 20 70 Q15 85 30 100"
                fill={colors.primary}
                opacity="0.2"
              />
              <circle
                cx="15"
                cy="85"
                r="3"
                fill={colors.primary}
                opacity="0.4"
              />
              <path
                d="M5 95 Q12 92 10 85 M10 95 Q8 88 15 90"
                stroke={colors.primary}
                strokeWidth="1"
                opacity="0.3"
              />
            </svg>

            {/* Decoración floral esquina inferior derecha */}
            <svg
              className="absolute bottom-0 right-0 w-24 h-24"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 100 Q85 85 100 70 Q90 80 80 70 Q85 85 70 100"
                fill={colors.primary}
                opacity="0.2"
              />
              <circle
                cx="85"
                cy="85"
                r="3"
                fill={colors.primary}
                opacity="0.4"
              />
              <path
                d="M95 95 Q88 92 90 85 M90 95 Q92 88 85 90"
                stroke={colors.primary}
                strokeWidth="1"
                opacity="0.3"
              />
            </svg>

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f4f1ea] px-4">
              <Heart style={{ color: colors.primary, fill: colors.primary }} />
            </div>

            <p className="uppercase tracking-[0.3em] text-sm mb-4 text-gray-600">
              ¡Nos Casamos!
            </p>

            <h1
              className="text-4xl sm:text-5xl mb-4 font-serif uppercase leading-tight break-words"
              style={{ color: colors.primary }}
            >
              {data.name.split(" y ").map((name, index, array) => (
                <span key={index}>
                  {name}
                  {index < array.length - 1 && (
                    <>
                      <br />
                      <span className="text-3xl inline-block my-1">y</span>
                      <br />
                    </>
                  )}
                </span>
              ))}
            </h1>

            <p className="italic text-gray-500 mb-8 font-serif">
              {data.phrase}
            </p>

            <p className="text-sm tracking-widest uppercase text-gray-500 mb-10">
              {data.date} • {data.hour}
            </p>

            {/* BOTÓN */}
            <button
              onClick={() => setOpened(true)}
              className="
        text-white
        px-8
        py-3
        rounded-full
        uppercase
        tracking-widest
        text-xs
        transition
        shadow-lg
        animate-bounce
        cursor-pointer
      "
              style={{ backgroundColor: colors.primary }}
            >
              Abrir Invitación
            </button>
          </div>
        </div>

        {/* ================= COUNTDOWN ================= */}
        <article
          className="
    relative
    min-h-screen
    w-full
    flex
    items-center
    justify-center
    text-center
    text-white
    overflow-hidden
  "
        >
          {/* Fondo */}
          <img
            src={
              data.images?.[2] ??
              "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000"
            }
            alt="Boda"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Contenido */}
          <div className="relative z-10 px-6 max-w-3xl">
            <h3 className="text-sm tracking-[0.3em] uppercase mb-4 opacity-90">
              ¡Nos casamos!
            </h3>

            <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-6 uppercase">
              {data.name.split(" y ").map((name, index, array) => (
                <span key={index}>
                  {name}
                  {index < array.length - 1 && (
                    <>
                      <br />
                      <span className="text-3xl inline-block my-1">y</span>
                      <br />
                    </>
                  )}
                </span>
              ))}
            </h2>

            <div className="w-16 h-px bg-white mx-auto mb-6 opacity-70" />

            <h3 className="text-lg tracking-widest uppercase opacity-90">
              {data.date}
            </h3>
          </div>
        </article>

        <article className="my-14 bg-white text-center px-6 relative overflow-hidden">
          {/* Flores decorativas esquina superior izquierda */}
          <svg
            className="absolute top-0 left-0 w-32 h-32 opacity-20"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="8" fill={colors.primary} />
            <circle cx="35" cy="15" r="6" fill={colors.primary} />
            <circle cx="15" cy="35" r="6" fill={colors.primary} />
            <path d="M20 20 Q30 10 40 20 Q30 30 20 20" fill={colors.accent} />
            <path d="M20 20 Q10 30 20 40 Q30 30 20 20" fill={colors.accent} />
          </svg>

          {/* Flores decorativas esquina superior derecha */}
          <svg
            className="absolute top-0 right-0 w-32 h-32 opacity-20"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="20" r="8" fill={colors.primary} />
            <circle cx="85" cy="15" r="6" fill={colors.primary} />
            <circle cx="105" cy="35" r="6" fill={colors.primary} />
            <path d="M100 20 Q90 10 80 20 Q90 30 100 20" fill={colors.accent} />
            <path
              d="M100 20 Q110 30 100 40 Q90 30 100 20"
              fill={colors.accent}
            />
          </svg>
          {/* <h2
            className="text-3xl font-serif mb-8"
            style={{ color: colors.primary }}
          >
            Te invitamos a nuestra boda
          </h2> */}

          {data.namesParents && (
            <div className="max-w-2xl mx-auto mb-10">
              {/* Separador elegante */}
              <div className="relative flex items-center justify-center mb-5 w-full">
                {/* Línea izquierda */}
                <div className="flex-1 h-px bg-linear-to-r from-transparent via-[#b87333] to-[#b87333]" />

                {/* Ornamento central */}
                <div className="px-6">
                  <svg
                    width="140"
                    height="60"
                    viewBox="0 0 200 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="#b87333" strokeWidth="2" fill="none">
                      <path d="M20 40 Q60 10 100 40 Q140 10 180 40" />
                      <path d="M60 40 Q80 70 100 40 Q120 70 140 40" />
                      <circle cx="100" cy="40" r="4" fill="#b87333" />
                      <path d="M95 50 Q100 60 105 50" />
                    </g>
                  </svg>
                </div>

                {/* Línea derecha */}
                <div className="flex-1 h-px bg-linear-to-l from-transparent via-[#b87333] to-[#b87333]" />
              </div>
              <div className="space-y-6 mb-8">
                {/* Padres del novio */}
                <div className="flex justify-center gap-8">
                  <p
                    className="font-serif text-lg"
                    style={{ color: colors.secondary }}
                  >
                    {data.namesParents.dadBoy}
                  </p>
                  <p
                    className="font-serif text-lg"
                    style={{ color: colors.secondary }}
                  >
                    {data.namesParents.momBoy}
                  </p>
                </div>

                {/* Padres de la novia */}
                <div className="flex justify-center gap-8">
                  <p
                    className="font-serif text-lg"
                    style={{ color: colors.secondary }}
                  >
                    {data.namesParents.dadGirl}
                  </p>
                  <p
                    className="font-serif text-lg"
                    style={{ color: colors.secondary }}
                  >
                    {data.namesParents.momGirl}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 italic text-lg">
                Se complacen en anunciarles
              </p>
              <p className="text-gray-600 italic mb-6 text-lg">
                el enlace matrimonial de sus hijos
              </p>

              <h2
                className="text-4xl font-serif italic uppercase"
                style={{ color: colors.primary }}
              >
                {data.name}
              </h2>
            </div>
          )}

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
              <span className="font-medium text-lg">{`${dia} de ${meses[mes]}`}</span>

              {/* Separador */}
              <span className="w-2 h-2 rounded-full bg-black/40" />

              {/* Hora */}
              <span className="font-medium text-lg">{data.hour}</span>

              {/* Línea derecha */}
              <span className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-px bg-black/20" />
            </div>
          </div>
          <h3
            className="text-2xl font-serif mb-8"
            style={{ color: colors.primary }}
          >
            Faltan pocos días…
          </h3>

          <CountDown data={data} />
          <hr className="border-dashed mb-6 w-50 mx-auto" />
        </article>

        {/* ================= GALERÍA ================= */}
        {data.images && (
          <article
            className="py-10"
            style={{ backgroundColor: colors.background }}
          >
            <div className="max-w-3xl mx-auto px-6">
              <h3
                className="text-center text-2xl font-serif mb-8 uppercase tracking-widest"
                style={{ color: colors.primary }}
              >
                Nuestra Historia
              </h3>

              <Gallery images={data.images} />

              <p className="text-center text-xs text-gray-400 mt-4">
                Desliza para ver más →
              </p>
            </div>
          </article>
        )}

        {/* ================= EVENTO ================= */}
        <article className="py-10 px-8 bg-white">
          <div className="max-w-md mx-auto space-y-12">
            {/* Ceremonia */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{
                  backgroundColor: `${colors.primary}1A`,
                  color: colors.primary,
                }}
              >
                <School />
              </div>
              <h4 className="text-xl font-serif font-bold mb-2">
                Ceremonia Civil
              </h4>
              <p className="text-gray-600 text-sm">
                {data.ceremonyWedding}
                <br />
                {data.ceremonyHour}
              </p>
            </div>
          </div>
        </article>

        {data.petitionSpecially && (
          <>
            {/* ================= PROGRAMA ================= */}
            <article
              className="py-16 px-6"
              style={{ backgroundColor: colors.background }}
            >
              <h3
                className="text-center text-3xl font-serif mb-12"
                style={{ color: colors.primary }}
              >
                Programa
              </h3>

              <div className="max-w-md mx-auto relative">
                {/* Línea vertical */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5"
                  style={{ backgroundColor: colors.secondary }}
                />

                <div className="space-y-12">
                  {/* Ceremonia Civil */}
                  <div className="flex items-center gap-6">
                    <div className="w-1/2 flex justify-end pr-6">
                      <School />
                    </div>
                    <div
                      className="w-3 h-3 rounded-full shrink-0 relative z-10"
                      style={{ backgroundColor: colors.primary }}
                    />
                    <div className="w-1/2 pl-6">
                      <p
                        className="text-sm"
                        style={{ color: colors.secondary }}
                      >
                        7:00 p.m.
                      </p>
                      <h4 className="font-serif text-lg">Ceremonia Civil</h4>
                    </div>
                  </div>

                  {/* Cena */}
                  <div className="flex items-center gap-6">
                    <div className="w-1/2 flex justify-end pr-6">
                      <Utensils />
                    </div>
                    <div
                      className="w-3 h-3 rounded-full shrink-0 relative z-10"
                      style={{ backgroundColor: colors.accent }}
                    />
                    <div className="w-1/2 pl-6">
                      <p
                        className="text-sm"
                        style={{ color: colors.secondary }}
                      >
                        8:00 p.m.
                      </p>
                      <h4 className="font-serif text-lg">Cena</h4>
                    </div>
                  </div>

                  {/* Programa */}
                  <div className="flex items-center gap-6">
                    <div className="w-1/2 flex justify-end pr-6">
                      <Music />
                    </div>
                    <div
                      className="w-3 h-3 rounded-full shrink-0 relative z-10"
                      style={{ backgroundColor: colors.accent }}
                    />
                    <div className="w-1/2 pl-6">
                      <p
                        className="text-sm"
                        style={{ color: colors.secondary }}
                      >
                        9:00 p.m.
                      </p>
                      <h4 className="font-serif text-lg">Programa</h4>
                    </div>
                  </div>

                  {/* Celebración */}
                  <div className="flex items-center gap-6">
                    <div className="w-1/2 flex justify-end pr-6">
                      <PartyPopper />
                    </div>
                    <div
                      className="w-3 h-3 rounded-full shrink-0 relative z-10"
                      style={{ backgroundColor: colors.accent }}
                    />
                    <div className="w-1/2 pl-6">
                      <p
                        className="text-sm"
                        style={{ color: colors.secondary }}
                      >
                        10:00 p.m.
                      </p>
                      <h4 className="font-serif text-lg">
                        ¡Disfruten la fiesta!
                      </h4>
                    </div>
                  </div>

                  {/* Despedida */}
                  <div className="flex items-center gap-6">
                    <div className="w-1/2 flex justify-end pr-6">
                      <Heart />
                    </div>
                    <div
                      className="w-3 h-3 rounded-full shrink-0 relative z-10"
                      style={{ backgroundColor: colors.accent }}
                    />
                    <div className="w-1/2 pl-6">
                      <p
                        className="text-sm"
                        style={{ color: colors.secondary }}
                      >
                        1:00 a.m.
                      </p>
                      <h4 className="font-serif text-lg">
                        Felices para siempre
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </>
        )}

        {/* ================= UBICACIÓN ================= */}
        <article
          className="py-10 px-6 text-center"
          style={{ backgroundColor: colors.background }}
        >
          <h2
            className="text-2xl font-serif mb-4"
            style={{ color: colors.primary }}
          >
            Ubicación📍
          </h2>
          <p className="text-gray-600 mb-6">
            {data.date} - {data.hour}
          </p>
          {data.suscription === "intermediary" ? (
            <div className="max-w-2xl mx-auto">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl border-4"
                style={{ borderColor: colors.secondary }}
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
              style={{ backgroundColor: colors.primary, color: "#fff" }}
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

        {/* ================= DRESS CODE / REGALOS ================= */}
        <article className="py-12 px-8 bg-white">
          <div className="flex flex-col items-center gap-12 text-center">
            <div className="flex flex-col items-center">
              <svg
                viewBox="0 0 24 24"
                width="56"
                height="56"
                fill="none"
                stroke={data.colors?.secondary}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 3l3 2 3-2" />
                <path d="M9 3l-2 4 2 2h6l2-2-2-4" />
                <path d="M9 9l-4 10h14l-4-10" />
              </svg>
              <h5 className="font-serif font-bold">Código de vestimenta</h5>
              <p className="text-xs text-gray-500 italic">
                {data.vestimentCode}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Gift
                size={56}
                strokeWidth={1.5}
                className="mb-4"
                style={{
                  color: data.colors?.secondary,
                }}
              />
              <h5 className="font-serif font-bold">Mesa de regalos</h5>
              <p className="text-xs text-gray-500">Lluvia de sobres</p>
            </div>
          </div>
        </article>

        {/* ================= RSVP ================= */}
        <article
          className="py-16 px-8 text-white text-center"
          style={{ backgroundColor: colors.primary }}
        >
          <h3 className="text-4xl font-serif mb-4">¿Nos acompañas?</h3>

          <p className="mb-8 text-xl opacity-90">
            Por favor, confirma tu asistencia
          </p>

          {data.limitDate && !isSpecialGuest && (
            <p className="mb-6 text-lg opacity-80">
              Fecha límite: {data.limitDate}
            </p>
          )}

          <button
            onClick={handleConfirm}
            className="
            inline-block
            bg-white
            
            px-10
            py-4
            rounded-full
            font-bold
            uppercase
            tracking-widest
            shadow-xl
            active:scale-95
            transition
            cursor-pointer
            border-none
          "
            style={{
              color: data.colors?.primary,
            }}
          >
            Confirmar Asistencia
          </button>
        </article>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/50">
            <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">
              <h4
                className="text-xl font-serif mb-4 uppercase"
                style={{ color: colors.primary }}
              >
                Importante
              </h4>
              <p className="text-gray-700 mb-6">
                Únicamente pase para 2 personas
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleModalConfirm}
                  className="flex-1 px-6 py-3 rounded-full text-white font-semibold transition"
                  style={{ backgroundColor: colors.primary }}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        )}

        <footer className="py-12 text-center text-gray-400 text-[10px] uppercase tracking-widest">
          {data.name} • {new Date().getFullYear()} • Con Amor
        </footer>
      </article>
      <MusicButton src={data.music || ""} />
    </>
  );
}
