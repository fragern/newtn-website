import { designers } from "./designers";
import { developers } from "./developers";
import { projectManagers } from "./project-managers";
import type { NewtnTalent } from "@/types/NewtnTalent";

export const allNewtnTalents: NewtnTalent[] = [
  ...projectManagers,
  ...developers,
  ...designers,
];
