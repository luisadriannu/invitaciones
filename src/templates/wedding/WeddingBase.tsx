import type { EventData } from "@/types/EventData";
import CountDown from "@/components/CountDown";
import Gallery from "@/components/Gallery";
import { Heart, Church, GlassWater, Shirt, Gift } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  data: EventData;
}

export default function WeddingBaseTemplate({ data }: Props) {
  const message = `Hola 👋
Confirmo mi asistencia a la boda 💍
¡Gracias por la invitación!`;
  const [opened, setOpened] = useState(false);
  const encodedMessage = encodeURIComponent(message);

  useEffect(() => {
    document.body.style.overflow = opened ? "auto" : "hidden";
  }, [opened]);

  return (
    <article className="bg-[#fdfbf7] text-[#333] font-['Montserrat']">
      <div
        className={`
    fixed inset-0 z-50 flex items-center justify-center px-6
    bg-[#f4f1ea]
    transition-transform duration-1000 ease-in-out
    ${opened ? "-translate-y-full pointer-events-none" : "translate-y-0"}
  `}
      >
        <div className="border-2 border-[#c5a059] p-12 relative max-w-md w-full text-center">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f4f1ea] px-4">
            <Heart className="text-[#c5a059] fill-[#c5a059]" />
          </div>

          <p className="uppercase tracking-[0.3em] text-sm mb-4 text-gray-600">
            ¡Nos Casamos!
          </p>

          <h1 className="text-5xl mb-4 font-serif text-[#c5a059]">
            {data.name}
          </h1>

          <p className="italic text-gray-500 mb-8 font-serif">{data.phrase}</p>

          <p className="text-sm tracking-widest uppercase text-gray-500 mb-10">
            {data.date} • {data.hour}
          </p>

          {/* BOTÓN */}
          <button
            onClick={() => setOpened(true)}
            className="
        bg-[#c5a059]
        text-white
        px-8
        py-3
        rounded-full
        uppercase
        tracking-widest
        text-xs
        hover:bg-[#b38f4d]
        transition
        shadow-lg
        animate-bounce
        cursor-pointer
      "
          >
            Abrir Invitación
          </button>
        </div>

        {/* SWIPE INDICATOR */}
        <p className="absolute bottom-6 text-xs tracking-widest text-gray-400">
          DESLIZA HACIA ARRIBA
        </p>
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
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000" // o una imagen fija si prefieres
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

          <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-6">
            {data.name}
          </h2>

          <div className="w-16 h-px bg-white mx-auto mb-6 opacity-70" />

          <h3 className="text-lg tracking-widest uppercase opacity-90">
            {data.date}
          </h3>
        </div>
      </article>

      <article className="py-16 bg-white text-center px-6">
        <h3 className="text-2xl font-serif mb-8 text-[#c5a059]">
          Faltan pocos días…
        </h3>

        <CountDown data={data} />
      </article>

      {/* ================= GALERÍA ================= */}
      {data.images && (
        <article className="py-12 bg-[#fdfbf7]">
          <h3 className="text-center text-2xl font-serif mb-8 text-[#c5a059] uppercase tracking-widest">
            Nuestra Historia
          </h3>

          <Gallery images={data.images} />

          <p className="text-center text-xs text-gray-400 mt-4">
            Desliza para ver más →
          </p>
        </article>
      )}

      {/* ================= EVENTO ================= */}
      <article className="py-10 px-8 bg-white">
        <div className="max-w-md mx-auto space-y-12">
          {/* Ceremonia */}
          <div className="text-center">
            <div className="bg-[#c5a059]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#c5a059]">
              <Church />
            </div>
            <h4 className="text-xl font-serif font-bold mb-2">
              Ceremonia Religiosa
            </h4>
            <p className="text-gray-600 text-sm">
              {data.ubicationText}
              <br />
              {data.hour}
            </p>
          </div>

          {/* Recepción */}
          {/* <div className="text-center">
            <div className="bg-[#c5a059]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#c5a059]">
              <GlassWater />
            </div>
            <h4 className="text-xl font-serif font-bold mb-2">Recepción</h4>
            <p className="text-gray-600 text-sm">
              {data.receptionPlace}
              <br />
              {data.receptionHour}
            </p>
          </div> */}
        </div>
      </article>

      {/* ================= UBICACIÓN ================= */}
      <article className="py-10 px-6 bg-[#fdfbf7] text-center">
        <h2 className="text-2xl font-serif mb-4">📍 Ubicación</h2>

        <iframe
          src={data.location}
          height="250"
          className="w-full rounded-xl"
          loading="lazy"
        />
      </article>

      {/* ================= DRESS CODE / REGALOS ================= */}
      <article className="py-16 px-8 bg-white">
        <div className="grid grid-cols-2 gap-8 text-center">
          <div>
            <Shirt className="mx-auto mb-2 text-[#c5a059]" />
            <h5 className="font-serif font-bold">Dress Code</h5>
            <p className="text-xs text-gray-500 italic">{data.vestimentCode}</p>
          </div>

          <div>
            <Gift className="mx-auto mb-2 text-[#c5a059]" />
            <h5 className="font-serif font-bold">Mesa de regalos</h5>
            <p className="text-xs text-gray-500">Lluvia de sobres</p>
          </div>
        </div>
      </article>

      {/* ================= RSVP ================= */}
      <article className="py-20 px-8 bg-[#c5a059] text-white text-center">
        <h3 className="text-3xl font-serif mb-4">¿Nos acompañas?</h3>

        <p className="mb-8 text-sm opacity-90">
          Por favor, confirma tu asistencia
        </p>

        <a
          href={`https://api.whatsapp.com/send?phone=${data.phone}&text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            bg-white
            text-[#c5a059]
            px-10
            py-4
            rounded-full
            font-bold
            uppercase
            tracking-widest
            shadow-xl
            active:scale-95
            transition
          "
        >
          Confirmar Asistencia
        </a>
      </article>

      <footer className="py-12 text-center text-gray-400 text-[10px] uppercase tracking-widest">
        {data.name} • {new Date().getFullYear()} • Con Amor
      </footer>
    </article>
  );
}
