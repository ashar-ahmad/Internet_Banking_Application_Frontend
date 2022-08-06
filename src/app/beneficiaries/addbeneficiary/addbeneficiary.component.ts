import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { Beneficiary } from '../beneficiary';
import { BeneficiaryService } from '../beneficiary.service';

@Component({
  selector: 'app-addbeneficiary',
  templateUrl: './addbeneficiary.component.html',
  styleUrls: ['./addbeneficiary.component.css']
})
export class AddbeneficiaryComponent implements OnInit {
 

benef:Beneficiary[]=[];
addbenForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private beneficiary:BeneficiaryService,private router:Router) { }
 
  ngOnInit(){
        this.addbenForm = this.formBuilder.group({
        beneficiaryId: [''],
        beneficiaryName: ['', [Validators.required, Validators.minLength(1)]],
        beneficiaryAccNo: ['',[Validators.required,Validators.minLength(1)]],
        ifsc: ['',Validators.required],
        accountType: ['',Validators.required]
       
      });
    

  }
  onSubmit() {
    this.beneficiary.createBeneficiary(this.addbenForm.value).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/customerhome/beneficiaries']);
    });
  }
}
