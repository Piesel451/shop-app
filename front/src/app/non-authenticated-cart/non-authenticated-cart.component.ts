import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Product } from '../product-list/product.interface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-non-authenticated-cart',
  templateUrl: './non-authenticated-cart.component.html',
  styleUrls: ['./non-authenticated-cart.component.css']
})
export class NonAuthenticatedCartComponent {
  products: Product[] = [];
  cartCost = 0;

  constructor(public authService: AuthService, private cartService: CartService) {}

  ngOnInit() {
    this.loadProductsFromLocalStorage();
  }

  loadProductsFromLocalStorage() {
    const cartItemsJSON = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.products = cartItemsJSON;

    this.calculateCartCost();
  }

  calculateCartCost(){
    this.cartCost = 0;
    for (let i = 0; i < this.products.length; i++) {
      this.cartCost += this.products[i].price
    }
  }

  removeFromCart(product: Product){
    let cartItems = []
    const existingCart = JSON.parse(localStorage.getItem('cartItems')!);

    const updatedCart = existingCart.filter((item: { _id: number; }) => item._id !== product._id);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));

    this.cartService.updateCartItemsAmount();
    this.calculateCartCost();
    this.loadProductsFromLocalStorage();
  }
}
