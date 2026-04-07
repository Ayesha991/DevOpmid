import express from 'express';
import {
  getAllPasswords,
  getPassword,
  createPassword,
  updatePassword,
  deletePassword,
  deleteAlPasswords
} from '../controllers/passwordController.js';

const router = express.Router();

// GET all passwords
router.get('/', getAllPasswords);

// GET single password by ID
router.get('/:id', getPassword);

// POST new password
router.post('/', createPassword);

// PUT update password
router.put('/:id', updatePassword);

// DELETE password by ID
router.delete('/:id', deletePassword);

// DELETE all passwords
router.delete('/', deleteAlPasswords);

export default router;
