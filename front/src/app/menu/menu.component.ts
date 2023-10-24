import { ChangeDetectorRef, Component, HostListener} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  items_ammount = 0;

  // constructor(private changeDetectorRef: ChangeDetectorRef) {}
  
  // ngOnInit() {
  //   this.updateCartItemsAmount();
  // }

  // updateCartItemsAmount() {
  //   const cartItemsJSON = JSON.parse(localStorage.getItem('cartItems')!);
  //   if (cartItemsJSON !== null) {
  //     this.items_ammount = Object.keys(cartItemsJSON).length;
  //   } else {
  //     this.items_ammount = 0;
  //   }
  //   this.changeDetectorRef.detectChanges();
  // }

  
}
