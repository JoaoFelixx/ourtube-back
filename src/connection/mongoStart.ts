import mongoose from 'mongoose';

(async () => {
  try {
    await mongoose.connect(process.env.URL_MONGO_DATABASE || '');

  } catch (err) {
    console.table(['Error connection', err]);
  }
})();