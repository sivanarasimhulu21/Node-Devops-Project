const express = require("express");
const mongoose = require("mongoose");
const redis = require("redis");

const app = express();

// Environment variables
const PORT = process.env.PORT || 8090;
const MONGO_URI = process.env.MONGO_URI;
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PORT = process.env.REDIS_PORT;

// MongoDB connection
mongoose.connect(MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Redis connection
const redisClient = redis.createClient({
  socket: {
    host: REDIS_HOST,
    port: REDIS_PORT
  }
});

redisClient.connect()
.then(()=>console.log("Redis connected"))
.catch(err=>console.log(err));

app.get("/", (req, res) => {
  res.send("Node.js DevOps App Running");
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    mongodb: "connected",
    redis: "connected"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
