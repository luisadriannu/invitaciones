import BirthdayTemplate from "@/templates/birthday/BirthdayBase";
import BirthdayElegant from "@/templates/birthday/BirthdayElegant";
import BirthdayModern from "@/templates/birthday/BirthdayModern";
import WeddingBase from "@/templates/wedding/WeddingBase";
import BabyShowerBase from "@/templates/babyshower/BabyShowerBase";

export const templates = {
  cumple: {
    base: BirthdayTemplate,
    elegant: BirthdayElegant,
    modern: BirthdayModern,
  },
  boda: {
    base: WeddingBase,
  },
  babyshower: {
    base: BabyShowerBase,
  },
} as const;
