import Task from "../models/task.model.js";

// Obtener todas las tareas de un usuario
export const getTask = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { userId: req.userId } });
    res.json(tasks);
  } catch (error) {
    console.error("❌ Error al obtener tareas:", error);
    res.status(500).json({ message: "Error interno al obtener tareas" });
  }
};

// Crear una nueva tarea
export const createTask = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) return res.status(400).json({ message: "El título es requerido" });

    const task = await Task.create({
      title,
      completed: false,
      userId: req.userId
    });

    res.status(201).json(task);
  } catch (error) {
    console.error("❌ Error al crear tarea:", error);
    res.status(500).json({ message: "Error interno al crear tarea" });
  }
};

// Actualizar una tarea existente
export const updateTask = async (req, res) => {
  try {
    const { id, title, completed } = req.body;

    if (!id) return res.status(400).json({ message: "ID es requerido" });

    const task = await Task.findOne({
      where: { id, userId: req.userId }
    });

    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });

    await task.update({ title, completed });
    res.json(task);
  } catch (error) {
    console.error("❌ Error al actualizar tarea:", error);
    res.status(500).json({ message: "Error interno al actualizar tarea" });
  }
};

// Eliminar una tarea
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) return res.status(400).json({ message: "ID es requerido" });

    const rowsDeleted = await Task.destroy({
      where: {
        id,
        userId: req.userId
      }
    });

    if (rowsDeleted === 0) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    res.status(204).send();
  } catch (error) {
    console.error("❌ Error al eliminar tarea:", error);
    res.status(500).json({ message: "Error interno al eliminar tarea" });
  }
};