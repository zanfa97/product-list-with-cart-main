import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input, output } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { AddToCartButton } from '../add-to-cart-button/add-to-cart-button';
import { Product } from '../product.model';
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

  isInCart = computed(() =>
    this.cartService.items().some((item) => item.productId === this.product().id),
  );

  addToCart() {
    this.productAdded.emit(this.product());
  }

  updateQuantity(newQuantity: number) {
    this.cartService.updateQuantity(this.product().id, newQuantity);
  }
}
