import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import apiRouter from "./routes/api";
import apiDocsRouter from "./routes/api-docs";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.use("/api-docs", apiDocsRouter);
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}.`);
});
