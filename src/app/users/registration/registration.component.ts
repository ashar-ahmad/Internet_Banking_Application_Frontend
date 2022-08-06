import { DatePipe, getLocaleDateTimeFormat } from '@angular/common';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SavingAccount } from 'src/app/accounts/savingaccount';
import { TermAccount } from 'src/app/accounts/termaccount';
import { Admin } from 'src/app/admins/admin';
import { Customer } from 'src/app/customers/customer';
import { Role } from '../Role';
import { AdminRegistration } from './admin_registration.service';
import { CustomerRegistration } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  customerRegistrationForm!: FormGroup;
  adminRegistrationForm!: FormGroup;

  customer: Customer = new Customer();
  admin: Admin = new Admin();


  constructor(private fb: FormBuilder,
    private customerService: CustomerRegistration,
    private adminService: AdminRegistration,
    private router: Router) { }

  ngOnInit(): void {
    this.customerRegistrationForm = this.fb.group({
      userId: '',
      userName: ['', [Validators.required]],
      phoneNo: ['', [Validators.required, Validators.minLength(10), Validators.min(0)]],
      emailID: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    })

    this.adminRegistrationForm = this.fb.group({
      userId: '',
      userName: ['', [Validators.required]],
      phoneNo: ['', [Validators.required, Validators.minLength(10), Validators.min(0)]],
      emailID: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    })
  }

  register(): void {
    console.log(this.customerRegistrationForm);
    console.log('Saved: ' + JSON.stringify(this.customerRegistrationForm.value));

    // this.customer = {...this.customerRegistrationForm.value}
    this.customer.userName = this.customerRegistrationForm.get('userName')?.value;
    this.customer.phoneNo = this.customerRegistrationForm.get('phoneNo')?.value;
    this.customer.emailID = this.customerRegistrationForm.get('emailID')?.value;
    this.customer.password = this.customerRegistrationForm.get('password')?.value;
    this.customer.age = this.customerRegistrationForm.get('age')?.value;
    this.customer.gender = this.customerRegistrationForm.get('gender')?.value;
    let roles = new Role();
    roles.id = 1;
    roles.name = "customer";
    roles.description = "customer";
    this.customer.roles = [roles];

    let cDate=new Date();

    let savingAcc=new SavingAccount();
    savingAcc.accountType="SAVINGS_ACCOUNT";
    savingAcc.balance=1000;    
    savingAcc.dateOfOpening=cDate;
    console.log( savingAcc.dateOfOpening);
    savingAcc.interestRate=5;
    savingAcc.minBalance=500;
    savingAcc.fine=50;

    let termAcc=new TermAccount();
    termAcc.accountType="TERM_ACCOUNT";
    termAcc.dateOfOpening=cDate;
    termAcc.balance=100;
    termAcc.interestRate=5;
    termAcc.months=6;
    termAcc.penaltyAmount=100;

    this.customer.savingAccounts=[savingAcc];
    this.customer.termAccounts=[termAcc];

    console.log('this.customer', this.customer)

    this.customerService.registerCustomer(this.customer).subscribe({
      next: data => {
        console.log(data);
        this.router.navigate([''])
      }
    })
  }



  registerAdmin(): void {
    console.log(this.adminRegistrationForm);
    console.log('Saved: ' + JSON.stringify(this.adminRegistrationForm.value));    
    this.admin.userName = this.adminRegistrationForm.get('userName')?.value;
    this.admin.phoneNo = this.adminRegistrationForm.get('phoneNo')?.value;
    this.admin.emailID = this.adminRegistrationForm.get('emailID')?.value;
    this.admin.password = this.adminRegistrationForm.get('password')?.value;
    this.admin.age = this.adminRegistrationForm.get('age')?.value;
    this.admin.gender = this.adminRegistrationForm.get('gender')?.value;
    let roles = new Role();
    roles.id = 2;
    roles.name = "admin";
    roles.description = "admin";

    this.admin.roles = [roles];

    console.log('this.admin', this.admin)

    this.adminService.registerAdmin(this.admin).subscribe({
      next: data => {
        console.log(data);
        this.router.navigate([''])
      }
    })
  }

}
