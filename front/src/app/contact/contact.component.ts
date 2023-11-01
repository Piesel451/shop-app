import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(public authService: AuthService) {}
}
