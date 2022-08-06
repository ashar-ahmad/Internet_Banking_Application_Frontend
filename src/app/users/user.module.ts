import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { RouterModule } from '@angular/router';
import { AuthGaurdService } from './user-services/auth-gaurd.service';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CustomerListComponent } from '../customers/customer-list/customer-list.component';
import { EditCustomerComponent } from '../customers/edit-customer/edit-customer.component';
import { AdminlistComponent } from '../admins/adminlist/adminlist.component';



@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    AdminhomeComponent,
    CustomerhomeComponent,
    AdminprofileComponent,
    CustomerprofileComponent,
    RegistrationComponent,
    PagenotfoundComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,    
    RouterModule.forRoot([
      {
        path: 'home', component: HomeComponent,
        //canActivate: [AuthGaurdService]
      },
      {
        path: 'home/customerhome', component: CustomerhomeComponent,
        canActivate: [AuthGaurdService]
      },
      { path: 'home/adminhome', component: AdminhomeComponent,
      canActivate: [AuthGaurdService]},
      { path: 'home/registration', component: RegistrationComponent },
      {path:'home/adminhome/customers',component:CustomerListComponent},
      {path:'home/adminhome/customers/edit/:id',component:EditCustomerComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },     
      { path: 'home/customers', component: CustomerListComponent },
      {path:'home/adminhome/admins',component:AdminlistComponent}
      //{ path: '**', component: PagenotfoundComponent }
    ])
  ],
  exports: [
    UserComponent,
    HomeComponent,
    AdminhomeComponent,
    CustomerhomeComponent,
    AdminprofileComponent,
    CustomerprofileComponent,
    RegistrationComponent,
    RouterModule

  ]
})
export class UserModule { }
