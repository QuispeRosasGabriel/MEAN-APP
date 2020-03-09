const mongoose = require("mongoose");
const { Schema } = mongoose;

//Mapeando modelos
const EmployeeSchema = new Schema({
  name: { type: String, required: true },
  posicion: { type: String, required: true },
  office: { type: String, required: true },
  salary: { type: Number, required: true }
});

//El key y el schema que usaras en la coleccion
mongoose.model("Employee", EmployeeSchema);

module.exports = mongoose.model("Employee", EmployeeSchema);
