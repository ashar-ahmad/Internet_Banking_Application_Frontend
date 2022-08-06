import { Component } from '@angular/core';
import { AuthenticationService } from './users/user-services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IBAUI';


  public constructor(
    public loginservice: AuthenticationService,

    // logout
    // private authentocationService: AuthenticationService,
  ) { }
  public toLogin()
  {
    document.getElementById('login-block')?.scrollIntoView();
  }
  public toAbout()
  {
    document.getElementById("about-us")?.scrollIntoView();
  }
}
