import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'src/app/transactions/transaction';
import { Account } from '../account';
import { AccoutnService } from '../account.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  depositFrom!: FormGroup;
  transaction = new Transaction();
  isTransDone:boolean=false;
  remarks!:string;

  constructor(private fb: FormBuilder, private accountService: AccoutnService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.isTransDone=false;
    this.depositFrom = this.fb.group({
      amount!: ['',[Validators.required,Validators.min(0)]],
      accountType!: ['',Validators.required]
    })
  }

  deposit(): void {
    console.log("in deposit");
    let id!:number;
    this.transaction.amount = this.depositFrom.get('amount')?.value;
    console.log(this.depositFrom.get('accountType')?.value);
    if (this.depositFrom.get('accountType')?.value == 'Savings Account') {
      id=Number(this.route.snapshot.paramMap.get('savingId'));
      console.log(this.route.snapshot.paramMap.get('savingId'));      
    }
    else{
      id=Number(this.route.snapshot.paramMap.get('termId'));
      console.log(id);  
    }
    this.accountService.deposit(this.transaction,id).subscribe(
      data=>{
        console.log(data.transactionRemarks);
        this.remarks=data.transactionRemarks;
        this.isTransDone=true;
      }
    );
  }

}
