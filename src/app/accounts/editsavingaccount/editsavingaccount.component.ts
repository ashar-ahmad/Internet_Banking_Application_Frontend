import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccoutnService } from '../account.service';
import { SavingAccount } from '../savingaccount';
import { Operator } from 'rxjs';
import { Observable } from "rxjs";

@Component({
  selector: 'app-editsavingaccount',
  templateUrl: './editsavingaccount.component.html',
  styleUrls: ['./editsavingaccount.component.css']
})
export class EditsavingaccountComponent implements OnInit {

  editSavingForm!: FormGroup;
  savingAccount = new SavingAccount();

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private accountService: AccoutnService) { };

  ngOnInit(): void {
    this.editSavingForm = this.fb.group(
      {
        accountId: null,
        interestRate: null,
        penalty: null,
        minBalance: null
      }
    )
  }

  editSaving():void
  {
    this.savingAccount.interestRate=this.editSavingForm.get('interestRate')?.value;
    this.savingAccount.fine=this.editSavingForm.get('penalty')?.value;
    this.savingAccount.minBalance=this.editSavingForm.get('minBalance')?.value;
    this.accountService.editSavingAccount(this.savingAccount,this.editSavingForm.get('accountId')?.value).subscribe(
     data=>{
      if(data.accountId==0)
      {
        console.log("account does not exist");
      }
     }
    )
  }

}
