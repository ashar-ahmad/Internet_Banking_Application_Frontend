import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Beneficiary } from '../beneficiary';
import { BeneficiaryService } from '../beneficiary.service';

@Component({
  selector: 'app-beneficiarylist',
  templateUrl: './beneficiarylist.component.html',
  styleUrls: ['./beneficiarylist.component.css']
})
export class BeneficiarylistComponent implements OnInit {


  filteredBeneficiaries: Beneficiary[] = [];

  beneficiaries: Beneficiary[] = [];

  constructor(private router: Router, private beneficiaryService: BeneficiaryService,private route:ActivatedRoute) { }



  ngOnInit() {
    let sid=Number(this.route.snapshot.paramMap.get('savingId'));
    let tid=Number(this.route.snapshot.paramMap.get('termId'));
    this.beneficiaryService.getAllBeneficiary().subscribe({
    next: data=>{
      this.beneficiaries=data;     
    }
  });   

  // this.beneficiaries.map((ben:Beneficiary)=>{
  //   if(ben.beneficiaryAccNo==sid||ben.beneficiaryAccNo==tid)
  //   {
  //     console.log("here");
  //     this.filteredBeneficiaries.push(ben);
  //   }       
  // })   
      
    
  }

  deleteBeneficiary(beneficiary: Beneficiary) {
    this.beneficiaryService.deleteBeneficiary(beneficiary).subscribe(
      data => {
        this.beneficiaries = this.beneficiaries.filter(u => u !== beneficiary);
      }
    )

  }




}
function deleteBeneficiary(employee: any, Employee: any) {
  throw new Error('Function not implemented.');
}

