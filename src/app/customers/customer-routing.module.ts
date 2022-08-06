import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from '../users/adminhome/adminhome.component';
import { HomeComponent } from '../users/home/home.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerResolver } from './customer.route-resolver';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';


const routes: Routes = [
    {path:'home/adminhome/customers',component:CustomerListComponent},
    {path:'home/adminhome/customers/edit/:id',component:EditCustomerComponent},
    {path:'home/adminhome',component:AdminhomeComponent},
    {path:'home',component:HomeComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class CustomerRoutingModule{}