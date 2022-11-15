import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import cors from "cors";

export const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

const log = (req, res, next) => {
  console.log("Logging...");
  next();
};

app.get("/data", log, (req, res) => {
  res.send({ msg: "Hello World!" });
});

app.post("/data", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

export const start = () => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
};
