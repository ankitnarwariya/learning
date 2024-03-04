import mongoose from "mongoose";
import connectDB from "./index.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connect.host}`);
    } catch (error) {
        console.log('ERROR', error);
        process.exit(1);
    }
}

export default connectDB;