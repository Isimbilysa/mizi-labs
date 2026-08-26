import { Router } from 'express';

import { createSignup } from '../controllers/signup.controller.js';
import { signupLimiter } from '../middleware/rateLimit.js';

export const signupRouter = Router();

signupRouter.post('/', signupLimiter, createSignup);
