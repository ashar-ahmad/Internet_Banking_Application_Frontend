import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { SharedModule } from '../shared/shared.module';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferComponent } from './transfer/transfer.component';
import { ViewbalanceComponent } from './viewbalance/viewbalance.component';
import { EditsavingaccountComponent } from './editsavingaccount/editsavingaccount.component';
import { EdittermaccountComponent } from './edittermaccount/edittermaccount.component';
import { BankreportComponent } from './bankreport/bankreport.component';
import { RouterModule } from '@angular/router';
import { CustomerhomeComponent } from '../users/customerhome/customerhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminhomeComponent } from '../users/adminhome/adminhome.component';




@NgModule({
  declarations: [
    AccountComponent,
    DepositComponent,
    WithdrawComponent,
    TransferComponent,
    ViewbalanceComponent,
    EditsavingaccountComponent,
    EdittermaccountComponent,
    BankreportComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(
      [
        {path:"home/customerhome",component:CustomerhomeComponent},
        {path:"home/adminhome",component:AdminhomeComponent},
        {path:"customerhome/deposit/:userId/:savingId/:termId",component:DepositComponent},
        {path:"customerhome/withdraw/:userId/:savingId/:termId",component:WithdrawComponent},
        {path:"customerhome/transfer/:userId/:savingId/:termId",component:TransferComponent},
        {path:"adminhome/editsaving",component:EditsavingaccountComponent},
        {path:"adminhome/editterm",component:EdittermaccountComponent},
        {path:"customerhome/viewbalance/:savingId/:termId",component:ViewbalanceComponent}        
      ]
    )
  ],
  exports:[
    AccountComponent,
    DepositComponent,
    WithdrawComponent,
    TransferComponent,
    ViewbalanceComponent,
    EditsavingaccountComponent,
    EdittermaccountComponent,
    BankreportComponent
  ]
})
export class AccountModule { }
