import { useCountdown } from "../hooks/useCountdown";

export default function CountDown() {
  const targetDate = new Date("2026-10-14T20:00:00");
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div>
      <p>Contador de dias</p>
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
    </div>
  );
}
