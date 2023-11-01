import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from './userInterface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  email: string = '';
  username: string = '';
  psw: string = '';
  psw_repeat: string = '';


  constructor(private apiService: ApiService, public authService: AuthService) {}

  
  addUser(){ // haslo: 123 + User + numer usera + 123*

    if(this.email === ""){
      alert("Podaj email");
      return;
    } else {
      if (!this.isValidEmail(this.email)) {
        alert("Niepoprawny email");
        return;
      }
    }

    if(this.username === ""){
      alert("Podaj nazwę użytkownika");
      return;
    }

    if(this.psw === "" && this.psw_repeat === ""){
      alert("Podaj hasło")
      return;
    } else{
      if (this.psw !== this.psw_repeat) {
        alert("Hasła nie są takie same");
        return;
      }
      if (!this.isStrongPassword(this.psw)) {
        alert("Zbyt słabe hasło.");
        return;
      }
    }
    
    const user: User = {
      email: this.email,
      username: this.username,
      psw: this.psw,
    };

    this.apiService.addUser(user).subscribe(
      (response) => {
        alert("Pomyślnie dodano użytkownika !")
      },
      (error) => {
        alert("Wystąpił błąd. Spróbuj ponownie!")
      }
    )

    this.email = '';
    this.username = '';
    this.psw = '';
    this.psw_repeat = '';
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  isStrongPassword(password: string): boolean {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

}
