import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  priceRange!: number;

  applyFilter() {
    const selectedPrice = this.priceRange;
    console.log(selectedPrice)
  }
}
