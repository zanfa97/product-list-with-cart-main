import { Injectable, signal } from '@angular/core';
import { Product } from '../product/product.model';
import { CartItem } from './cart-item/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = signal<CartItem[]>([]);

  addToCart(product: Product) {
    const newItem: CartItem = {
      productId: product.id,
      name: product.name,
      individualPrice: product.price,
      quantity: 1,
      totalPrice: product.price,
    };

    this.items.update((items) => {
      const existing = items.find((item) => item.productId === product.id);

      if (!existing) {
        return [...items, newItem];
      }

      return items.map((item) =>
        item.productId === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.individualPrice,
            }
          : item,
      );
    });
  }

  removeItem(productId: number) {
    this.items.update((items) => items.filter((item) => item.productId !== productId));
  }

  incrementQuantity(productId: number) {
    const existing = this.items().find((item) => item.productId === productId);
    if (existing) {
      this.updateQuantity(productId, existing.quantity + 1);
    }
  }

  decrementQuantity(productId: number) {
    const existing = this.items().find((item) => item.productId === productId);

    if (existing && existing.quantity > 1) {
      this.updateQuantity(productId, existing.quantity - 1);
    }
  }

  private updateQuantity(productId: number, newQuantity: number) {
    this.items.update((items) =>
      items.map((item) =>
        item.productId === productId
          ? {
              ...item,
              quantity: newQuantity,
              totalPrice: newQuantity * item.individualPrice,
            }
          : item,
      ),
    );
  }
}
