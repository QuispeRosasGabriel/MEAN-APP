const express = require("express");
const morgan = require("morgan");
const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
//Preparamos al servidor para entender los JSON que envia Angular
app.use(express.json());

//routes

//Start Server
app.listen(app.get("port"), () => {
  console.log("Server On port: ", app.get("port"));
});
