import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-electric-pianos',
  templateUrl: './electric-pianos.component.html',
  styleUrls: ['./electric-pianos.component.css']
})
export class ElectricPianosComponent {
  constructor(public authService: AuthService) {}
}
