import type { EventData } from "@/types/EventData";
import CountDown from "../../components/CountDown";

interface BirthdayTemplateProps {
  data: EventData;
}

export default function BirthdayTemplate({ data }: BirthdayTemplateProps) {
  return (
    <article className="text-center p-10">
      <div>
        <img src="" alt="" />
        <h1>Te invito a festejar mi cumpleaños {data.name}</h1>
        <p>date</p>
      </div>

      <CountDown />

      <div>
        <p>Nos encantaria que nos acompañes</p>
      </div>

      <div>
        <button className="cursor-pointer">Confirmar asistencia</button>
      </div>

      <div className="flex flex-col justify-center">
        <h2>Lugar</h2>
        <p>{data.date}</p>
        <p>Ubicacion</p>
        <iframe
          src={data.location}
          width="auto"
          height="250"
          style={{
            border: 0,
            margin: "1rem",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div>
        <p>Carrusel de fotos</p>
      </div>

      <div>
        <p>Codigo de vestimenta</p>
        <p>Mesa de regalos</p>
        <p>El mejor regalo sera tu presencia</p>
      </div>
    </article>
  );
}
