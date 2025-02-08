import mongoose from "mongoose";

const connectMongo = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI as string);
  }
};

export default connectMongo;
