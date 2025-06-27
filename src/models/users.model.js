import sequelize from '../config/database.js';
import { DataTypes } from 'sequelize';

const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING
});

await sequelize.sync();
export default User;
