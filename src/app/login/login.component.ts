import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private loginService: LoginService) { }

  userLogin() {
    console.log(this.user);
    this.loginService.loginUser(this.user).subscribe(data => {
      alert(`${this.user.username} has been logged in!`);
    }, error => alert("Login was Unsuccesful"));
  }

  ngOnInit(): void {
  }

}
