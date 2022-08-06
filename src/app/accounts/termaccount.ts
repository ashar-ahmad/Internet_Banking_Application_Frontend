import { Customer } from "../customers/customer";
import { Account } from "./account";

export class TermAccount extends Account{
    months!:number;
    penaltyAmount!:number;
    customers1!:Customer[];    
}