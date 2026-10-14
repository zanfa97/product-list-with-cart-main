import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { Product } from '../product.model';
import { AddToCartButton } from '../add-to-cart-button/add-to-cart-button';
import { CartService } from '../../cart/cart.service';
import { QuantityStepper } from '../quantity-stepper/quantity-stepper';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, AddToCartButton, QuantityStepper],
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

  updateQuantity(newQuantity: number) {
    this.cartService.updateQuantity(this.product().id, newQuantity);
  }
}
