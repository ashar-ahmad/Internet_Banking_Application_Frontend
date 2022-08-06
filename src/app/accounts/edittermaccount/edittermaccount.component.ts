import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccoutnService } from '../account.service';
import { SavingAccount } from '../savingaccount';
import { TermAccount } from '../termaccount';

@Component({
  selector: 'app-edittermaccount',
  templateUrl: './edittermaccount.component.html',
  styleUrls: ['./edittermaccount.component.css']
})
export class EdittermaccountComponent implements OnInit {

  editTermForm!: FormGroup;
  termAccount = new TermAccount();

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private accountService: AccoutnService) { };

  ngOnInit(): void {
    this.editTermForm = this.fb.group(
      {
        accountId: null,
        interestRate: null,
        penalty: null,
        months: null
      }
    )
  }

  editTerm():void
  {
    this.termAccount.interestRate=this.editTermForm.get('interestRate')?.value;
    this.termAccount.penaltyAmount=this.editTermForm.get('penalty')?.value;
    this.termAccount.months=this.editTermForm.get('months')?.value;
    this.accountService.editTermAccount(this.termAccount,this.editTermForm.get('accountId')?.value).subscribe(
     data=>{
      console.log(data.penaltyAmount);
     }
    )
  }

}
