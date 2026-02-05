import type { EventData } from "@/types/EventData";
import CountDown from "@/components/CountDown";
import Gallery from "@/components/Gallery";

interface Props {
  data: EventData;
}

export default function BirthdayModernTemplate({ data }: Props) {
  return (
    <article className="bg-black text-white min-h-screen px-6 py-12">
      <section className="text-center py-10">
        <h2 className="text-[120px] font-black text-fuchsia-500 drop-shadow-[0_0_20px_#d946ef]">
          {data.age}
        </h2>
        <h1 className="text-5xl font-bold mt-4">{data.name}</h1>
        <p className="mt-4 text-gray-400">
          🎉 Prepárate para una noche increíble
        </p>
      </section>

      <CountDown />

      <section className="mt-10 flex justify-center">
        <button className="px-8 py-4 bg-linear-to-r from-fuchsia-500 to-cyan-400 text-black font-bold rounded-full shadow-lg hover:scale-105 transition cursor-pointer">
          Confirmar asistencia
        </button>
      </section>

      <section className="mt-16">
        <h2 className="text-xl text-center mb-4">📍 Ubicación</h2>
        <iframe
          src={data.location}
          height="250"
          className="w-full rounded-lg border border-fuchsia-500"
          loading="lazy"
        />
      </section>

      {data.images && (
        <section className="mt-16">
          <Gallery images={data.images} />
        </section>
      )}

      <section className="mt-16 text-center text-gray-400">
        <p>Dress code: Casual / Fiesta</p>
        <p className="mt-2">🔥 El mejor regalo es que vengas</p>
      </section>
    </article>
  );
}
