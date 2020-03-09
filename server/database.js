const mongoose = require("mongoose");

const URL = "mongodb://localhost/mean-crud";
mongoose
  .connect(URL)
  .then(db => console.log("Conectado a MongoDB"))
  .catch(err => console.log("Ocurrio un error: " + err));

module.exports = mongoose;
