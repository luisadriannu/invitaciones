import { useParams } from "react-router-dom";
import events from "@/data/events";
import { templates } from "@/templates";

export default function Invitation() {
  const { tipo, slug } = useParams();

  const data = slug ? events[slug] : null;
  if (!data) return <p>Invitación no encontrada</p>;

  if (data.tipo !== tipo) {
    return (
      <p className="text-black">
        La invitación no corresponde a esta categoría
      </p>
    );
  }

  const Template = templates[data.tipo]?.[data.variant ?? "base"];

  if (!Template) return <p>Plantilla no disponible</p>;

  return <Template data={data} />;
}
