import express from 'express';
import { subscribeNewsLetter } from '../controllers/newsLetterController.js';

const router = express.Router();

router.post('/subscribe', subscribeNewsLetter);

export default router; 