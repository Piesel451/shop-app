import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-acoustic-guitars',
  templateUrl: './acoustic-guitars.component.html',
  styleUrls: ['./acoustic-guitars.component.css']
})
export class AcousticGuitarsComponent {
  constructor(public authService: AuthService) {}
}
