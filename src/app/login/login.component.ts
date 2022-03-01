import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication/authentication.service';
import { signInData } from '../model/signinData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(authenticationService: AuthenticationService) { }


  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm) {
    console.log(signInForm.value)
    const signInData = new signInData(signInForm.value.email, signInForm.value.password);
    this.authenticationService.authenticate(signInData);
  }

}
