import { Component, Input, OnInit} from '@angular/core';
import { ApiService } from '../api.service';

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
    if(typeof valueEmitted === "number")
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


  ngOnInit(){
    this.apiService.getProducts(this.category, this.type).subscribe((data: any) => {
      this.products = data;
    });
  }

}

//przerzucić potem do osobnego pliku
interface Product {
  id: number;
  type: string;
  category: string,
  name: string;
  price: number;
}
