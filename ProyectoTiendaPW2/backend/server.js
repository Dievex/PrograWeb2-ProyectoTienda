const dotenv = require('dotenv');
dotenv.config();
const app = require('./src/app');
const connectDB = require('./src/config/db');
const client = require('./src/config/redis');

async function startServer() {
  try {
    await client.connect();
    await client.ping();
    console.log('Redis listo');
  } catch (e) {
    console.error('No se pudo conectar a Redis:', e.message);
    process.exit(1);
  }

  // Conectar MongoDB
  await connectDB();

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
}

if (require.main === module) {
  startServer();
}

/*const User = require("./src/models/User");
const bcrypt = require("bcryptjs");
async function seed() {
  
  const adminPassword = await bcrypt.hash('admin123', 10);
  const userPassword = await bcrypt.hash('user123', 10);

  await User.create([
    { username: "admin", password: adminPassword, role: "admin" },
    { username: "user", password: userPassword, role: "user" },
  ]);
  console.log("Usuarios iniciales creados");
}

seed();*/


module.exports = app;
