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

  products: Product[] = [];

  constructor(private apiService: ApiService) {}

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
