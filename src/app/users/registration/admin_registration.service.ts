import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Admin {
    userId!: number;
    userName!: string;
    phoneNo!: string;
    emailID!: string;
    password!: string;
    age!: number;
    gender!: string;
}

@Injectable({
    providedIn: 'root'
})
export class AdminRegistration {
    private baseUrl = 'http://localhost:9595/IBA/api/user'
    constructor(
        private httpClient: HttpClient
    ) { }

    public registerAdmin(admin: Admin){
        return this.httpClient.post<Admin>(`${this.baseUrl}/signUpA`, admin);
    }

}