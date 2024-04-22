import express from 'express';
import { activityLogs } from '../db/activityLogs';
import { ActivityLog } from '../models/ActivityLog';

export const addLog = (id :string, activity :string)=>{

    const activityLog: ActivityLog =  {
        magicMoverId:id, 
        activity:activity,
        time:Date.now().toString()
      };

      activityLogs.push(activityLog);
}
export const getTopfiveMagicMovers = (req : express.Request, res : express.Response)=>{
    const groupedLogs = activityLogs.reduce<Record<string, ActivityLog[]>>((acc, log) => {
        if (!acc[log.magicMoverId]) {
          acc[log.magicMoverId] = [];
        }
        acc[log.magicMoverId].push(log);
        return acc;
      }, {});
      
      const sortedMagicMovers = Object.entries(groupedLogs).sort((a, b) => {
        const aDoneLogs = a[1].filter(log => log.activity === 'done').length;
        const bDoneLogs = b[1].filter(log => log.activity === 'done').length;
        return bDoneLogs - aDoneLogs;
      });
      
      const topFiveMagicMovers = sortedMagicMovers.slice(0, 5);
       
      res.status(200).json(topFiveMagicMovers);
}