import type { NewtnTalent } from "@/types/newtnTalent";
import { designers } from "./designers";
import { developers } from "./developers";
import { projectManagers } from "./project-managers";

export const allNewtnTalents: NewtnTalent[] = [
  ...projectManagers,
  ...developers,
  ...designers,
];
