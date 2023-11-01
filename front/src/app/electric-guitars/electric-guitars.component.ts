import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-electric-guitars',
  templateUrl: './electric-guitars.component.html',
  styleUrls: ['./electric-guitars.component.css']
})
export class ElectricGuitarsComponent {
  constructor(public authService: AuthService) {}
}
