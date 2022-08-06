import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { SharedModule } from '../shared/shared.module';
import { ViewtransactionComponent } from './viewtransaction/viewtransaction.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerhomeComponent } from '../users/customerhome/customerhome.component';
import { AdminhomeComponent } from '../users/adminhome/adminhome.component';



@NgModule({
  declarations: [
    TransactionComponent,
    ViewtransactionComponent
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([
      {path:"home/customerhome",component:CustomerhomeComponent},
      {path:"home/adminhome",component:AdminhomeComponent},
      {path:"customerhome/transactions/:userId/:savingId/:termId",component:ViewtransactionComponent},
      {path:"adminhome/transactions",component:ViewtransactionComponent}     
    ])


  ],
  exports:
  [
    TransactionComponent,
    ViewtransactionComponent
  ]
})
export class TransactionModule { }
