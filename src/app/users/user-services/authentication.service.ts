import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/customers/customer';
import { LoginUser } from '../login_user';
//import { JwtResponse } from '../login/login.component';

export class User {

  userName!: string;
  password!: string;
  constructor(
    public status: string,
  ) { }

}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user!: User;
  private baseUrl = 'http://localhost:9595/IBA/api'

  constructor(
    private httpClient: HttpClient
  ) { }

  

  authenticate(userName: string, password: string): Observable<any> {

    console.log('in authentication service authenticate method', userName)

    

    return this.httpClient.post<any>(`${this.baseUrl}/user/login`, { userName, password })
      .pipe(map(
        userData => {
          console.log("inside function");
          sessionStorage.setItem('userName', userName);
          let tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        }
      ));
  }

  getCustomer(userName:string):Observable<Customer>
  { 
    return this.httpClient.get<Customer>(`${this.baseUrl}/customer/getCustomerByName/${userName}`);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('userName')
    // console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('userName')
  }

  getUser(userName: string): Observable<LoginUser>{     

    return this.httpClient.get<LoginUser>(`${this.baseUrl}/user/getUser/${userName}`);
  }
 
}