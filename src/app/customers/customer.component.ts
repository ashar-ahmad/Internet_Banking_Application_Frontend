import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  
  constructor(public router: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log('in customer component');
    // this.router.params.subscribe(params=>console.log(params));
  }

}
