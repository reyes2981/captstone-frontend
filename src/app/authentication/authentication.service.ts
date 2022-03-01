import { Injectable } from '@angular/core';
import { signInData } from '../model/signinData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser = new signInData("john123@yahoo.com", "123");
  isAuthenticated = false;

  constructor() { }

  authenticate(signInData: signInData): boolean {
    if(this.checkCredentials(signInData)) {
      this.isAuthenticated = true;
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: signInData): boolean {
    return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword());
  }

  private checkEmail(email: string): boolean {
      return email === this.mockedUser.getEmail();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockedUser.getPassword();
  }
}
