import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Customer } from "./customers";

@Injectable({
    providedIn:'root'
})
export class CustomerServices{
    private baseUrl = 'http://localhost:9595/IBA/api/admin';

    constructor(private http: HttpClient){}

    public listAllCustomers()
    {
        return this.http.get<Customer[]>(`${this.baseUrl}/listCustomers`);
    }

    public addCustomer(customer: any)
    {
        return this.http.put<Customer>(`${this.baseUrl}/addCustomer`,customer);
    }

    public updateCustomer(customer:any,id:number)
    {
        return this.http.put<string>(`${this.baseUrl}/updateCustomer/${id}`,customer);
    }

    public deleteCustomer(customer:any)
    {
        return this.http.delete<string>(`${this.baseUrl}/deleteCustomer/${customer.userId}`);
    }

    public findCustomerById(id:number)
    {
        return this.http.get<Customer>(`${this.baseUrl}/findCustomerById/${id}`)
    }
}