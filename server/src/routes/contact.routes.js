import { Router } from 'express';

import { createSubmission, listTopics } from '../controllers/contact.controller.js';
import { contactLimiter } from '../middleware/rateLimit.js';

export const contactRouter = Router();

contactRouter.get('/topics', listTopics);
contactRouter.post('/', contactLimiter, createSubmission);
