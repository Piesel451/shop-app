import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../sign-up/userInterface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'] 
})
export class UserProfileComponent {

  currentUser!: User;
  placeholder!: any;

  constructor(private authService: AuthService){}

  ngOnInit() {
    this.placeholder =  this.authService.getCurrentUser().subscribe(
      (response: any) => {
        console.log(response)
      }
    );

  }

  // this.authService.logoutUser(){
  //   return 
  // }
}
