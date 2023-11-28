const mongoose = require("mongoose");
const dotenv = require("dotenv")
const PORT = 5001;
dotenv.config()
const MONGODB_URI = process.env.mongouri;



mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((err) => {
        console.log(err);
    });

mongoose.connection.on("connected", () => {
    console.log("Mongoose connected");
});