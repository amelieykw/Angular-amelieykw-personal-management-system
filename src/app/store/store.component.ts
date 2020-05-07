import { Product } from '../model/product.model';
import { Component, OnInit } from '@angular/core';
import {ProductRepository } from '../model/product.repository';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private repository: ProductRepository) { }

  ngOnInit() {
  }

  get products(): Product[] {
    return this.repository.getProducts();
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

}
