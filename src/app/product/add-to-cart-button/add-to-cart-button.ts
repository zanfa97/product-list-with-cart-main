import { Component, input } from '@angular/core';

@Component({
  selector: 'button[add-to-cart-btn]',
  imports: [],
  template: '{{ label() }}',
  styleUrl: './add-to-cart-button.css',
})
export class AddToCartButton {
  readonly label = input.required<string>();
}
