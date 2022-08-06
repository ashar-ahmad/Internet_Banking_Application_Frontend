import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';
import { AccoutnService } from '../account.service';

@Component({
  selector: 'app-viewbalance',
  templateUrl: './viewbalance.component.html',
  styleUrls: ['./viewbalance.component.css']
})
export class ViewbalanceComponent implements OnInit {

  savingBal!:number;
  termBal!:number;
  savingId!:number;
  termId!:number;
  constructor(private accountService:AccoutnService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.savingId=Number(this.route.snapshot.paramMap.get('savingId'));
    this.termId=Number(this.route.snapshot.paramMap.get('termId'));
    this.accountService.getAccount(this.savingId).subscribe(
      data=>{
        this.savingBal=data.balance;
      }
    )
    this.accountService.getAccount(this.termId).subscribe( 
      data=>{
      this.termBal=data.balance;
      }
    )
  }  

}
