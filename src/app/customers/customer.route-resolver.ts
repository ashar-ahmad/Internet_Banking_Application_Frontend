import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,Resolve,RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Customer } from "./customers";
import { CustomerServices } from "./customers.service";

@Injectable({
    providedIn:'root'
})

export class CustomerResolver implements Resolve<Customer>{

    constructor(private customerService: CustomerServices){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customer>{
        const id = Number(route.paramMap.get('id'));
        return this.customerService.findCustomerById(id);
    }
}