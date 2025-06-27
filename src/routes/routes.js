import express from 'express';

// Database
import { getTask, createTask, updateTask, deleteTask } from '../controllers/task.js';
import { loginUser, registerUser } from '../controllers/users.js';
import { getConnect } from '../database/conection.controller.js';
import { ConexionVerify } from '../middlewares/connection.js';

// Controllers
const router = express.Router();

export const routes = () => {
    // Database
    router.get('/conect/', ConexionVerify, getConnect);
    router.post('/register/', ConexionVerify, registerUser);
    router.post('/login/', ConexionVerify, loginUser);
    router.post('/g/task/', ConexionVerify, getTask);
    router.post('/p/task/', ConexionVerify, createTask);
    router.post('/u/task/', ConexionVerify, updateTask);
    router.post('/d/task/', ConexionVerify, deleteTask);

    return router;
}