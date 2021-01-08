import { Component, OnInit } from '@angular/core';
import { Employee } from './employeeList'; 

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {

  isTable=false;
  isList=false;
  employee:any[];

  constructor() {
    this.employee=[ 
                    new Employee(1,"Raj",30000,"manager"),
                    new Employee(2,"Meena",50000,"Project Engineer"),
                    new Employee(3,"Geeta",36000,"HR"),
                    new Employee(4,"Jeet",67000,"Project Engineer"),
                  ]
  }
   getEmployees(){
     return this.employee;
    }

   onClickTable(){
     return this.isTable=true;
   }
   onClickList(){
    return this.isList=true;
  }
  clearForm(){
    this.isTable=false;
    this.isList=false
  }

}
