import { createClient } from 'redis';

const client = createClient({ url: process.env.URL_REDIS });

(async () => {
  try {
    await client.connect();
    console.log('Connected at Redis');
  } catch (error) {
    console.log('Refused connection');
  }
})();

export { client };