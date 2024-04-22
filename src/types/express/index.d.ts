import { Request } from 'express';
import { MagicMover } from '../../models/MagicMover';
import { MagicItem } from '../../models/MagicItem';

declare global {
 namespace Express {
    export interface Request {
      mover: MagicMover; 
      item: MagicItem; 
    }
 }
}
export {};