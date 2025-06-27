# 🧪 API Tareas (Microservicio)

Este proyecto es una solución de arquitectura orientada a microservicios que gestiona tareas. Incluye un CRUD de tareas, todo desarrollado con **Node.js**, **Express**, **Sequelize** y **MySQL**, junto a un frontend en React (opcional).

## 📦 Tecnologías utilizadas

- Node.js
- Express
- Sequelize (ORM)
- MySQL
- JSON Web Tokens (JWT)
- React (opcional, en `/frontend`)

---

## 🚀 Instalación y ejecución en local

### ✅ Requisitos previos

- Node.js (v18 o superior recomendado)
- MySQL server local (o remoto)
- Git

## 💻 Variables de Entorno
Cada microservicio requiere un archivo .env en su raíz para funcionar correctamente.

Así debe ser la estructura básica que debe tener este archivo:

# Base de datos
MYSQL_HOST = "localhost"
MYSQL_PORT = "3306"
MYSQL_USER = "root"
MYSQL_PASSWORD = "contraseña"
MYSQL_DATABASE = "database"

# Configuración de la aplicación
NODE_ENV = "development"
PORT = "3000"

# Secrets
API_KEY = "api_key"
JWT_SECRET = "jwt_secret"
JWT_ALGORITHM = "HS256"

---

### 🛠️ 1. Clonar el repositorio

```bash
git clonehttps://github.com/dmunoz05/task_back.git
cd task_back
