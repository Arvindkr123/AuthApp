import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./connectDB/index.js";

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log("Server listening on port " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection error :", err);
  });
