import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
    private readonly productService = inject (ProductService); //1
    products :Signal<Product[]>=this.productService.products;  //2
}
