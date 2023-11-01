import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-synthesizers',
  templateUrl: './synthesizers.component.html',
  styleUrls: ['./synthesizers.component.css']
})
export class SynthesizersComponent {
  constructor(public authService: AuthService) {}
}
