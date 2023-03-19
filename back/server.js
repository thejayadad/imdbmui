const express = require('express')
const mongoose = require("mongoose")
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express();
const authController = require('./controllers/authController');
const transactionController = require("./controllers/transactionController.js")

const port = process.env.PORT || 5001;


require('dotenv').config();



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/auth", authController);
app.use("/transaction", transactionController)

const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', false);
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB Connected");
})

app.listen(5001, () => {
    console.log("App Listening")
})
