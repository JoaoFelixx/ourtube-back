import mongoose from "mongoose";

(async () => {
  try {
    await mongoose.connect(process.env.URL_MONGO_DATABASE || '');
    console.log('Connected at MongoDB');
  } catch (error) {
    console.log('Connection refused at MongoDB');
  }
})();