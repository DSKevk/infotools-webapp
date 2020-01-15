import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommandeService } from '../commande.service';
import { RendezVousService } from '../../rendez-vous/rendez-vous.service';

@Component({
  selector: 'app-commande-list',
  template: `
    <mat-form-field class="margin" >
      <input  matInput type="number" placeholder="Prix/kg" [(ngModel)]='pricePerKg' (input)="setNewPrice($event)">
    </mat-form-field>

    <mat-form-field class="margin">
      <mat-select placeholder="Client" (selectionChange)="loadCommandes()" [(ngModel)]="selectedClientID">
        <mat-option *ngFor="let client of clients$ | async" [value]="client.id">
          {{ client.prenom }} {{ client.nom }}
        </mat-option>
      </mat-select>
    </mat-form-field>

    <app-commande-summary class="space-under" *ngFor="let commande of commandes$ | async"
    [commande]="commande" [pricePerKg]="pricePerKg"></app-commande-summary>
    <p *ngIf="(commandes$ | async)?.length === 0" class="center">Aucune commande pour ce client...</p>
  `,
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent {

  commandes$: Observable<any>;
  clients$: Observable<any>;

  selectedClientID = 1;

  pricePerKg: number;

  constructor(private commandeService: CommandeService, private rdvService: RendezVousService) {
    this.pricePerKg = JSON.parse(localStorage.getItem('pricePerKg'));

    this.commandes$ = this.commandeService.getAllCommandes(this.selectedClientID);
    this.clients$ = this.rdvService.getAllClients();
  }

  loadCommandes() {
    console.log(this.selectedClientID);

    this.commandes$ = this.commandeService.getAllCommandes(this.selectedClientID);
  }

  setNewPrice() {
    console.log(this.pricePerKg);
    if (this.pricePerKg) {
      localStorage.setItem('pricePerKg', JSON.stringify(this.pricePerKg));
      location.reload();
    }
  }
}
