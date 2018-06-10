import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models';

@Component({
  selector: 'app-list-produit',
  template: `
    <app-produit-summary *ngFor="let product of products" [product]="product"></app-produit-summary>
  `,
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent {

  products: Product[];

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Test',
        price: 50,
      },
      {
        id: 1,
        name: 'Test',
        price: 50,
      },
      {
        id: 1,
        name: 'Test',
        price: 50,
      },
    ];
  }

}
