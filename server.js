const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const swaggerDocs = require('./swagger');

const app = express();
app.use(express.json());

app.use('/api', userRoutes);
swaggerDocs(app); // Initialize Swagger

const PORT = 1234;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📘 Swagger Docs at http://localhost:${PORT}/api-docs`);
  });
}).catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});
