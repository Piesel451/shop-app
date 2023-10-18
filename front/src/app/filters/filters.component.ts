import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  

  priceRange = 0;

  RangeChange(){
    let demo = document.getElementById('demo') as HTMLElement;
    demo.innerHTML = `${this.priceRange} PLN`;
  }

  applyFilter() {
    
  }
}
