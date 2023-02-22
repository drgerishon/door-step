import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
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

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.con = await cached.promise;
  return cached.con;
}
export default dbConnect;
