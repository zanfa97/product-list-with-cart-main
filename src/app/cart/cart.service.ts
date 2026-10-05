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
}
