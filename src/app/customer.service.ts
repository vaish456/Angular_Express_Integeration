import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer = [
    {id:1,name:"vaishali",phone:"938282282",email:"vaishali@gmail.com"},
    {id:2,name:"Aparna",phone:"938282282",email:"aparna@gmail.com"},
    {id:3,name:"Prachi",phone:"938282282",email:"prachi@gmail.com"},
    {id:4,name:"Raj",phone:"938282282",email:"raj@gmail.com"}
  ]

  getCustomers(){
    return this.customer;
  }
  constructor() { }
}
