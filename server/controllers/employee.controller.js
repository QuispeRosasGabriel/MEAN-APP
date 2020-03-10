const Employee = require("../models/employee");
const employeeController = {};

employeeController.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};
employeeController.createEmployee = async (req, res) => {
  //Usor req.body para obtener y entender el json que va a enviar angular
  console.log(req.body);
  //Aqui uso req body para que lo que me envia angular se acomode al modelo que manejo en el servidor
  const employee = new Employee(req.body);
  try {
    await employee.save();
  } catch (error) {
    res.json({ status: "Error al guardar empleado", error: error });
  }
  res.json({ status: "Empleado guardado" });
};

employeeController.getEmployee = async (req, res) => {
  //Obteniendo del parametro con req.params.id
  let employeeParam = await Employee.findById(req.params.id);
  //Devuelves el empleado encontrado
  res.json(employeeParam);
};
employeeController.editEmployee = async (req, res) => {
  //obtienes el key id del objeto params
  const { id } = req.params;
  //Obtiene todos los datos que me esta enviando a traves de angular
  const newEmployee = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  };
  //$set setea en mongo db los nuevos datos
  await Employee.findByIdAndUpdate(id, { $set: newEmployee }, { new: true });

  res.json({
    status: "Empleado actualizado"
  });
};

employeeController.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({
    status: "Empleado eliminado"
  });
};

module.exports = employeeController;
