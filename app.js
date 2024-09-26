const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

const userRoute = require("./routes/user.route.js");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());

// routes
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("try /users to manage users");
});

mongoose
//process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }
  .connect(
    "mongodb+srv://tungalperozturk:SD6dQHNf5wAf0ld6@nodeapi.w6bbu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NodeAPI"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => console.log(`Connection failed, ${err}.`));