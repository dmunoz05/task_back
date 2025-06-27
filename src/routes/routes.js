import express from 'express';

// Database
import { getTask, createTask, updateTask, deleteTask } from '../controllers/task.js';
import { loginUser, registerUser } from '../controllers/users.js';
import { getConnect } from '../database/conection.controller.js';

// Controllers
const router = express.Router();

export const routes = () => {
    // Database
    router.get('/conect/', getConnect);
    router.post('/register/', registerUser);
    router.post('/login/', loginUser);
    router.post('/g/task/', getTask);
    router.post('/p/task/', createTask);
    router.post('/u/task/', updateTask);
    router.post('/d/task/', deleteTask);

    return router;
}