import express from 'express';
import { getTopfiveMagicMovers } from '../controllers/ActivityLogConroller';
const router = express.Router();

router.get('/topMovers', getTopfiveMagicMovers)

export default router;