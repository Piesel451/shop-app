import { Component, Input, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from './product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{

  @Input() category!: string;
  @Input() type!: string;

  PriceRangeEmmitedFromFilter: number = 0;

  products: Product[] = [];
  filteredProducts: Product[] = [];

  filterClickedFlag: boolean = false;

  constructor(private apiService: ApiService) {}

  FilterApplyHandler(valueEmitted: number) {
    if(typeof valueEmitted === "number") //jak będzie wiecej wartości emited to splitowac i zrobic case
    {
      this.filterClickedFlag = true;
      this.PriceRangeEmmitedFromFilter = valueEmitted;
      this.filteredProducts = this.products.filter((product) => {
        console.log(product.price + " <= " + this.PriceRangeEmmitedFromFilter)
        return product.price <= this.PriceRangeEmmitedFromFilter;
      });
      console.log(this.filteredProducts)
    }
    else{

    }

  }

  // addToCart(product: any){
  //   let cartItems: any[] = [];
    
  //   const existingCart = JSON.parse(localStorage.getItem('cartItems')!);
  //   if(existingCart != null){
  //     console.log("jest")
  //     cartItems = existingCart;
  //   }else{
  //     console.log("nie ma")
  //   }
  //   cartItems.push(product);
  //   console.log(cartItems)
    
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // }

  addToCart(product: Product){
    this.apiService.instertToCart(product).subscribe(
      (response) => {
        console.log('Product added to cart:', response);
      },
      (error) => {
        console.error('Error adding product to cart:', error);
      }
    )
  }


  ngOnInit(){

    this.apiService.getProducts(this.category, this.type).subscribe((data: any) => {
      this.products = data;
    });
  }

}



