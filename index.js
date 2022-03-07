const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
//Routes
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
//.ENV File
dotenv.config();
//Start the serever
async function StartSever() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDb");
  } catch (err) {
    console.log(err);
  }
}
StartSever();
//Routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
//Listing on the port 8080
app.listen("8080", () => console.log("Serevere is running"));
