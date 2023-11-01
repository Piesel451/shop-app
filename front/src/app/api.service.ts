import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from './product-list/product.interface';
import { User } from './sign-up/userInterface';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getProducts(category: string, type:string) {
    const params = new HttpParams()
    .set('category', category) 
    .set('type', type);

    return this.http.get(`${this.apiUrl}/products`, { params });
  }


  addUser(user: User){
    const addUserUrl = `${this.apiUrl}/addUser`;
    return this.http.post(addUserUrl, user);
  }



  // filterProducts(price: number){
  //   const params = new HttpParams()
  // }
  
}