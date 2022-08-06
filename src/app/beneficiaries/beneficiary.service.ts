import { Injectable } from "@angular/core";
import{HttpClient,HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import { Beneficiary } from "./beneficiary";
import { Observable, throwError } from "rxjs";
@Injectable({
    providedIn:'root'
})
export class BeneficiaryService{
    private beneficiaryUrl:string="http://localhost:9595/IBA/api/customer";
    constructor(
        private http:HttpClient)
       { 
         }
    getAllBeneficiary():Observable<Beneficiary[]>{

        return this.http.get<Beneficiary[]>(`${this.beneficiaryUrl}/listBeneficiaries`);
    }

    deleteBeneficiary(beneficiary:any){
        return this.http.delete<Boolean>(`${this.beneficiaryUrl}/deleteBeneficiaries/${beneficiary.beneficiaryId}`);
    }

    createBeneficiary(beneficiary:Beneficiary) {
        return this.http.post<Beneficiary>(`${this.beneficiaryUrl}/addBeneficiary`,beneficiary);
      }
    
    getBeneficiaryById(beneficiaryId:number) {
        return this.http.get<Beneficiary>(`${this.beneficiaryUrl}/findBeneficiariesByid/${beneficiaryId}`+beneficiaryId);
      }
    
    updateBeneficiary(beneficiary:Beneficiary){
        return this.http.put<Beneficiary>(`${this.beneficiaryUrl}/updateBeneficiaries/${beneficiary.beneficiaryId}`,beneficiary);
      }
    // private handleError(err:HttpErrorResponse){
    //     let errorMessage="";
    //     if(err.error instanceof ErrorEvent)
    //     {
    //         errorMessage=`An error occured:":${err.error.message}`;
    //     }
    //     else{
    //         errorMessage=`Server returned code:${err.status},error message is:${err.message}`;
    //     }
    //     console.error(errorMessage);
    //     return throwError(errorMessage);
    // }
    
} 
    
         



