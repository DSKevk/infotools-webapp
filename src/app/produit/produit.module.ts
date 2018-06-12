import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitSummaryComponent } from './produit-summary/produit-summary.component';
import { ListProduitComponent } from './list-produit/list-produit/list-produit.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { ProduitService } from './produit.service';
import { HttpClientModule } from '@angular/common/http';

const matModules = [
  MatCardModule,
  MatIconModule,
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    ...matModules,
  ],
  declarations: [
    ProduitSummaryComponent,
    ListProduitComponent,
  ],
  exports: [
    ProduitSummaryComponent,
    ListProduitComponent
  ],
  providers: [
    ProduitService,
  ]
})
export class ProduitModule { }
