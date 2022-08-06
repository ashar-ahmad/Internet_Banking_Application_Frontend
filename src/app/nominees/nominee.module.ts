import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NomineeComponent } from './nominee.component';
import { SharedModule } from '../shared/shared.module';
import { NomineelistComponent } from './nomineelist/nomineelist.component';
import { AddnomineeComponent } from './addnominee/addnominee.component';




@NgModule({
  declarations: [
    NomineeComponent,
    NomineelistComponent,
    AddnomineeComponent,
   
  ],
  imports: [
    SharedModule
  ],
  exports:[
    NomineeComponent,
    NomineelistComponent,
    AddnomineeComponent
  ]
})
export class NomineeModule { }
