import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error('please define the mongo_url in the envronment variable');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { con: null, promise: null };
}
mongoose.set('strictQuery', false);

async function dbConnect() {
  if (cached.con) {
    return cached.con;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.con = await cached.promise;
  return cached.con;
}
export default dbConnect;
