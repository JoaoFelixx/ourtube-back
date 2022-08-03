import { createClient } from 'redis';

const client = createClient({ url: process.env.URL_REDIS });

(async () => {
  try {
    await client.connect();
  } catch (error) {
    console.log(error);
  }
})();

export { client };