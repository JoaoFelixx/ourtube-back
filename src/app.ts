import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { routes } from "./routes";
import './dbRedis';
const application = express();

application.use(cors());
application.use(express.json());
application.use('/api', routes);

mongoose.connect(process.env.URL_MONGO_DATABASE || '');

export { application };