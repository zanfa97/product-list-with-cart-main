import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item/cart-item';

@Component({
  selector: 'app-cart-summary',
  imports: [CartItem],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class CartSummary {
  protected readonly cartService = inject(CartService);
  protected readonly allItems = this.cartService.items.asReadonly();
}
