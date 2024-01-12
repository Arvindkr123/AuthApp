import express from "express";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
const app = express();
app.use(
  express.json({
    limit: "20kb",
  })
);
app.use(express.urlencoded({ extended: true, limit: "20kb" }));

// routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// middleware
app.use((err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let erorrMessage = err.message || "Something went wrong!";
  return res.status(statusCode).send({
    success: false,
    statusCode,
    message: erorrMessage,
  });
});

export { app };
