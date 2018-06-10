import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/';

@Component({
  selector: 'app-produit-summary',
  template: `
    <mat-card>
      <mat-card-header>
        <div mat-card-avatar><mat-icon>devices</mat-icon></div>
          <h4 class="title">
            <span id="product">{{ product.name }}</span>
            <span id="price">{{ product.price }}€</span>
          </h4>
      </mat-card-header>
    </mat-card>
  `,
  styleUrls: ['./produit-summary.component.css']
})
export class ProduitSummaryComponent {

  @Input() product: Product;

  constructor() {
    // this.product.type = 'material';
    /* this.initializeIcon(); */
  }

  /* private initializeIcon() {
    switch (this.product.type) {
      case 'software':
        this.icon = 'code';
        break;
      case 'material':
        this.icon = 'devices';
        break;
    }
  } */

}
