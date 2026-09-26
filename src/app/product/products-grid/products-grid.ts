import { Component, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductService } from '../product.service';
import { ProductCard } from '../product-card/product-card';

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
}
