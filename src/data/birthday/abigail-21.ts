import type { EventData } from "@/types/EventData";
import neon from "@/assets/pictures/vestimentCode/vestiment-neon.png";
import partyNeon from "@/assets/pictures/birthdayType/neon.png";

const event: EventData = {
  tipo: "cumple",
  variant: "modern",
  name: "Abigail Shesith",
  age: 21,
  date: "10 Febrero 2026",
  hour: "11:16 PM",
  link: "https://wa.me/5211234567890?text=Confirmo%203%20personas",
  images: [
    "https://images.pexels.com/photos/2114365/pexels-photo-2114365.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/36068378/pexels-photo-36068378.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/18604369/pexels-photo-18604369.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/33409270/pexels-photo-33409270.jpeg?auto=compress&cs=tinysrgb&w=500",
  ],
  location:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6317.156972930946!2d-101.1756539283774!3d19.70393671011761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0e0d2a8351c9%3A0x648455118dfa41fc!2sFuente%20de%20las%20Tarascas!5e0!3m2!1ses!2smx!4v1769631855925!5m2!1ses!2smx",
  vestimentCode: "Moderno",
  vestimentCodeImg: neon,
  phone: "522206283499",
  suscription: "classic",
  // music: song,
  partyType: partyNeon,
};

export default event;
