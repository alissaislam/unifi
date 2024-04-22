import { MagicMover } from "../models/MagicMover";
import { MagicMoverState } from "../utils/enums/statesEnum";

export const magicMovers: MagicMover[] = [
    {
      id: '1',
      weightLimit: 1000,
      energy: 100,
      questState: MagicMoverState.Resting,
      items: [],
    },
    {
      id: '2',
      weightLimit: 2000,
      energy: 200,
      questState: MagicMoverState.Loading,
      items: [
        {
          id: '1',
          name: 'Magic Sword',
          weight: 500,
        },
      ],
    },
    {
      id: '3',
      weightLimit: 1500,
      energy: 150,
      questState: MagicMoverState.OnMission,
      items: [],
    },
  ];