import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-amplifiers',
  templateUrl: './amplifiers.component.html',
  styleUrls: ['./amplifiers.component.css']
})
export class AmplifiersComponent {
  constructor(public authService: AuthService) {}
}
