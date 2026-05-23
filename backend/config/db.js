const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URL;

        if (!uri) {
            console.error("MONGO_URL is missing in backend/.env file");
            return;
        }

        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000,
        });

        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error.message || error);
        if (error.reason) {
            console.error("Connection reason:", error.reason);
        }
        console.error(
            "MongoDB Atlas connection failed. Check your cluster URI, credentials, and Atlas Network Access IP whitelist."
        );
    }
};

module.exports = connectDB;