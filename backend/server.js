import express from "express"
import 'dotenv/config'
import connectDB from "./config/mongodb.js"

// app config
const app = express();
const port = process.env.PORT || 4000
connectDB();

app.get("/", (req, res) => {
  res.send("API Working")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`))