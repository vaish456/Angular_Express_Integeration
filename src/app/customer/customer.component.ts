import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  cust:any[]=[];
  constructor(private custserv : CustomerService) 
  {
    this.cust = custserv.getCustomers();
    console.log(this.cust);
  }

  ngOnInit(): void {
  }

}
