import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { routes } from "./routes";
import { resolve } from 'path';
import './db-redis';

const application = express();
const staticFilesPath = resolve(__dirname, "public", "files");

application.use(cors());
application.use(express.json());
application.use(express.urlencoded({ extended: true }));
application.use('/api', routes);
application.use("/files", express.static(staticFilesPath));

(async () => await mongoose.connect(process.env.URL_MONGO_DATABASE || ''))();

export { application };