import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/transactions/transaction';
import { AccoutnService } from '../account.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  withdrawFrom!: FormGroup;
  transaction = new Transaction();
  isTransDone:boolean=false;
  remarks!:string;

  constructor(private fb: FormBuilder, private accountService: AccoutnService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.isTransDone=false;
    this.withdrawFrom = this.fb.group({
      amount!: ['',[Validators.required,Validators.min(0)]],
      accountType!: ['',Validators.required]
    })
  }

  withdraw(): void {
    console.log("in withdraw");
    let id!:number;
    let type!:string;
    this.transaction.amount = this.withdrawFrom.get('amount')?.value;
    console.log(this.withdrawFrom.get('accountType')?.value);
    if (this.withdrawFrom.get('accountType')?.value == 'Savings Account') {
      id=Number(this.route.snapshot.paramMap.get('savingId'));
      console.log(this.route.snapshot.paramMap.get('savingId'));      
      type="SAVINGS_ACCOUNT";
    }
    else{
      id=Number(this.route.snapshot.paramMap.get('termId'));
      console.log(id);
      type="TERM_ACCOUNT";
    }
    this.accountService.withdraw(this.transaction,id,type).subscribe(
      data=>{
        console.log(data.transactionRemarks);
        this.remarks=data.transactionRemarks;
        this.isTransDone=true;
      }
    );
  }

}
