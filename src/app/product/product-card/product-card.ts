import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
}
