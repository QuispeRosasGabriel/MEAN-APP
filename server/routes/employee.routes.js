const express = require("express");
const router = express.Router();
const employeeList = require("../controllers/employee.controller");

router.get("/", employeeList.getEmployees);
router.post("/", employeeList.createEmployee);
router.get("/:id", employeeList.getEmployee);
router.put("/:id", employeeList.editEmployee);
router.delete("/:id", employeeList.deleteEmployee);

module.exports = router;
