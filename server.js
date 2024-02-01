const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");

//config
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//root
app.get("/", (req, res) => {
  res.send("Hello World");
})

//controllers

const foodEntriesController = require("./controllers/foodEntriesController.js")
app.use("/foodEntries", foodEntriesController);

app.listen(process.env.PORT, () =>
  console.log((`Running on port: ${process.env.PORT}`))
);
