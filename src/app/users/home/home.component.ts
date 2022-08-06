import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../user-services/authentication.service';

export class JwtResponse {

  jwtToken!: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName = ''
  password = ''
  invalidLogin = false
  response!: JwtResponse

  isCustomer: boolean = false;
  isAdmin: boolean = false;

  public constructor(
    private router: Router,
    public loginservice: AuthenticationService,

    // logout
    // private authentocationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.loginservice.logOut();
    this.router.navigate(['home']);
  }


  checkLogin() {
    (this.loginservice.authenticate(this.userName, this.password).subscribe(
      data => {
        console.log(data)
        /* this.response=data.jwtToken;
        console.log("Rseponse" ,this.response,"response ") */
        //this.setValues(data);
        if (this.isAdmin) {
          this.loginservice.getUser(this.userName).subscribe(
            data => {
              if (data.roles[0].id == 2) {
                this.router.navigate(['home/adminhome'])
                this.invalidLogin = false
              }
              else {
                alert("Please choose correct role!")
              }
            }
          )


        }
        else if (this.isCustomer) {
          this.loginservice.getUser(this.userName).subscribe(
            data => {
              console.log(data)
              if (data.roles[0].id == 1) {
                this.router.navigate(['home/customerhome'])
                this.invalidLogin = false
              }
              else {
                alert("Please choose correct role!")
              }
            }
          )
        }
        else {
          alert("Please choose correct role")
        }
      },
      error => {
        this.invalidLogin = true

      }
    )
    );

  }

  setValues(data: any) {
    console.log("in set values", data)
    sessionStorage.setItem('userName', this.userName);
    sessionStorage.setItem('token', data.token)

    console.log('data set')
  }

  adminChange(): void {
    this.isAdmin = true;
    this.isCustomer = false;
  }

  customerChange(): void {
    this.isAdmin = false;
    this.isCustomer = true;
  }


}
