import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './admin_registration.service';

export class Customer {
    userId!: number;
    userName!: string;
    phoneNo!: string;
    emailID!: string;
    password!: string;
    age!: number;
    gender!: string;
}

@Injectable({
    providedIn: 'root'
})
export class CustomerRegistration {
    private baseUrl = 'http://localhost:9595/IBA/api/user'
    constructor(
        private httpClient: HttpClient
    ) { }

    public registerCustomer(customer: Customer){
        return this.httpClient.post<Customer>(`${this.baseUrl}/signUpC`, customer);
    } 
}