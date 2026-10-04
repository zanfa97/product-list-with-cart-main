import { Component } from '@angular/core';
import { ProductsGrid } from './product/products-grid/products-grid';
import { CartSummary } from './cart/cart-summary/cart-summary';

@Component({
  selector: 'app-root',
  imports: [ProductsGrid, CartSummary],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
