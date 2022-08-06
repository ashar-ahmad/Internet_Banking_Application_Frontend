import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Transaction } from "../transactions/transaction";
import { Account } from "./account";
import { SavingAccount } from "./savingaccount";
import { TermAccount } from "./termaccount";

@Injectable({
    providedIn:"root"
})
export class AccoutnService{
    private baseUrl:string='http://localhost:9595/IBA/api';

    constructor(private http:HttpClient){};

    deposit(trans:Transaction,id:number):Observable<Transaction>
    {
        return this.http.patch<Transaction>(`${this.baseUrl}/customer/deposit/${id}`,trans);
    }

    withdraw(trans:Transaction,id:number,type:string):Observable<Transaction>
    {
        return this.http.patch<Transaction>(`${this.baseUrl}/customer/withdraw/${id}/${type}`,trans);
    }

    transfer(trans:Transaction,sid:number,rid:number):Observable<Transaction>
    {
        return this.http.patch<Transaction>(`${this.baseUrl}/customer/transfer/${sid}/${rid}`,trans);
    }
    editSavingAccount(sav:SavingAccount,id:number)
    {
        return this.http.put<SavingAccount>(`${this.baseUrl}/admin/updateSavingAccount/${id}`,sav);
    }   
    editTermAccount(term:TermAccount,id:number):Observable<TermAccount>
    {
        return this.http.put<TermAccount>(`${this.baseUrl}/admin/updateTermAccount/${id}`,term);
    }   
    getAccount(id:number):Observable<Account>
    {
        return this.http.get<Account>(`${this.baseUrl}/customer/accountDetails/${id}`);
    }
}