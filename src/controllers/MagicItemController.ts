import express from 'express'
import { magicItems } from '../db/MagicItems';
import { MagicItem } from '../models/MagicItem';

export const create = ( req : express.Request ,res : express.Response)=>{
    
    const newItem: MagicItem = {
        id: Date.now().toString(), 
        name: req.body.name,
        weight: req.body.weight,
      };
    
      magicItems.push(newItem);
      res.status(201).json(newItem);
}