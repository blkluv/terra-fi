import { Router, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

router.use(cors());

router.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'kyc-middleware router running' });
});

export default router;
