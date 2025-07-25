import express from "express";
import dotenv from "dotenv";
import AllRoutes from "./routes/index.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

app.use(cookieParser());

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
dotenv.config();
app.use(express.json());


app.get("/", function (req, res) {
  res.send("working.");
});

app.use("/api/v1", AllRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("DB connected."));

app.listen(process.env.PORT_NUMBER, () => {
  console.log(`Server is running on port ${process.env.PORT_NUMBER}.`);
});