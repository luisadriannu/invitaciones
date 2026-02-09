import eduardo32 from "@/data/birthday/eduardo-32";
import abigail21 from "@/data/birthday/abigail-21";
import luisyabigail from "@/data/weddings/luis-y-abigail";
import emanuel19 from "@/data/birthday/emanuel-19";
import renata from "@/data/babyshower/renata";
import type { EventData } from "@/types/EventData";

const events: Record<string, EventData> = {
  "eduardo-32": eduardo32,
  "abigail-21": abigail21,
  "luis-y-abigail": luisyabigail,
  renata: renata,
  "emanuel-19": emanuel19,
};

export default events;
