import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item/cart-item';
import { EmptyCart } from '../empty-cart/empty-cart';

@Component({
  selector: 'app-cart-summary',
  imports: [CartItem, EmptyCart],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class CartSummary {
  private readonly cartService = inject(CartService);
  protected readonly allItems = this.cartService.items.asReadonly();
  protected itemsQuantity = computed(() =>
    this.allItems().reduce((quantity, item) => quantity + item.quantity, 0),
  );
}
