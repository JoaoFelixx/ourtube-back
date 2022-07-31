import { createClient } from 'redis';

const client = createClient({ url: process.env.URL_REDIS });

(async () => {
  try {
    await client.connect();
    console.log('redis on');

  } catch (error) {
    console.log(error);
  }
})();

export { client };