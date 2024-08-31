import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  createOpportunity,
  getOpportunities,
  getOpportunity,
  updateOpportunity,
  deleteOpportunity
} from '../controllers/opportunityController.js';

const router = express.Router();

router.use(protect);

router.route('/')
  .post(createOpportunity)
  .get(getOpportunities);

router.route('/:id')
  .get(getOpportunity)
  .put(updateOpportunity)
  .delete(deleteOpportunity);

export default router;