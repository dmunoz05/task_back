import { variablesJWT } from "../utils/params/const.jwt.js";
import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const authHeader = req.body?.headers?.Authorization || req?.headers?.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, variablesJWT.jwt_secret);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
};
