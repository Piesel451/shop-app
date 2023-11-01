import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-logged',
  templateUrl: './menu-logged.component.html',
  styleUrls: ['./menu-logged.component.css']
})
export class MenuLoggedComponent {
  
  currentUser: any;

  constructor(public authService: AuthService, private router: Router){}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(
      (response) => {
        this.currentUser = response
      }
    );
  }

  redirectToCart(){
    this.router.navigate(['/cart']);
  }

  logout(){
    this.authService.logoutUser(this.currentUser).subscribe(
      (response) => {
        alert("Pomyślnie wylogowano !")
        this.router.navigate(['/home']);
      },
      (error) => {
        alert("Wystąpił błąd podczas wylogowywania!")
      }
    );
  }

  items_ammount = 0
}
