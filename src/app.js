const express = require("express");
const app = express();
const port = 3000;
const recipes = require("./routes/recipe");
const connectDB = require("./config/connect");
require('dotenv').config()
const notFound = require('./middelwares/not-found');

//middleware
// app.use(express.static('./public'))
app.use(express.json());

//routes

app.use("/api/v1/recipes", recipes);

app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
