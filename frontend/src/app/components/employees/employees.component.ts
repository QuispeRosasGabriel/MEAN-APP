import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
//Para materialize
declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees()
  }

  addEmployee(form?: NgForm) {
    if (form.value._id) {
      this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form)
          M.toast({ html: "Empleado actualizado satisfactoriamente" })
          this.getEmployees()
        })
    } else {
      this.employeeService.postEmployee(form.value).subscribe(
        res => {
          this.resetForm(form)
          M.toast({ html: "Empleado guardado satisfactoriamente" })
          this.getEmployees()
        }
      )
    }
  }

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Employee[]
        console.log(res);

      })
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;

  }

  deleteEmployee(_id: Employee) {
    if (confirm) {
      this.employeeService.deleteEmployee(_id)
        .subscribe(
          res => this.getEmployees()
        )
      M.toast({ html: 'Borrado Satisfactoriamente' })
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      //Reseteando formulario
      this.employeeService.selectedEmployee = new Employee();
    }
  }


}
