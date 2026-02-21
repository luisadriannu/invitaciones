import type { EventData } from "@/types/EventData";
import elegant from "@/assets/pictures/vestimentCode/elegant.png";
import partyElegant from "@/assets/pictures/birthdayType/elegante.png";
import song from "@/assets/music/one-more-kiss.mp3";
import picture1 from "@/assets/pictures/joseyasminda/1.jpeg";
import picture2 from "@/assets/pictures/joseyasminda/2.jpeg";
import picture3 from "@/assets/pictures/joseyasminda/3.jpeg";
import picture4 from "@/assets/pictures/joseyasminda/4.jpeg";
import picture5 from "@/assets/pictures/joseyasminda/5.jpeg";
import picture6 from "@/assets/pictures/joseyasminda/6.jpeg";

const event: EventData = {
  tipo: "boda",
  name: "José Jersain y Asminda",
  date: "21 Marzo 2026",
  hour: "06:30 PM",
  link: "https://wa.me/5211234567890?text=Confirmo%203%20personas",
  location:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15156.949932477617!2d-100.55559563015764!3d18.244931726020553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cccd700265cd99%3A0xe4196c6fe7578e52!2sSal%C3%B3n%20San%20Carlos!5e0!3m2!1ses!2smx!4v1771598472543!5m2!1ses!2smx",
  images: [picture5, picture6, picture1, picture2, picture3, picture4],
  vestimentCode: "Elegante",
  vestimentCodeImg: elegant,
  phone: "524433627782",
  music: song,
  suscription: "premiun",
  ceremonyWedding: "Campo de fútbol Patambo Guerrero ",
  ceremonyHour: "6:00 PM",
  partyType: partyElegant,
  colors: {
    primary: "#8B4513",
    secondary: "#D2B48C",
    accent: "#DC143C",
    background: "#FFFFFF",
  },
  petitionSpecially: true,
  namesParents: {
    momBoy: "Yolanda Avelino Soto",
    dadBoy: "Miguel Santos Ángel ",
    momGirl: "Angelica Gonzalez Rivera ",
    dadGirl: "Armando Camargo Martínez ",
  },
  limitDate: "20 marzo 2026",
  messageConfirmation: `Hola 👋
Confirmo mi asistencia a la boda de Geovanny y Yuritzi 👰‍♀️🤵‍♂️💍
¡Gracias por la invitación!`,
  phrase:
    "Frase especial o versículo (opcional): Cuando nos conocimos, entendimos que nos uniría algo más fuerte que el tiempo y la distancia. Hoy damos gracias a Dios por habernos hecho coincidir en el camino y empezar una vida juntos",
};

export default event;
