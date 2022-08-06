// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Beneficiary } from '../beneficiary';
// import { BeneficiaryService } from '../beneficiary.service';
// import { ActivatedRoute} from '@angular/router';
// import {first} from "rxjs/operators";
// import { Subscription } from 'rxjs';
// @Component({
//   selector: 'app-editbeneficiary',
//   templateUrl: './editbeneficiary.component.html',
//   styleUrls: ['./editbeneficiary.component.css']
// })
// export class EditbeneficiaryComponent implements OnInit {
//   beneficiary:Beneficiary[]=[];
//   editForm!: FormGroup;
//   private sub!: Subscription;
//   constructor(private formBuilder: FormBuilder,private router: Router, private beneficiaryservice:BeneficiaryService,private active:ActivatedRoute) { }

//   ngOnInit(): void {
    
//   this.editForm = this.formBuilder.group({
//     beneficiaryId: [''],
//     beneficiaryName: [''],
//     beneficiaryAccNo: [''],
//     ifsc: [''],
//     accountType: [''],
   
//   });
  


// }
// onSubmit() {
//   this.beneficiaryservice.updateBeneficiary(this.editForm.value)
//     .pipe(first())
//     .subscribe(
//       data => {
        
//           this.router.navigate(['app-beneficiarylist']);
        
//       });
// }
// }
