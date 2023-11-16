import express from 'express';
import { getAllUsers } from './usersControllers.js';

const router = express.Router();

router.get('/', getAllUsers);

export default router;