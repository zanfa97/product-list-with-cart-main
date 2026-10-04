import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductService } from '../product.service';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product.model';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.css',
})
export class ProductsGrid {
  heading = input.required<string>();
  private readonly productService = inject(ProductService);
  products = toSignal(this.productService.getProducts());
  private readonly cartService = inject(CartService);

  addProductToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
