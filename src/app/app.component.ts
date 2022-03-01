import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  display = false;

  constructor(public authenticationService: AuthenticationService) {
    
  }
  
  public onClick() {
    console.log("clicked");
    this.display = true;
  }
  

}

