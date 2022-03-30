import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import apiRouter from "./routes/api";

const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log("App is running on port 4000.");
});
