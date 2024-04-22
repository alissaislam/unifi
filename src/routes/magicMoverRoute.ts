import express, { RequestHandler } from 'express';
import { create, load, startMission, endMission } from '../controllers/MagicMoverController';
import { validateMagicMover } from '../validation/magicMoverValidator';
import { validateLoad } from '../validation/loadValidation';
import { checkMoverExistence } from '../validation/missionValidation';
const router = express.Router();

router.post('/create',validateMagicMover ,create)
router.post('/load',validateLoad , load)
router.post('/startMission',checkMoverExistence, startMission)
router.post('/endMission',checkMoverExistence, endMission)

export default router;