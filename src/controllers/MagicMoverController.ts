import express,{Request} from 'express';
import { addLog } from './ActivityLogConroller';
import { magicMovers } from '../db/MagicMovers';
import { MagicMover } from '../models/MagicMover';
import { MagicMoverState } from '../utils/enums/statesEnum';
import { MagicItem } from '../models/MagicItem';


export const create = ( req : express.Request ,res : express.Response)=>{

    const newMagicMover: MagicMover = {
        id: Date.now().toString(),
        weightLimit: req.body.weightLimit,
        energy: req.body.energy,
        questState: MagicMoverState.Resting, // Initial state set to "resting"
        items: [], // Items array is empty
      };
    
      magicMovers.push(newMagicMover);
      res.status(201).json(newMagicMover);
}

export const load = ( req : Request  ,res : express.Response)=>{

    const mover =  req.mover
    const item = req.item

    mover.questState = MagicMoverState.Loading;
    mover.items.push(item);
    mover.energy-=item.weight

    addLog(mover.id , MagicMoverState.Loading );
   
    res.status(200).json(mover);
}

export const startMission = ( req : express.Request ,res : express.Response)=>{

    const mover =  req.mover
    mover.questState = MagicMoverState.OnMission;

    addLog(mover.id,MagicMoverState.OnMission)
    
    res.status(200).json(mover);
}

export const endMission = ( req : express.Request ,res : express.Response)=>{

    const mover =  req.mover
    mover.items = [];
    mover.questState = MagicMoverState.Done;
    
    addLog(mover.id,MagicMoverState.Done)
    
    res.status(200).json(mover);
}