import { variablesJWT } from "../utils/params/const.jwt.js";
import User from "../models/users.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Validar el token JWT
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

// Registrar un nuevo usuario
export const registerUser = async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    await User.create({ username, password: hash });
    res.status(201).json({ message: "Usuario registrado" });
  } catch {
    res.status(400).json({ message: "Error al registrar usuario" });
  }
};

// Iniciar sesión de usuario
export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  res.json({ token });
};