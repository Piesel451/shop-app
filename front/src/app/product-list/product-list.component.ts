import { Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
  
  products: Product[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(){
    this.apiService.getProducts('electric').subscribe((data: any) => {
      this.products = data;
    });
  }

}

//przerzucić potem do osobnego pliku
interface Product {
  id: number;
  category: string,
  name: string;
}
