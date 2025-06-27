import getConnection from "../database/connection.mysql.js";
import { variablesDB } from "../utils/params/const.database.js";
import { variablesJWT } from "../utils/params/const.jwt.js";
import Task from "../models/task.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const getTask = async (req, res) => {
  const tasks = await Task.findAll({ where: { userId: req.userId } });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title } = req.body;
  const task = await Task.create({ title, completed: false, userId: req.userId });
  res.status(201).json(task);
};

export const updateTask = async (req, res) => {
  const { title, completed } = req.body;
  const task = await Task.findOne({ where: { id: req.params.id, userId: req.userId } });
  if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
  await task.update({ title, completed });
  res.json(task);
};

export const deleteTask = async (req, res) => {
  await Task.destroy({ where: { id: req.params.id, userId: req.userId } });
  res.status(204).send();
}