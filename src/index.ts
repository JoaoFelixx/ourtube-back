import cluster from "cluster";
import { cpus } from 'os';
import { application } from "./app";

const PORT = process.env.PORT || 4545;
const numCPUs = cpus().length;

const condition = false;

if (cluster.isPrimary && condition) {
  for (let i = 0; i < numCPUs; i++)
    cluster.fork();

  cluster.on('exit', (worker, code, signal) => cluster.fork());
  
} else
  application.listen(PORT, () => console.log(`Server running on port ${PORT}`));