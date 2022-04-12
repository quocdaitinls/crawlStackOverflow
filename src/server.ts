import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import apiRouter from "./routes/api";
import apiDocsRouter from "./routes/api-docs";
import cors from "cors";
import path from "path";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "/index.html"));
});

app.use("/api-docs", apiDocsRouter);
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}.`);
});
