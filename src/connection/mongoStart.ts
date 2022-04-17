import mongoose from 'mongoose';

async function startMongoConnection() {
  try {
    await mongoose.connect(process.env.URL_MONGO_DATABASE || '');
    console.log('Successful connection');
    
  } catch (err) {
    console.table(['Error connection', err]);
  }
}

export default startMongoConnection;