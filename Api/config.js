const DB_USER = process.env.DB_USER 
const DB_PASSWORD = process.env.DB_PASSWORD  
const DB_HOST = process.env.DB_HOST   
const DB_PORT = process.env.DB_PORT  
const DB_NAME = process.env.DB_NAME 
const PORT = process.env.PORT   
const DB_DEPLOY = process.env.DB_DEPLOY;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN  ||"APP_USR-12345678-031820-X-12345678";
const API_URL = "http://localhost:5173";
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

// process.env.VITE_APP_API_URL
// "http://localhost:5173"

