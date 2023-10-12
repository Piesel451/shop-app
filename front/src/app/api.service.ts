import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }

  addUser(user: any) {
    return this.http.post(`${this.apiUrl}/users`, user);
  }
}