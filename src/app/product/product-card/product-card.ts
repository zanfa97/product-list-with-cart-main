import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { Product } from '../product.model';
import { AddToCartButton } from '../add-to-cart-button/add-to-cart-button';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, AddToCartButton],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
  productAdded = output<Product>();
  private readonly cartService = inject(CartService);
  quantity = computed(
    () =>
      this.cartService.items().find((item) => item.productId === this.product().id)?.quantity ?? 0,
  );

  addToCart() {
    this.productAdded.emit(this.product());
  }

  incrementQuantity(productId: number) {
    this.cartService.incrementQuantity(productId);
  }

  decrementQuantity(productId: number) {
    this.cartService.decrementQuantity(productId);
  }
}
