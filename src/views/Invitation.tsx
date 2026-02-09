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

  const templatesByType = templates[data.tipo as keyof typeof templates];
  const variant = (data.variant ?? "base") as "base" | "elegant" | "modern";
  const Template = templatesByType?.[variant as keyof typeof templatesByType];

  if (!Template) return <Navigate to="/404" replace />;

  return <Template data={data} />;
}
