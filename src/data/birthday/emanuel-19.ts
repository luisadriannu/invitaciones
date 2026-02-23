import type { EventData } from "@/types/EventData";
import elegant from "@/assets/pictures/vestimentCode/elegant.png";
import partyElegant from "@/assets/pictures/birthdayType/elegante.png";

const event: EventData = {
  tipo: "cumple",
  variant: "elegant",
  name: "Emanuel",
  age: 19,
  date: "15 Diciembre 2026",
  hour: "5:00 PM",
  link: "https://wa.me/5211234567890?text=Confirmo%203%20personas",
  images: [
    "https://images.pexels.com/photos/19368581/pexels-photo-19368581.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/3419697/pexels-photo-3419697.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/226737/pexels-photo-226737.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg?auto=compress&cs=tinysrgb&w=500",
  ],
  location:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4634.921962988055!2d-100.6795258539444!3d18.36847121668095!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84332c4dd4dbc2f1%3A0xa5a50a368e9b3e74!2s%22QUINTA%20KAREN%22!5e0!3m2!1ses!2smx!4v1770405285191!5m2!1ses!2smx",
  vestimentCode: "Elegante",
  vestimentCodeImg: elegant,
  phone: "522206283499",
  suscription: "intermediary",
  // music: song,
  partyType: partyElegant,
};

export default event;
