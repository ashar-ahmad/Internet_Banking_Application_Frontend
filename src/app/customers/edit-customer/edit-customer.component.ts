import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customers';
import { CustomerServices } from '../customers.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  editForm!:FormGroup;
  message:string='loaded';
  customer!:Customer;
  id!:number;

  constructor(private router:ActivatedRoute,private customerService:CustomerServices,private formBuilder: FormBuilder,private route:Router) { }

  ngOnInit(): void {

    this.editForm = this.formBuilder.group(
      {
        // userId: new FormControl(),
        // userName:new FormControl('',[Validators.required]),
        // phoneNo:new FormControl('',[Validators.required,Validators.minLength(10),Validators.min(0)]),
        // emailID:new FormControl('',[Validators.email,Validators.required]),

        userId: '',
        userName: ['',[Validators.required]],
        phoneNo:['',[Validators.required,Validators.minLength(10),Validators.min(0)]],
        emailID:['',[Validators.email,Validators.required]],
      }
      
    )

    this.id = Number(this.router.snapshot.paramMap.get('id'));
    console.log('id in edit customer',this.id);
    console.log(typeof this.id);
    this.customerService.findCustomerById(this.id).subscribe(response=>{
      this.customer = response
      this.displayDataOnForm(this.customer);
      console.log(this.customer);  
    });

    
  }

  displayDataOnForm(customer:Customer)
  {

    if(this.editForm)
    this.editForm.reset();

    this.editForm.patchValue({
      userId: this.customer.userId,
      userName: this.customer.userName,
      phoneNo: this.customer.phoneNo,
      emailID: this.customer.emailID
    })
  }
  
  onSubmit()
  {
    console.log('old retrieved customer data',this.customer);
    const updatedCustomer = {...this.customer,...this.editForm.value}
    console.log('new updated customer data',updatedCustomer);
    this.customerService.updateCustomer(updatedCustomer,updatedCustomer.userId).subscribe({
      next: ()=>this.onUpdateComplete()
    });
  }

  onUpdateComplete()
  {
    this.editForm.reset();
    this.route.navigate(['/home/adminhome/customers']);
  }
  
}
