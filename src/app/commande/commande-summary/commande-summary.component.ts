import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commande-summary',
  templateUrl: './commande-summary.component.html',
  styleUrls: ['./commande-summary.component.css']
})
export class CommandeSummaryComponent {

  @Input() commande: any;
  @Input() pricePerKg: number;

  constructor() { }

  getTotalLigne(produit): number {
    return produit.quantite * produit.prix;
  }

  getTotalPoidsLigne(produit): number {
    console.log(produit.poids);
    return produit.quantite * produit.poids;
  }

  getTotalCommande(): number {
    let total = 0;

    this.commande.produits.forEach(produit => {
      total += produit.quantite * produit.prix;
    });

    return total;
  }

  // #region
  /* getTotalQuantityCommande(): number {
    let total = 0;

    this.commande.produits.forEach(produit => {
      total += produit.quantite;
    });

    return total;
  } */
  // #endregion

  getTotalPoidsCommande(): number {
    let totalPoids = 0;

    this.commande.produits.forEach(produit => {
      totalPoids += produit.quantite * produit.poids;
    });

    return totalPoids;
  }

  getTotalDelivery(): number {
    const totalPoidsCmd = this.getTotalPoidsCommande();

    if (totalPoidsCmd <= 1) {
      return 4;
    } else if (totalPoidsCmd > 1 && totalPoidsCmd <= 2) {
      return 6;
    } else if (totalPoidsCmd > 2 && totalPoidsCmd <= 5) {
      return 8;
    } else if (totalPoidsCmd > 5) {
      return 13;
    }
  }

  getTotalAndDelivery() {
    /* return this.getTotalCommande() + this.getTotalPoidsCommande() * this.pricePerKg; */
    return this.getTotalCommande() + this.getTotalDelivery();
  }
}
