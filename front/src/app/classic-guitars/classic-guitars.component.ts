import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-classic-guitars',
  templateUrl: './classic-guitars.component.html',
  styleUrls: ['./classic-guitars.component.css']
})
export class ClassicGuitarsComponent {
  constructor(public authService: AuthService) {}
}
