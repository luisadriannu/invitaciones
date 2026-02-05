import type { EventData } from "@/types/EventData";
import CountDown from "@/components/CountDown";
import Gallery from "@/components/Gallery";
import balloons from "@/assets/pictures/balloons.png";
import balloonsMarc from "@/assets/pictures/balloons_marc.png";
import casual from "@/assets/pictures/code_vestiment_casual.png";

interface Props {
  data: EventData;
}

export default function BirthdayBaseTemplate({ data }: Props) {
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

  return (
    <article className="text-white bg-[#0b1020]">
      <div className="max-w-lg relative text-center mx-auto px-6 py-10">
        <img className="balloons" src={balloons} alt="Globos" />
        <img src={balloonsMarc} alt="Globos" />
        {/* Header */}
        <div className="pt-10">
          <h2 className="text-9xl font-bold text-amber-400">{data.age}</h2>
          <h1 className="mt-4 text-4xl font-semibold">{data.name}</h1>
          <p className="mt-3 text-gray-300">
            Te invito a festejar mi cumpleaños 🎉
          </p>
        </div>

        <div className="my-10 flex justify-center">
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
              className="absolute left-0 top-0 w-6 h-6 border-l-2 border-t-2 border-cyan-400
                     drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
            />

            {/* Marco esquina derecha */}
            <span
              className="absolute right-0 bottom-0 w-6 h-6 border-r-2 border-b-2 border-cyan-400
                     drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
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
            href={`https://api.whatsapp.com/send?phone=${data.phone}&text=${encodedMessage}`}
            className="
      inline-block
      px-6 py-3
      bg-amber-500
      rounded-full
      font-semibold
      hover:bg-amber-600
      transition
      my-8
    "
            target="_blank"
            rel="noreferer"
          >
            Confirmar asistencia
          </a>
        </div>

        {/* Location */}
        <div>
          <hr className="border-dashed mb-6 w-50 mx-auto" />
          <h2 className="text-2xl font-semibold mb-2">📍 Lugar</h2>
          <p className="mb-4">
            {data.date} - {data.hour}
          </p>
          <iframe
            src={data.location}
            height="250"
            className="w-full rounded-lg"
            loading="lazy"
          />
        </div>

        {/* Gallery */}
        {data.images && (
          <div className="mt-14">
            <hr className="border-dashed mb-6 w-50 mx-auto" />
            <h2 className="text-2xl font-semibold mb-4">Momentos</h2>
            <Gallery images={data.images} />
          </div>
        )}

        {/* Extra */}
        <div className="mt-10 text-gray-300">
          <p className="text-2xl font-semibold mb-4">Código de vestimenta</p>
          <img className="mt-4" src={casual} alt="Código de vestimenta" />
          <p className="text-lg">{data.vestimentCode}</p>
          <p className="mt-2">El mejor regalo será tu presencia🎁</p>
        </div>
      </div>
    </article>
  );
}
