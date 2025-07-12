import mongoose from "mongoose";

export const connectDB = async () => {
  try{
    console.log("MONGO_URI from .env:", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB connected successfully!!");
  } catch(error) {
    console.log("Error connecting to MONGODB", error);
    process.exit(1);
  }
}

