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

employeeController.getEmployee = (req, res) => {};
employeeController.editEmployee = (req, res) => {
  res.json({
    status: "Edit Employee"
  });
};

employeeController.deleteEmployee = () => {};

module.exports = employeeController;
