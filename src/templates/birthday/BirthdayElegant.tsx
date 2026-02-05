import type { EventData } from "@/types/EventData";
import CountDown from "@/components/CountDown";
import Gallery from "@/components/Gallery";

interface Props {
  data: EventData;
}

export default function BirthdayElegantTemplate({ data }: Props) {
  return (
    <article className="bg-[#0e0e0e] text-[#f5f5f5] min-h-screen px-6 py-16 font-serif">
      <section className="text-center max-w-2xl mx-auto">
        <h2 className="text-[100px] text-[#C9A24D] tracking-widest">
          {data.age}
        </h2>
        <h1 className="text-5xl mt-6">{data.name}</h1>
        <div className="w-24 h-[2px] bg-[#C9A24D] mx-auto my-6" />
        <p className="text-lg opacity-80">
          Acompáñanos a celebrar una fecha especial
        </p>
      </section>

      <CountDown />

      <section className="mt-14 text-center">
        <button className="px-8 py-3 border border-[#C9A24D] text-[#C9A24D] rounded-full hover:bg-[#C9A24D] hover:text-black transition">
          Confirmar asistencia
        </button>
      </section>

      <section className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-2xl mb-4 text-center">Lugar del evento</h2>
        <iframe
          src={data.location}
          height="260"
          className="w-full rounded-xl"
          loading="lazy"
        />
      </section>

      {data.images && (
        <section className="mt-20 max-w-3xl mx-auto">
          <Gallery images={data.images} />
        </section>
      )}

      <section className="mt-20 text-center text-sm opacity-70">
        <p>Código de vestimenta: Elegante</p>
        <p className="mt-2">Tu presencia es el mejor regalo</p>
      </section>
    </article>
  );
}
