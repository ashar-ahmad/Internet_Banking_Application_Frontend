import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { EditadminComponent } from './editadmin/editadmin.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminlistComponent,
    EditadminComponent
  ],
  imports: [
    SharedModule
  ],
  exports:[
    AdminComponent,
    AdminlistComponent,
    EditadminComponent
  ]
})
export class AdminModule { }
