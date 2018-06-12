import { Component, OnInit } from '@angular/core';
import { RendezVous } from '../../../models';
import { DateAdapter } from '@angular/material';
import { RendezVousService } from '../../rendez-vous.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-rdv',
  template: `
    <app-rdv-summary *ngFor="let rdv of rendezVous$ | async" [rendezVous]="rdv"></app-rdv-summary>
  `,
  styleUrls: ['./list-rdv.component.css']
})
export class ListRdvComponent {

  rendezVous$: Observable<any>;

  constructor(private rdvService: RendezVousService) {
    this.rendezVous$ = this.rdvService.getAllRendezVous();
  }
}
