import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customers/customer';
import { AuthenticationService } from '../user-services/authentication.service';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit {

  constructor(private auhService:AuthenticationService) { }

  userId!:number;
  savingId!:number;
  termId!:number;
  customer!:Customer;

  ngOnInit(): void {   
    let user=sessionStorage.getItem('userName');
    console.log(user);
    console.log(typeof user);
    //let parsedUser=JSON.parse(user);
    if(user!=null){
    this.auhService.getCustomer(user).subscribe(
      data=>{
        this.userId=data.userId;
        this.savingId=data.savingAccounts[0].accountId;
        this.termId=data.termAccounts[0].accountId;
        console.log(this.savingId);
      }
    )
    }
  }

}
