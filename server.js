const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
// Add CORS
const cors = require("cors");

//config


require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// app.use(express.static('public'));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

//root
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Add this line to allow all origins
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Add this line to allow specific headers
  next();
});

app.use(cors({
  origin: 'http://localhost:3000'
}));


app.get("/", (req, res) => {
  res.send("Cannot GET /");
});



//controllers

const foodEntriesController = require("./controllers/foodEntriesController.js")
app.use("/foodEntries", foodEntriesController);

app.listen(process.env.PORT, () =>
  console.log((`Running on port: ${process.env.PORT}`))
);
