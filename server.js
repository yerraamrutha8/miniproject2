const express = require("express");
const mongoose = require("mongoose");

const employeeRoutes = require("./routes/employeeroutes");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/employeedb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.send("Employee Management API Running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});