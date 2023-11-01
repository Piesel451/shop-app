import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  constructor(public authService: AuthService) {}
}
