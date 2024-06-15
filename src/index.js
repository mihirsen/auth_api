const express = require("express");
const app = express();
const userRouter = require("../src/routes/userRoutes");
const noteRouter = require("../src/routes/noteRoutes");

const mongoose = require("mongoose");

app.use(express.json());

app.use((req, res, next) => {
  console.log("HTTP Method -" + req.method + ", URL -" + req.url);
});

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(
    "mongodb+srv://mihir123sen:notesAPI@notesapi.2tlveyr.mongodb.net/?retryWrites=true&w=majority&appName=notesAPI"
  )
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
