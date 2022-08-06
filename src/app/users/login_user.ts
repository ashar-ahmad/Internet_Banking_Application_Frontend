import { Role } from "./Role";

export class LoginUser {
    userId!: number;
    userName!: string;
    phoneNo!: string;
    emailID!: string;
    password!: string;
    age!: number;
    gender!: string;
    roles!: Role[];
}
