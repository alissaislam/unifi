import { MagicMoverState } from "../utils/enums/statesEnum";
import { MagicItem } from "./MagicItem";

export interface MagicMover {
    id: string;
    weightLimit: number;
    energy: number;
    questState: MagicMoverState;
    items: MagicItem[];
   }