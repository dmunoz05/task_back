import express from 'express';

// Database
import { getTask, createTask, updateTask, deleteTask } from '../controllers/task.js';
import { authenticate } from '../middlewares/authentication.js';

// Controllers
const router = express.Router();

export const routes = () => {
    // Database
    router.post('/g/task/', authenticate, getTask);
    router.post('/p/task/', authenticate, createTask);
    router.post('/u/task/', authenticate, updateTask);
    router.post('/d/task/', authenticate, deleteTask);

    return router;
}