import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models';
import { Observable } from 'rxjs/Observable';
import { ProduitService } from '../../produit.service';

@Component({
  selector: 'app-list-produit',
  template: `
    <app-produit-summary *ngFor="let product of products$ | async" [product]="product"></app-produit-summary>
  `,
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent {

  products$: Observable<any>;

  constructor(private produitService: ProduitService) {
    this.products$ = this.produitService.getAllProduit();
  }
}
