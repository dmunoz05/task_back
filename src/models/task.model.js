import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Task = sequelize.define('Task', {
  title: DataTypes.STRING,
  completed: DataTypes.BOOLEAN,
  userId: DataTypes.INTEGER
});

await sequelize.sync();
export default Task;