import dotenv from "dotenv";
import mysql from "mysql2/promise";
dotenv.config();

// Ensure that the environment variables are set
export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});
