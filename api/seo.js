export const config = { runtime: "edge" };

import seoData from "./seo-data.json" assert { type: "json" };

const TIPOS = {
  bautizo: (name) => ({
    title: `Bautizo de ${name} 🕊️`,
    description: `Hola, soy ${name} y tengo el honor de invitarte a mi bautizo. ¡Será un día muy especial!`,
  }),
  cumple: (name) => ({
    title: `Cumpleaños de ${name} 🎉`,
    description: `Hola, soy ${name} y quiero que celebres mi cumpleaños conmigo. ¡No faltes!`,
  }),
  boda: (name) => ({
    title: `Boda de ${name} 💍`,
    description: `Con mucha alegría, ${name} te invita a compartir este día tan especial.`,
  }),
  babyshower: (name) => ({
    title: `Baby Shower de ${name} 🍼`,
    description: `${name} te invita a celebrar la llegada de su bebé. ¡Acompáñanos!`,
  }),
  xv: (name) => ({
    title: `XV Años de ${name} 👑`,
    description: `${name} te invita a celebrar sus quinceañera. ¡Será una noche inolvidable!`,
  }),
};

export default async function handler(req) {
  const url = new URL(req.url);

  const tipo = url.searchParams.get("tipo") || "";
  const slug = url.searchParams.get("nombre") || "";

  // Buscar datos reales del evento
  const evento = seoData[slug];

  let title = "Invitaciones Digitales ✨";
  let description =
    "Crea y comparte invitaciones digitales únicas y elegantes.";

  if (evento && TIPOS[evento.tipo]) {
    const data = TIPOS[evento.tipo](evento.name);
    title = data.title;
    description = data.description;
  } else if (tipo && slug && TIPOS[tipo]) {
    // Fallback: si no está en seo-data.json, usar el nombre del slug
    const nombre = slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    const data = TIPOS[tipo](nombre);
    title = data.title;
    description = data.description;
  }

  const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/icon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="es_MX" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Great+Vibes&display=swap" rel="stylesheet" />
  </head>
  <body>
    <section class="text-white" id="root"></section>
    <script type="module" src="/assets/main.js"></script>
  </body>
</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
