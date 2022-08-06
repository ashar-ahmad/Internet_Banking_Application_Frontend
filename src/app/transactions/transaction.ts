import { Account } from "../accounts/account";

export class Transaction{
    transactionId!: number;
    transactionType!: string;
    amount!: string;
    transactionStatus!: string;   
    transactionRemarks!: string;
    bankAccount!: Account;
    transactionDateTime!: Date;  
  
}