import { Customer } from "../customers/customer";
import { Account } from "./account";

export class SavingAccount extends Account{
    minBalance!:number;
    fine!:number;
    customers!:Customer[];    
}