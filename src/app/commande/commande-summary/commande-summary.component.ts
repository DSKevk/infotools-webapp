import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commande-summary',
  templateUrl: './commande-summary.component.html',
  styleUrls: ['./commande-summary.component.css']
})
export class CommandeSummaryComponent {

  @Input() commande: any;

  constructor() { }

  getTotalCommande(): number {
    let total = 0;

    this.commande.produits.forEach(produit => {
      total += produit.quantite * produit.prix;
    });

    return total;
  }
}
