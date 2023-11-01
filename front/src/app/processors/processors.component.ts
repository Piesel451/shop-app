import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-processors',
  templateUrl: './processors.component.html',
  styleUrls: ['./processors.component.css']
})
export class ProcessorsComponent {
  constructor(public authService: AuthService) {}
}
