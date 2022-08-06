import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

import { AppRoutingModule } from '../app-routing.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    EditCustomerComponent,
    AddCustomerComponent
    
  ],
  imports: [
   SharedModule,
   CustomerRoutingModule,
   RouterModule,
   FormsModule,
   ReactiveFormsModule
  ],
  exports:[
    CustomerComponent,
    CustomerListComponent,
    EditCustomerComponent
  ]
})
export class CustomerModule { }
