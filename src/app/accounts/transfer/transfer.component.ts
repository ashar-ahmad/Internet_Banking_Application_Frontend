import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/transactions/transaction';
import { AccoutnService } from '../account.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  transferForm!: FormGroup;
  transaction = new Transaction();
  isTransDone:boolean=false;
  remarks!:string;

  constructor(private fb: FormBuilder, private accountService: AccoutnService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.isTransDone=false;
    this.transferForm = this.fb.group({
      accountId!:['',[Validators.required,Validators.min(0)]],
      amount!: ['',[Validators.required,Validators.min(0)]],
      accountType!: ['',[Validators.required]]
    })
  }

  transfer(): void {
    console.log("in transfer");
    let id!:number;
    let accId:number=this.transferForm.get('accountId')?.value;
    this.transaction.amount = this.transferForm.get('amount')?.value;
    console.log(this.transferForm.get('accountType')?.value);
    if (this.transferForm.get('accountType')?.value == 'Savings Account') {
      id=Number(this.route.snapshot.paramMap.get('savingId'));
      console.log(this.route.snapshot.paramMap.get('savingId'));      
    }
    else{
      id=Number(this.route.snapshot.paramMap.get('termId'));
      console.log(id);  
    }
    this.accountService.transfer(this.transaction,id,accId).subscribe(
      data=>{
        console.log(data.transactionRemarks);
        this.remarks=data.transactionRemarks;
        this.isTransDone=true;
      }
    );
  }

}
