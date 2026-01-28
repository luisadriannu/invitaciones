import type { EventData } from "@/types/EventData";

interface BirthdayTemplateProps {
  data: EventData;
}

export default function XVTemplate({ data }: BirthdayTemplateProps) {
  return (
    <div>
      <h2>XV Años {data.name}</h2>
    </div>
  );
}
