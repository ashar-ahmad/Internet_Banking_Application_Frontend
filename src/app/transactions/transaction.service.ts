import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Transaction } from "./transaction";
import {catchError,tap} from "rxjs/operators";

@Injectable({
    providedIn:'root'
})
export class TransactionService{

    private transactionUrl:string="http://localhost:9595/IBA/api/customer";
    constructor(private http:HttpClient){};
    public getAllTransaction(){
        return this.http.get<Transaction[]>(`${this.transactionUrl}/AllAccTrans`);
    }
    private handleError(err:HttpErrorResponse)
    {
        let errorMessage=" ";
        if(err.error instanceof ErrorEvent)
        {
            errorMessage=`An error occured: ": ${err.error.message}`;
        }
        else{
            errorMessage=`Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}