import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  createCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
  searchCustomers
} from '../controllers/customerController.js';

const router = express.Router();

router.use(protect);  // All customer routes are protected

router.route('/')
  .post(createCustomer)
  .get(getCustomers);

router.get('/search', searchCustomers);

router.route('/:id')
  .get(getCustomer)
  .put(updateCustomer)
  .delete(deleteCustomer);

export default router;