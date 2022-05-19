import cluster from "cluster";
import { cpus } from 'os';
import { application } from "./app";

const PORT = process.env.PORT || 4545;
const numCPUs = cpus().length;

if (cluster.isPrimary) {
  
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
    console.log('Starting a new worker');
    cluster.fork();
  });

} else {
  application.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}