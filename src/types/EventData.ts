export type EventType = "cumple" | "boda" | "xv" | "babyshower";
export type EventVariant = "base" | "elegant" | "modern" | "personalized";
export type Suscription = "classic" | "intermediary" | "premiun";
export interface EventData {
  tipo: EventType;
  variant?: EventVariant;
  slug?: string;
  name: string;
  age?: number;
  date: string;
  hour: string;
  link: string;
  images?: string[];
  location: string;
  // ubicationText?: string;
  direction?: string;
  vestimentCode: string;
  suscription: Suscription;
  phone: string;
  music?: string;
  vestimentCodeImg?: string;
  partyType?: string;
  ceremonyWedding?: string;
  ceremonyHour?: string;
  colors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
    background?: string;
  };
  petitionSpecially?: boolean;
  namesParents?: {
    momBoy: string;
    dadBoy: string;
    momGirl: string;
    dadGirl: string;
  };
  limitDate?: string;
  messageConfirmation?: string;
  phrase?: string;
}
