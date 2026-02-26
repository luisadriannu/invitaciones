import type { EventData } from "@/types/EventData";
import geovannyyyuritzi from "@/data/weddings/geovanny-y-yuritzi";
import joseyasminda from "@/data/weddings/jose-y-asminda";

const events: Record<string, EventData> = {
  "geovanny-y-yuritzi": geovannyyyuritzi,
  "jose-y-asminda": joseyasminda,
  "yuritzi-y-geovanny": geovannyyyuritzi,
};

export default events;
