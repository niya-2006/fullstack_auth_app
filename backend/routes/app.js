const express = require('express');
const cors = require("cors");
const path = require('path');
const userRoutes = require("./authRouter");
const app = express();

app.use(express.json());

// Serve frontend static files when backend and frontend are deployed together
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// CORS Configuration
app.use(cors({
    origin: ["https://fullstack-auth-app-vlw1.vercel.app", "http://localhost:8000", "http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use("/api/v1/users", userRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
    res.json({ status: "Backend is running", timestamp: new Date() });
});

// If root requested, serve index.html from frontend (adjust filename as needed)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

module.exports = app;
