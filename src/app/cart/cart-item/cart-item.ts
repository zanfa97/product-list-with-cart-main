import { Component, input } from '@angular/core';
import { type CartItem as Item } from './cart-item.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
  readonly item = input.required<Item>();
}
