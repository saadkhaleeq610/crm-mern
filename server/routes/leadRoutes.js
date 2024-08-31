import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  createLead,
  getLeads,
  getLead,
  updateLead,
  deleteLead
} from '../controllers/leadController.js';

const router = express.Router();

router.use(protect);

router.route('/')
  .post(createLead)
  .get(getLeads);

router.route('/:id')
  .get(getLead)
  .put(updateLead)
  .delete(deleteLead);

export default router;