import { useCountdown } from "@/hooks/useCountdown";
import type { EventData } from "@/types/EventData";
import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

interface Props {
  data: EventData;
}

export default function CountDown({ data }: Props) {
  const hasTriggered = useRef(false);

  const meses: Record<string, number> = {
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

  const [dia, mes, año] = data.date.split(" ");
  const [hora, periodo] = data.hour.split(" ");
  const [horas, minutos] = hora.split(":").map(Number);
  const hora24 =
    periodo === "PM" && horas !== 12
      ? horas + 12
      : horas === 12 && periodo === "AM"
        ? 0
        : horas;

  const targetDate = new Date(
    Number(año),
    meses[mes],
    Number(dia),
    hora24,
    minutos,
  );
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  useEffect(() => {
    if (
      days === 0 &&
      hours === 0 &&
      minutes === 0 &&
      seconds === 0 &&
      !hasTriggered.current
    ) {
      hasTriggered.current = true;
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [days, hours, minutes, seconds]);

  const isFinished =
    days === 0 && hours === 0 && minutes === 0 && seconds === 0;

  return (
    <div>
      {isFinished ? (
        <p className="text-3xl font-bold text-amber-400">
          ¡La fiesta ha comenzado!
        </p>
      ) : (
        <div className="flex gap-4 justify-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">{days}</span>
            <span className="text-sm">Días</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">{hours}</span>
            <span className="text-sm">Horas</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">{minutes}</span>
            <span className="text-sm">Minutos</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">{seconds}</span>
            <span className="text-sm">Segundos</span>
          </div>
        </div>
      )}
    </div>
  );
}
