import sequelize from '../config/database.js';
import { DataTypes } from 'sequelize';

const Task = sequelize.define('Task', {
  title: DataTypes.STRING,
  completed: DataTypes.BOOLEAN,
  userId: DataTypes.INTEGER
});

await sequelize.sync();
export default Task;
