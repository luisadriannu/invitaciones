import type { EventData } from "@/types/EventData";
import casual from "@/assets/pictures/vestimentCode/casual.png";
import retro from "@/assets//pictures/birthdayType/retro.png";

const event: EventData = {
  tipo: "cumple",
  variant: "base",
  name: "Eduardo",
  age: 32,
  date: "08 Febrero 2026",
  hour: "11:00 AM",
  link: "https://wa.me/5211234567890?text=Confirmo%203%20personas",
  images: [
    "https://images.pexels.com/photos/30852116/pexels-photo-30852116.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/30871234/pexels-photo-30871234.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/15075571/pexels-photo-15075571.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/20002703/pexels-photo-20002703.jpeg?auto=compress&cs=tinysrgb&w=500",
  ],
  location:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d37086.63733897054!2d-100.69238268838208!3d18.33464804038322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84332dc455373601%3A0xff220e710b3b4582!2sQuinta%20Maya!5e0!3m2!1ses!2smx!4v1770395540585!5m2!1ses!2smx",
  vestimentCode: "Casual",
  vestimentCodeImg: casual,
  phone: "522206283499",
  suscription: "intermediary",
  // music: song,
  partyType: retro,
};

export default event;
