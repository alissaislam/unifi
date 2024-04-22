import { Request, Response, NextFunction } from 'express';
import { magicMovers } from '../db/MagicMovers';

export const checkMoverExistence = (req: Request, res: Response, next: NextFunction) => {
  const moverId = req.body.magicMoverId;

  const mover = magicMovers.find(m => m.id === moverId);
  
  if (!mover) {
    return res.status(404).send('Magic Mover not found');
  }

  req.mover = mover;

  next();
};