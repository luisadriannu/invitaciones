import { useParams, Navigate } from "react-router-dom";
import events from "@/data/events";
import { templates } from "@/templates";

export default function Invitation() {
  const { tipo, slug } = useParams();

  const data = slug ? events[slug] : null;
  if (!data) return <Navigate to="/404" replace />;

  if (data.tipo !== tipo) {
    return <Navigate to="/404" replace />;
  }

  const Template = templates[data.tipo]?.[data.variant ?? "base"];

  if (!Template) return <Navigate to="/404" replace />;

  return <Template data={data} />;
}
