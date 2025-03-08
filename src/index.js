import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pool from "./config/db.js";
import createReviewTable from "./data/createReviewTable.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

createReviewTable();

//Testing POSTGRES Connection
app.get("/", async (req, res) => {
  console.log("Start");
  const result = await pool.query("SELECT current_database()");
  console.log("Result", result.rows);
  res.send(`The Database name is : ${result.rows[0].current_database}`);
});

//Create Responce
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Create Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
