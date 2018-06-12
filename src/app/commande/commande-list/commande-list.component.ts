import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommandeService } from '../commande.service';
import { RendezVousService } from '../../rendez-vous/rendez-vous.service';

@Component({
  selector: 'app-commande-list',
  template: `
    <mat-form-field class="margin">
      <mat-select placeholder="Client" (selectionChange)="loadCommandes()" [(ngModel)]="selectedClientID">
        <mat-option *ngFor="let client of clients$ | async" [value]="client.id">
          {{ client.prenom }} {{ client.nom }}
        </mat-option>
      </mat-select>
    </mat-form-field>

    <app-commande-summary class="space-under" *ngFor="let commande of commandes$ | async" [commande]="commande"></app-commande-summary>
    <p *ngIf="(commandes$ | async)?.length === 0" class="center">Aucune commande pour ce client...</p>
  `,
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent {

  commandes$: Observable<any>;
  clients$: Observable<any>;

  selectedClientID = 1;

  constructor(private commandeService: CommandeService, private rdvService: RendezVousService) {
    this.commandes$ = this.commandeService.getAllCommandes(this.selectedClientID);
    this.clients$ = this.rdvService.getAllClients();
  }

  loadCommandes() {
    console.log(this.selectedClientID);

    this.commandes$ = this.commandeService.getAllCommandes(this.selectedClientID);
  }
}
