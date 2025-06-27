import getConnection from "../database/connection.mysql.js";
import { variablesDB } from "../utils/params/const.database.js";
import { variablesJWT } from "../utils/params/const.jwt.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const SECRET_KEY = variablesJWT.jwt_secret;

export const validateToken = (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, variablesJWT.jwt_secret);
    return res.status(200).json({ message: "Token válido", user: decoded });
  } catch (err) {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
};
