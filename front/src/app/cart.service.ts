import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Product } from './product-list/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  private cartItemsSubject = new BehaviorSubject<number>(0);
  private apiUrl = 'http://localhost:8080';

  get cartItemsAmount$(): Observable<number> {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(product: Product){
    let cartItems = []

    if(this.authService.isLogged()){
      //dla zalogowanego usera
    } else {
      const existingCart = JSON.parse(localStorage.getItem('cartItems')!);
      if(existingCart != null){
        cartItems = existingCart
        cartItems.push(product)
        
      } else {
        cartItems.push(product)
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      this.updateCartItemsAmount();
    }
  }

  // insertCartToDB(user_id: any) {
  //   console.log('Inserting cart to DB for user ID: ', user_id);
  //   const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
  //   const products_id = existingCart.map((item: { _id: number; }) => item._id);

  //   const insertCartToDB = `${this.apiUrl}/insertCartToDB`;
  //   return this.http.post(insertCartToDB, { products_id, user_id}).subscribe(
  //     (response) => {
  //       console.log('Cart inserted successfully:', response);
  //     },
  //     (error) => {
  //       console.error('Error inserting cart:', error);
  //     }
  //   );
  // }

  updateCartItemsAmount() {
    const cartItemsJSON = JSON.parse(localStorage.getItem('cartItems')!);
    const itemsAmount = cartItemsJSON ? Object.keys(cartItemsJSON).length : 0;
    this.cartItemsSubject.next(itemsAmount);
  }
}
