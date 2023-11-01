import { Component, Input, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from './product.interface';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';

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

  constructor(private cartService: CartService,private apiService: ApiService, private authService: AuthService) {}

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

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }


  ngOnInit(){

    this.apiService.getProducts(this.category, this.type).subscribe((data: any) => {
      this.products = data;
    });
  }

}



