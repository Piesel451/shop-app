import { ChangeDetectorRef, Component, HostListener} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  items_ammount = 0;
  constructor(private router: Router,private changeDetectorRef: ChangeDetectorRef, private cartService: CartService) {}

  ngOnInit() {
    this.cartService.updateCartItemsAmount();

    this.cartService.cartItemsAmount$.subscribe((itemsAmount) => {
      this.items_ammount = itemsAmount;
      this.changeDetectorRef.detectChanges();
    });
  }

  redirectToCart(){
    this.router.navigate(['/cart']);
  }
  
}
