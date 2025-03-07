import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

//Create Responce
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Create Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
