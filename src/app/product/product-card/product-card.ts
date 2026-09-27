import { CurrencyPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Product } from '../product.model';
import { AddToCartButton } from '../add-to-cart-button/add-to-cart-button';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, AddToCartButton],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
  add = output<Product>();

  addToCart() {
    this.add.emit(this.product());
  }
}
