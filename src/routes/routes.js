import express from 'express';

// Database
import { getConnect } from '../database/conection.controller.js';
import { ConexionVerify } from '../middlewares/connection.js';

const router = express.Router();

export const routes = () => {
    // Database
    router.get('/conect/', ConexionVerify, getConnect);

    return router;
}