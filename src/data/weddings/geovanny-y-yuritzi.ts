import type { EventData } from "@/types/EventData";
import elegant from "@/assets/pictures/vestimentCode/elegant.png";
import partyElegant from "@/assets/pictures/birthdayType/elegante.png";
import song from "@/assets/music/ed-sheeran-perfect.mp3";
import picture1 from "@/assets/pictures/geovannyYYuritzi/1.jpeg";
import picture2 from "@/assets/pictures/geovannyYYuritzi/2.jpeg";
import picture3 from "@/assets/pictures/geovannyYYuritzi/3.jpeg";
import picture4 from "@/assets/pictures/geovannyYYuritzi/4.jpeg";
import picture5 from "@/assets/pictures/geovannyYYuritzi/5-main.jpeg";
import picture6 from "@/assets/pictures/geovannyYYuritzi/6.jpeg";

const event: EventData = {
  tipo: "boda",
  name: "Geovanny y Yuritzi",
  // age: 21,
  date: "18 Abril 2026",
  hour: "06:30 PM",
  link: "https://wa.me/5211234567890?text=Confirmo%203%20personas",
  location:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15156.949932477617!2d-100.55559563015764!3d18.244931726020553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cccd700265cd99%3A0xe4196c6fe7578e52!2sSal%C3%B3n%20San%20Carlos!5e0!3m2!1ses!2smx!4v1771598472543!5m2!1ses!2smx",
  images: [picture5, picture6, picture1, picture2, picture3, picture4],
  vestimentCode: "Elegante",
  vestimentCodeImg: elegant,
  phone: "524433627782",
  music: song,
  suscription: "intermediary",
  ceremonyWedding: "Salón San Carlos",
  ceremonyHour: "7:00 PM",
  partyType: partyElegant,
  colors: {
    primary: "#8B4513",
    secondary: "#D2B48C",
    accent: "#DC143C",
    background: "#FFFFFF",
  },
  petitionSpecially: true,
  namesParents: {
    momBoy: "Enf. Yolanda Avelino Soto",
    dadBoy: "Mtro. Miguel Santos Ángel",
    momGirl: "Dra. Angelica Gonzalez Rivera",
    dadGirl: "Dr. Armando Camargo Martínez ",
  },
  limitDate: "20 marzo 2026",
  messageConfirmation: `Hola 👋
Confirmo mi asistencia a la boda de Geovanny y Yuritzi 👰‍♀️🤵‍♂️💍
¡Gracias por la invitación!`,
  phrase: `"Por encima de todo vístanse de amor, que es el vínculo perfecto." Colosenses 3:14`,
};

export default event;
