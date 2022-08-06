import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbeneficiaryComponent } from './beneficiaries/addbeneficiary/addbeneficiary.component';
import { BeneficiaryComponent } from './beneficiaries/beneficiary.component';
import { BeneficiarylistComponent } from './beneficiaries/beneficiarylist/beneficiarylist.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
