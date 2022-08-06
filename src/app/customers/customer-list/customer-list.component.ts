import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customers';
import { CustomerServices } from '../customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit,OnChanges,OnDestroy {

  customerList!: Customer[];
  filteredList!:Customer[];
  isAvailable!:boolean;

  constructor(private customerService: CustomerServices,private router:Router) {}
  ngOnDestroy(): void {
  }

  ngOnChanges(): void {
  this.fetchData();
  }

  ngOnInit(): void {
    this.customerList=[];
    this.fetchData();
  }

  fetchData()
  {
    this.customerList = [];
    this.customerService.listAllCustomers().subscribe(
      response=>this.customerList = response
    )
  }
  deleteCustomer(customer:Customer)
  {
    this.customerService.deleteCustomer(customer).subscribe(data=>{
      this.customerList = this.customerList.filter(deletedCustomer=>deletedCustomer!=customer) 
    })
    this.ngOnInit();
  }
}
