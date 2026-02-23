import type { EventData } from "@/types/EventData";
import vestiment from "@/assets/pictures/vestimentCode/casual.png";
import partyNeon from "@/assets/pictures/birthdayType/neon.png";

const event: EventData = {
  tipo: "cumple",
  variant: "personalized",
  name: "Sofía Perez",
  age: 10,
  date: "14 Abril 2026",
  hour: "4:00 PM",
  direction: "Fuente de las Tarascas, Morelia, Michoacán",
  link: "https://wa.me/5211234567890?text=Confirmo%203%20personas",
  images: [
    "https://images.pexels.com/photos/8034018/pexels-photo-8034018.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/3662650/pexels-photo-3662650.jpeg?auto=compress&cs=tinysrgb&w=500",
  ],
  location: "https://maps.app.goo.gl/SHKEXHb6ZaNLzEcm8",
  vestimentCode: "Casual",
  vestimentCodeImg: vestiment,
  phone: "522206283499",
  suscription: "classic",
  // music: song,
  partyType: partyNeon,
};

export default event;
