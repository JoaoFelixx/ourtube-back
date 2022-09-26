import "dotenv/config";
import cors from "cors";
import express from "express";
import { routes } from "./routes";
import { resolve } from 'path';
import './db-redis';
import './db-mongo';

const application = express();

application.use(cors({ origin: process.env.URL_ORIGIN }));
application.use(express.json());
application.use(express.urlencoded({ extended: true }));
application.use('/api', routes);
application.use("/files", express.static(resolve(__dirname, "public", "files")));

export { application };