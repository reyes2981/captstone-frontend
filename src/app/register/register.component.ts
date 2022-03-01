import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private registerService: RegisterService) {

  }

  userRegister() {
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(data => {
      alert("User is registered!")
    },
    error => alert("User was not registered.")); 
  }

  ngOnInit(): void {
  }

}
