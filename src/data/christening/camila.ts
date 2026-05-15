import type { EventData } from "@/types/EventData";
import picture1 from "@/assets/pictures/christening/camila/picture1.jpeg";
import picture2 from "@/assets/pictures/christening/camila/picture2.jpeg";
import picture3 from "@/assets/pictures/christening/camila/picture3.jpeg";
import picture4 from "@/assets/pictures/christening/camila/picture4.jpg";
import picture5 from "@/assets/pictures/christening/camila/picture5.jpg";
import picture6 from "@/assets/pictures/christening/camila/picture6.jpg";
import song from "@/assets/music/mi-princesita.mp3";

const event: EventData = {
  tipo: "bautizo",
  name: "Camila Vicenta Rivas De Jesús ",
  date: "07 Junio 2026",
  hour: "11:00 AM",
  hour2: "2:30 PM",
  link: "https://wa.me/5211234567890?text=Confirmo%203%20personas",
  location: "https://maps.app.goo.gl/KnuqwoAN5kMtcyqu5",
  // ubicationText: "Ciudad Altamirano",
  direction: "Catedral San Juan Bautista Cd. Altamirano",
  direction2: "Salón Quinta Karen",
  images: [picture1, picture2, picture3, picture4, picture5, picture6],
  vestimentCode: "Usar colores claros",
  phone: "527671160973",
  music: song,
  namesParents: {
    momGirl: "C.P Erika De Jesús Carlos",
    dadGirl: "Doc. Vicente Junior Rivas Negrete",
  },
  godparents: {
    men: "Lic. Juan Rivera Mendoza ",
    girl: "Mtra. Yaritza Betancourt Higuera",
  },
  suscription: "classic",
};

export default event;
