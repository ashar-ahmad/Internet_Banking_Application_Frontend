import { Beneficiary } from "../beneficiaries/beneficiary";
import { Transaction } from "../transactions/transaction";

export class Account{
    accountId!:number;
    interestRate!:number;
    balance!:number;
    dateOfOpening!:Date;
    beneficiaries!:Beneficiary;
    accountType!:string;
    transactions!:Transaction;
}