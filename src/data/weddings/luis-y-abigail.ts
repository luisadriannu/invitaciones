import type { EventData } from "@/types/EventData";
import elegant from "@/assets/pictures/vestimentCode/elegant.png";
import partyElegant from "@/assets/pictures/birthdayType/elegante.png";

const event: EventData = {
  tipo: "boda",
  name: "Abigail y Luis",
  age: 21,
  date: "25 Diciembre 2026",
  hour: "08:00 PM",
  link: "https://wa.me/5211234567890?text=Confirmo%203%20personas",
  location:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15147.631191865834!2d-100.66959502306223!3d18.351490348379528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84332d4ce218ab4d%3A0x398c978a330d9f3e!2sLa%20Casona%20Jard%C3%ADn%20de%20eventos%20sociales!5e0!3m2!1ses!2smx!4v1770410022152!5m2!1ses!2smx",

  images: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
  ],
  vestimentCode: "Formal",
  vestimentCodeImg: elegant,
  phone: "522206283499",
  // music: song,
  suscription: "intermediary",
  ceremonyWedding: "Catedral de Ciudad Altamirano",
  ceremonyHour: "6:00 PM",
  partyType: partyElegant,
};

export default event;
