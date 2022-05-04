import "dotenv/config";
import "./connection/mongoStart";
import express from "express";
import cors from "cors";
import { routes } from "./routes";

const application = express();

application.use(cors());
application.use(express.json());
application.use('/api/v1', routes);

export { application };