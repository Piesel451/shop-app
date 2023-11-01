import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authenticated-cart',
  templateUrl: './authenticated-cart.component.html',
  styleUrls: ['./authenticated-cart.component.css']
})
export class AuthenticatedCartComponent {
  constructor(public authService: AuthService) {}
}
