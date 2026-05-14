import BirthdayTemplate from "@/templates/birthday/BirthdayBase";
import BirthdayElegant from "@/templates/birthday/BirthdayElegant";
import BirthdayModern from "@/templates/birthday/BirthdayModern";
import WeddingBase from "@/templates/wedding/WeddingBase";
import BabyShowerBase from "@/templates/babyshower/BabyShowerBase";
import XVBaseTemplate from "@/templates/xv/XVTemplate";
import ChristeningBase from "@/templates/christening/ChristeningBase";

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
  xv: {
    base: XVBaseTemplate,
  },
  bautizo: {
    base: ChristeningBase,
  },
} as const;
