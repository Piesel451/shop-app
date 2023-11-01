import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../sign-up/userInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';

enum Tab {
  UserProfile = 'userProfile',
  Orders = 'orders',
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'] 
})
export class UserProfileComponent {

  currentUser!: any;
  ID!: any;
  selectedTab: Tab = Tab.UserProfile;


  constructor(public cartService: CartService, public authService: AuthService, private router: Router, private route: ActivatedRoute){}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(
      (response: any) => {
        this.currentUser = response
        this.ID = response._id
        // this.cartService.insertCartToDB(this.ID);
      }
    );
    
    this.route.queryParams.subscribe(params => {
      if (params['tab']) {
        this.selectedTab = params['tab'];
      }
    });

    
  }

  showUserProfile() {
    this.selectedTab = Tab.UserProfile;
  }

  showOrders() {
    this.selectedTab = Tab.Orders;
  }

  logout(){
    this.authService.logoutUser(this.currentUser).subscribe(
      (response) => {
        this.router.navigate(['/home']);
      },
      (error) => {
        alert("Wystąpił błąd podczas wylogowywania!")
      }
    );
  }

}
