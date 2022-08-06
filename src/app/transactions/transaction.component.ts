import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}
