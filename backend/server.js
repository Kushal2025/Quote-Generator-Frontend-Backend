const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");
const Quote = require("./models/Quote");
const getRoutes = require("./routes/quoteRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(cors()); // allow frontend requests
app.use(express.json());

// Random quote endpoint
app.use("/api/quotes",getRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
