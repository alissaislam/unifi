import { Request, Response, NextFunction } from 'express';
import { magicMovers } from '../db/MagicMovers';
import { magicItems } from '../db/MagicItems';
import { MagicMoverState } from '../utils/enums/statesEnum';


export const validateLoad = (req: Request, res: Response, next: NextFunction) => {
  const moverId = req.body.magicMoverId;
  const itemId = req.body.itemId;

  const mover = magicMovers.find(m => m.id === moverId);
  const item = magicItems.find(i => i.id === itemId);

  if (!mover) {
    return res.status(404).send('Magic Mover not found');
  }
  
  if (mover.questState == MagicMoverState.OnMission ) {
    return res.status(404).send('Magic Mover is on mission');
  }
  
  if (!item) {
    return res.status(404).send('Magic Item not found');
  }

  if(mover.energy-item.weight <= 0) 
    return res.status(400).send('The total weight of items exceeds the Magic Mover\'s weight limit');

  req.mover = mover;
  req.item = item;

  next();
};