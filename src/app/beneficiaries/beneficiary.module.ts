import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiaryComponent } from './beneficiary.component';
import { SharedModule } from '../shared/shared.module';
import { BeneficiarylistComponent } from './beneficiarylist/beneficiarylist.component';
import { AddbeneficiaryComponent } from './addbeneficiary/addbeneficiary.component';
import { AppRoutingModule } from '../app-routing.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerhomeComponent } from '../users/customerhome/customerhome.component';

const routes: Routes = [

  { path: 'customerhome/beneficiaries', component: BeneficiarylistComponent },
  { path: 'customerhome/beneficiaries/add', component: AddbeneficiaryComponent },

  { path: 'customerhome', component: CustomerhomeComponent }
];

@NgModule({
  declarations: [
    BeneficiaryComponent,
    BeneficiarylistComponent,
    AddbeneficiaryComponent,

  ],
  imports: [
    SharedModule,
    AppRoutingModule, RouterModule.forChild(routes), ReactiveFormsModule
  ],
  exports: [
    BeneficiaryComponent,
    BeneficiarylistComponent,
    AddbeneficiaryComponent,

    RouterModule

  ]
})
export class BeneficiaryModule { }
