import express from "express";
import userRoutes from "./routes/user.routes.js";
const app = express();
app.use(
  express.json({
    limit: "20kb",
  })
);
app.use(express.urlencoded({ extended: true, limit: "20kb" }));

// routes
app.use("/api/user", userRoutes);

export { app };
