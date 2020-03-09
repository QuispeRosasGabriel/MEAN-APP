const Employee = require("../models/employee");
const employeeController = {};

employeeController.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};
employeeController.getEmployee = (req, res) => {};
employeeController.editEmployee = (req, res) => {
  res.json({
    status: "Edit Employee"
  });
};

employeeController.deleteEmployee = () => {};

employeeController.createEmployee = () => {};

module.exports = employeeController;
