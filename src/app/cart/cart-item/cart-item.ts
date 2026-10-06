import { Component, input, output } from '@angular/core';
import { type CartItem as Item } from './cart-item.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe],
  templateUrl: './cart-item.html',
  styleUrls: ['./cart-item.css', './remove-item-btn.css']
})
export class CartItem {
  readonly item = input.required<Item>();
  readonly removed = output<number>();

  removeItem() {
    this.removed.emit(this.item().productId);
  }
}
