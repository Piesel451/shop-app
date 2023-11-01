import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-keyboards',
  templateUrl: './keyboards.component.html',
  styleUrls: ['./keyboards.component.css']
})
export class KeyboardsComponent {
  constructor(public authService: AuthService) {}
}
