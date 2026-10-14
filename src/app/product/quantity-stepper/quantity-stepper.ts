import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-quantity-stepper',
  imports: [],
  templateUrl: './quantity-stepper.html',
  styleUrl: './quantity-stepper.css',
})
export class QuantityStepper {
  readonly quantity = input.required<number>();
  readonly increment = output<number>();
  readonly decrement = output<number>();

  incrementQuantity() {
    this.increment.emit(this.quantity() + 1);
  }

  decrementQuantity() {
    if (this.quantity() > 1) {
      this.increment.emit(this.quantity() - 1);
    }
  }
}
