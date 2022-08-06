import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransactionService } from '../transaction.service';
import { TransactionComponent } from '../transaction.component';
import { TransactionModule } from '../transaction.module';
import { Transaction } from '../transaction';
import { Account } from 'src/app/accounts/account';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewtransaction',
  templateUrl: './viewtransaction.component.html',
  styleUrls: ['./viewtransaction.component.css']
})
export class ViewtransactionComponent implements OnInit {

  constructor(private transactionService: TransactionService, private route: ActivatedRoute) { };
  private _listFilter!: number;
  private _listFilter1!: Account;
  private _listFilter2!: Date;
  private _listFilter3!: Date;
  sId!:number;
  tId!:number;
  errorMessage: string = " ";
  acctId!: number;
  sub!: Subscription;
  trans!: Transaction;

  get listFilter(): number {
    return this._listFilter;
  }
  set listFilter(value: number) {
    this._listFilter = value;

    if (value) {
      console.log('Insetter: ' + value);
      this.filteredTransactions = this.perfromFilter(value);
    }
    else {
      this.filteredTransactions = this.transactions1;
      if(this.sId==0)
      {
        this.filteredTransactions = this.transactions;
      }      
    }
  }



  get listFilter1(): Account {
    return this._listFilter1;
  }
  set listFilter1(value: Account) {
    this._listFilter1 = value;

    if (value) {
      console.log('Insetter: ' + value);
      this.filteredTransactions = this.perfromFilter1(value);
      console.log(this.filteredTransactions.length);
    }
    else {
      this.filteredTransactions = this.transactions1;
      if(this.sId==0)
      {
        this.filteredTransactions = this.transactions;
      }   
    }
  }


  get listFilter2(): Date {
    return this._listFilter2;
  }
  set listFilter2(value: Date) {
    this._listFilter2 = value;

    if (value) {
      console.log('Insetter: ' + value);
      this.filteredTransactions = this.perfromFilter2(value);
      console.log(this.filteredTransactions.length);
    }
    else {
      this.filteredTransactions = this.transactions1;
      if(this.sId==0)
      {
        this.filteredTransactions = this.transactions;
      }   
    }
  }

  get listFilter3(): Date {
    return this._listFilter3;
  }
  set listFilter3(value: Date) {
    this._listFilter3 = value;

    if (value) {
      console.log('Insetter: ' + value);
      this.filteredTransactions = this.perfromFilter3(value);
      console.log(this.filteredTransactions.length);
    }
    else {
      this.filteredTransactions = this.transactions1;
      if(this.sId==0)
      {
        this.filteredTransactions = this.transactions;
      }   
    }
  }

  filteredTransactions: Transaction[] = [];
  transactions: Transaction[] = [];
  transactions1:Transaction[]=[];




  ngOnInit(): void {
    this.filteredTransactions = [];
    //this.acctId=thi
    this.getTransactions();
  }

  getTransactions() {
    this.sub = this.transactionService.getAllTransaction().subscribe({
      next: transactions => {
        this.transactions = transactions;

         this.sId = Number(this.route.snapshot.paramMap.get('savingId'));
         this.tId = Number(this.route.snapshot.paramMap.get('termId'));
        console.log(this.sId);
        if (this.tId > 0 && this.sId > 0) {
          this.transactions.map((trans: Transaction) => {          
            if(trans.bankAccount!=null){
            if((typeof trans.bankAccount.accountId)!="undefined"){
              if(trans.bankAccount.accountId == this.sId || trans.bankAccount.accountId == this.tId)
              {
                this.transactions1.push(trans);
              }           
            }  
            else{
              let temp=trans.bankAccount.toString();
              if(temp==this.sId.toString()||temp==this.tId.toString())
              {
                this.transactions1.push(trans);
              }
            }         
          }            
          });  
          this.filteredTransactions=this.transactions1;        
        }        
        else{
          this.filteredTransactions=this.transactions;
        }
        this.trans = this.filteredTransactions[0];
        this.filteredTransactions.shift();
        console.log('trans object for filtered list', this.trans);
        console.log('filtered list is', this.filteredTransactions);
      },
      error: err => this.errorMessage = err
    });
  }

  perfromFilter(filterby: number): Transaction[] {

    if(this.sId==0)
    {
      this.transactions1 = this.transactions;
    }   

    return this.transactions1.filter((transaction: Transaction) =>
      transaction.transactionId == filterby
    );

  }

  perfromFilter1(filterby: Account): Transaction[] {

    if(this.sId==0)
    {
      this.transactions1 = this.transactions;
    } 
    return this.transactions1.filter((transaction: Transaction) =>
      transaction.bankAccount == filterby
    );

  }

  perfromFilter2(filterby1: Date): Transaction[] {

    if(this.sId==0)
    {
      this.transactions1 = this.transactions;
    } 
    return this.transactions1.filter((transaction: Transaction) =>
      transaction.transactionDateTime >= filterby1
    );

  }


  perfromFilter3(filterby2: Date): Transaction[] {

    if(this.sId==0)
    {
      this.transactions1 = this.transactions;
    } 
    return this.transactions1.filter((transaction: Transaction) =>
      transaction.transactionDateTime <= filterby2
    );

  }




}
