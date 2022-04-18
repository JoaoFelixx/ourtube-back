import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./routes";
import startMongoConnection from "./connection/mongoStart";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', routes);

startMongoConnection();

export default app;