import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AccountModule } from './accounts/account.module';
import { AdminModule } from './admins/admin.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BeneficiaryModule } from './beneficiaries/beneficiary.module';
import { BeneficiaryService } from './beneficiaries/beneficiary.service';
import { CustomerModule } from './customers/customer.module';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';

import { NomineeModule } from './nominees/nominee.module';
import { TransactionModule } from './transactions/transaction.module';
import { AuthenticationService } from './users/user-services/authentication.service';
import { AuthInterceptor } from './users/user-services/AuthInterceptor';
import { UserModule } from './users/user.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    UserModule,
    CustomerModule,
    AdminModule,
    AccountModule,
    TransactionModule,
    NomineeModule,
    BeneficiaryModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule  
  ],
  providers: [
    HttpClient,
    BeneficiaryService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],

  bootstrap: [AppComponent]
})
export class AppModule { }
