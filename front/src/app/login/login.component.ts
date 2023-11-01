import { Component } from '@angular/core';
import { User } from '../sign-up/userInterface';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  psw: string = '';
  username: string = ''
  constructor(public authService: AuthService, public cartService: CartService,private router: Router, private cookieService: CookieService) {}

  logUser(){
    if(this.email === ""){
      alert("Podaj email");
      return;
    } else {
      if (!this.isValidEmail(this.email)) {
        alert("Niepoprawny email");
        return;
      }
    }

    if(this.psw === ""){
      alert("Podaj hasło")
      return;
    }


    const user: User = {
      email: this.email,
      username: this.username,
      psw: this.psw,
    };


    this.authService.logUser(user).subscribe(
      (response: any) => {
        const token = 'token' in response ? response['token'].toString() : ''  
        this.cookieService.set('access_token', token);

        this.router.navigate(['/user_profile']);
      },
      (error) => {
        if(error.status === 401){
          alert("Niepoprawne hasło!")
          return;
        }
        if(error.status === 400){
          alert("Nie ma takiego użytkownika!")
          return;
        } else {
          alert("Wystąpił błąd logowania. Spróbuj ponownie!")
        }
        
      }
    )

  }


  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
}
