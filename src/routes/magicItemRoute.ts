import express from 'express';
const router = express.Router()
import {create} from '../controllers/MagicItemController'
import { validateMagicItem } from '../validation/magicItemValidator';


router.post('/create',validateMagicItem ,create)


export default router;
