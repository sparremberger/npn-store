import mongoose from "mongoose";

// ! é o non null assertion operator
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI!, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });

        console.log(`MongoDB Connected ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
};

export default connectDB;
