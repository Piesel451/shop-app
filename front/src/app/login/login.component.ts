import { Component } from '@angular/core';
import { User } from '../sign-up/userInterface';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  psw: string = '';
  username: string = ''
  constructor(private apiService: ApiService, private router: Router) {}

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

    this.apiService.logUser(user).subscribe(
      (response) => {
        alert("Pomyślnie zalogowano !")
        console.log(response)
        this.router.navigate(['/user_profile']);
      },
      (error) => {
        if(error.status === 401){
          alert("Użytkownik nie istnieje!")
          return;
        }
        if(error.status === 401){
          alert("Niepoprawne hasło!")
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
