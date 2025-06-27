import mysql2 from 'mysql2';

let pool = null;

const getSQLConnection = async () => {
  if (pool) return pool;

  const config = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  };

  pool = mysql2.createPool(config);

  console.log('');
  console.log('🔗 Conectando a MYSQL...');
  console.log('');
  try {
    await pool.promise().query('SELECT 1');
    console.log('✅ Conexión exitosa a MYSQL');
    console.log('');
    return pool;
  } catch (err) {
    console.error('❌ Error de conexión a MYSQL:', err);
    return null;
  }
};

export { getSQLConnection };