import { SavingAccount } from "../accounts/savingaccount";
import { TermAccount } from "../accounts/termaccount";
import { Role } from "../users/Role";

export class Customer{

    userId!:number;
    userName!:string;
    phoneNo!:string;
    emailID!:string;
    password!:string;
    age!:number;
    gender!:string;
    savingAccounts!:SavingAccount[];
    termAccounts!:TermAccount[];
    roles!: Role[];
}


