import type { EventData } from "@/types/EventData";
import elegant from "@/assets/pictures/vestimentCode/elegant.png";
import partyElegant from "@/assets/pictures/birthdayType/elegante.png";
import song from "@/assets/music/dios-bendiga-nuestro-amor.mp3";
import picture1 from "@/assets/pictures/joseyasminda/1.jpeg";
import picture2 from "@/assets/pictures/joseyasminda/2.jpeg";
import picture3 from "@/assets/pictures/joseyasminda/3.jpeg";
import picture4 from "@/assets/pictures/joseyasminda/4.jpeg";
import picture5 from "@/assets/pictures/joseyasminda/5.jpeg";
import picture6 from "@/assets/pictures/joseyasminda/6.jpeg";
import picture7 from "@/assets/pictures/joseyasminda/7.jpeg";
import picture8 from "@/assets/pictures/joseyasminda/8.jpeg";
import picture9 from "@/assets/pictures/joseyasminda/9.jpeg";
import picture10 from "@/assets/pictures/joseyasminda/10.jpeg";

const event: EventData = {
  tipo: "boda",
  variant: "personalized",
  name: "José Jersain y Asminda",
  date: "21 Marzo 2026",
  hour: "07:00 PM",
  link: "https://wa.me/5211234567890?text=Confirmo%203%20personas",
  location:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3789.775509516967!2d-100.87072534361943!3d18.220237121949253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84333be7208fcf1f%3A0x5893e93d7ddb3bf3!2sCampo%20Deportivo%20%22Patambo%22!5e0!3m2!1ses!2smx!4v1771860922826!5m2!1ses!2smx",
  images: [
    picture5,
    picture6,
    picture1,
    picture2,
    picture3,
    picture4,
    picture7,
    picture8,
    picture9,
    picture10,
  ],
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
    momBoy: "Marfelia Torres Elorza",
    dadBoy: "Isain Torres Hernández",
    momGirl: "Asminda Calderón Manzanarez",
    dadGirl: "Vicente García Díaz",
  },
  limitDate: "20 marzo 2026",
  messageConfirmation: `Hola 👋
Confirmo mi asistencia a la boda de Geovanny y Yuritzi 👰‍♀️🤵‍♂️💍
¡Gracias por la invitación!`,
  phrase:
    "Cuando nos conocimos, entendimos que nos uniría algo más fuerte que el tiempo y la distancia. Hoy damos gracias a Dios por habernos hecho coincidir en el camino y empezar una vida juntos",
};

export default event;
