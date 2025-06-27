import { routes } from './src/routes/routes.js';
import sequelize from './src/config/database.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const allowedOrigins = process.env.NODE_ENV === "production"
  ? ["https://task_front.vercel.app"]
  : ["http://localhost:1600", "http://localhost:5173", "http://localhost:5174"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
  methods: ["POST", "GET", "DELETE", "PUT"],
  credentials: true
};

app.use(cors(corsOptions));
app.use('/server/task', routes());

// Ruta de prueba
app.get('/', (req, res) => {
  res.json('Working');
});

app.listen(PORT, async () => {
  try {
    // Conexión
    await sequelize.authenticate();
    console.log("\n✅ Base de datos conectada correctamente (Sequelize)\n");
    console.log("*****************************************************\n");
    console.log(`🚀 Servicio iniciado en http://localhost:${PORT}/server/task\n`);
    console.log("***************************************************");
  } catch (error) {
    console.error("\n***************************************************");
    console.error("\n❌ Error conectando la base de datos con Sequelize");
    console.error("\n***************************************************");
    console.error(error);
    process.exit(1);
  }
});