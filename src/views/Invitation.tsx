import { useParams } from "react-router-dom";
import events from "@/data/events";
import BirthdayTemplate from "@/templates/birthday/BirthdayTemplate";
import WeddingTemplate from "@/templates/wedding/WeddingTemplate";
import XVTemplate from "@/templates/xv/XVTemplate";

const templates = {
  cumple: BirthdayTemplate,
  boda: WeddingTemplate,
  xv: XVTemplate,
} as const;

export default function Invitation() {
  const { type, slug } = useParams();

  const dataE = slug ? events[slug] : null;

  if (!dataE) return <p>Invitación no encontrada</p>;

  const Template = type ? templates[type as keyof typeof templates] : null;

  return Template ? <Template data={dataE} /> : <p>Tipo de evento no válido</p>;
}
