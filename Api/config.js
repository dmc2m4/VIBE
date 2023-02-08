const DB_USER = process.env.DB_USER  || 'postgres';
const DB_PASSWORD = process.env.DB_PASSWORD   || '12345';
const DB_HOST = process.env.DB_HOST   || 'localhost'
const DB_PORT = process.env.DB_PORT  || '5432'
const DB_NAME = process.env.DB_NAME   || 'vibes'
const PORT = process.env.PORT   || '3001'
const DB_DEPLOY = process.env.DB_DEPLOY;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN  ||"APP_USR-12345678-031820-X-12345678";
const API_URL = process.env.VITE_APP_API_URL;
module.exports = {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  DB_PORT,
  PORT,
  DB_DEPLOY,
  ACCESS_TOKEN,
  API_URL
};

// import.meta.env.VITE_APP_API_URL
// "http://localhost:3001"

