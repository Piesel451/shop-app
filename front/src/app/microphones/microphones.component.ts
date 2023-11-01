import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-microphones',
  templateUrl: './microphones.component.html',
  styleUrls: ['./microphones.component.css']
})
export class MicrophonesComponent {
  constructor(public authService: AuthService) {}
}
