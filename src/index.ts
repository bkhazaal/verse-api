import express from "express";
import userRoutes from "./routes/users";
import verseRoutes from "./routes/verses";

// Initialize Express app
const app = express();
app.use(express.json());

// Database connection
app.use("/api/users", userRoutes);
app.use("/api/verses", verseRoutes);

// Error handling middleware
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
