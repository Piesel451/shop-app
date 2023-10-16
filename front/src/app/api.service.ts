import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getProducts(category: string) {
    const params = new HttpParams().set('category', category);
    return this.http.get(`${this.apiUrl}/products`, { params });
  }
  
}