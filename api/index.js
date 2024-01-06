import express from "express";

const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log("server listening on port 3000");
});
