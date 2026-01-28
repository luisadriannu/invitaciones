import CountDown from "@/components/CountDown";
import type { EventData } from "@/types/EventData";

interface BirthdayTemplateProps {
  data: EventData;
}

export default function WeddingTemplate({ data }: BirthdayTemplateProps) {
  return (
    <article>
      <div> Boda de {data.name}</div>
      <CountDown />
    </article>
  );
}
