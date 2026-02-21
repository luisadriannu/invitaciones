import type { EventData } from "@/types/EventData";
import eduardo32 from "@/data/birthday/eduardo-32";
import abigail21 from "@/data/birthday/abigail-21";
import luisyabigail from "@/data/weddings/luis-y-abigail";
import emanuel19 from "@/data/birthday/emanuel-19";
import renata from "@/data/babyshower/renata";
import valentina from "@/data/xv/valentina";
import luis10 from "@/data/birthday/kids/luis-10";
import sofia10 from "@/data/birthday/kids/sofia-10";
import geovannyyyuritzi from "@/data/weddings/geovanny-y-yuritzi";
import joseyasminda from "@/data/weddings/jose-y-asminda";

const events: Record<string, EventData> = {
  "eduardo-32": eduardo32,
  "abigail-21": abigail21,
  "luis-y-abigail": luisyabigail,
  renata,
  "emanuel-19": emanuel19,
  valentina,
  "luis-10": luis10,
  "sofia-10": sofia10,
  "geovanny-y-yuritzi": geovannyyyuritzi,
  "jose-y-asminda": joseyasminda,
  "yuritzi-y-geovanny": geovannyyyuritzi,
};

export default events;
