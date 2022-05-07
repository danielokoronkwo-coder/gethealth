import express, { Express, NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";


const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  res.status(err.status || 500).send(err.message);
});

app.use("*", function (req, res) {
  res.status(404).send({ message: "Resource not found" });
});

export default app;