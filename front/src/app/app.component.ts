import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-app';

  users: any[] = [];

  constructor(private ApiService: ApiService) {}

  ngOnInit() {
    this.ApiService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }
}