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
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to database!");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(err => console.log(`Connection failed, ${err}.`));