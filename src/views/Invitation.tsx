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
  const variant = (data.variant ?? "base") as "base" | "elegant" | "modern" | "personalized";
  
  // Si es personalizado, intentar cargar el template específico del slug
  let Template;
  if (variant === "personalized" && slug) {
    try {
      // Importación dinámica del template personalizado
      const personalizedTemplates = import.meta.glob('@/templates/**/personalized/*.tsx', { eager: true });
      const templatePath = Object.keys(personalizedTemplates).find(path => 
        path.includes(`/${slug}.tsx`)
      );
      
      if (templatePath) {
        Template = (personalizedTemplates[templatePath] as any).default;
      }
    } catch (error) {
      console.error('Error loading personalized template:', error);
    }
  }
  
  // Si no se encontró template personalizado, usar el de la variante
  if (!Template) {
    Template = templatesByType?.[variant as keyof typeof templatesByType];
  }

  if (!Template) return <Navigate to="/404" replace />;

  return <Template data={data} />;
}
