import { Component } from '@angular/core';
import { ProductsGrid } from './product/products-grid/products-grid';

@Component({
  selector: 'app-root',
  imports: [ProductsGrid],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
