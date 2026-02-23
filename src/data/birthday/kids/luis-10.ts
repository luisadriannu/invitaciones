import type { EventData } from "@/types/EventData";
import vestiment from "@/assets/pictures/vestimentCode/casual.png";
import partyNeon from "@/assets/pictures/birthdayType/neon.png";
import picture1 from "@/assets/pictures/birthdayPictures/cumple-luis.jpeg";
import picture2 from "@/assets/pictures/birthdayPictures/cumple-luis-2.jpeg";

const event: EventData = {
  tipo: "cumple",
  variant: "personalized",
  name: "Luis Fabricio",
  age: 10,
  date: "25 Enero 2027",
  hour: "5:00 PM",
  direction: "Fuente de las Tarascas, Morelia, Michoacán",
  link: "https://wa.me/5211234567890?text=Confirmo%203%20personas",
  images: [picture1, picture2],
  location: "https://maps.app.goo.gl/SHKEXHb6ZaNLzEcm8",
  vestimentCode: "Casual",
  vestimentCodeImg: vestiment,
  phone: "522206283499",
  suscription: "classic",
  // music: song,
  partyType: partyNeon,
};

export default event;
