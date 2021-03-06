const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const { mongoose } = require("./database");

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
//Preparamos al servidor para entender los JSON que envia Angular
app.use(express.json());

//routes
app.use("/api/employees", require("./routes/employee.routes"));

//Start Server
app.listen(app.get("port"), () => {
  console.log("Server On port: ", app.get("port"));
});
