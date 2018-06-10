import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitSummaryComponent } from './produit-summary/produit-summary.component';
import { ListProduitComponent } from './list-produit/list-produit/list-produit.component';
import { MatCardModule, MatIconModule } from '@angular/material';

const matModules = [
  MatCardModule,
  MatIconModule,
];

@NgModule({
  imports: [
    CommonModule,

    ...matModules,
  ],
  declarations: [
    ProduitSummaryComponent,
    ListProduitComponent,
  ],
  exports: [
    ProduitSummaryComponent,
    ListProduitComponent
  ]
})
export class ProduitModule { }
