import { Component, OnInit } from '@angular/core';
import { RendezVous } from '../../../models';
import { DateAdapter } from '@angular/material';

@Component({
  selector: 'app-list-rdv',
  template: `
    <app-rdv-summary *ngFor="let rdv of rendezVous" [rendezVous]="rdv"></app-rdv-summary>
  `,
  styleUrls: ['./list-rdv.component.css']
})
export class ListRdvComponent {

  rendezVous: RendezVous[];

  constructor() {
    this.rendezVous = [
      {
        date: new Date(),
        client: {
          address: 'test',
          firstname: 'Jean',
          lastname: 'Michel',
          phoneNumber: 'dàé&à"é&"'
        },
        commercial: {
          commercialNumber: '&é&&',
          firstname: 'Michel',
          lastname: 'Jean',
          phoneNumber: '2003éZ312'
        },
        status: 'waiting',
      },
      {
        date: new Date(),
        client: {
          address: 'test',
          firstname: 'Jean',
          lastname: 'Michel',
          phoneNumber: 'dàé&à"é&"'
        },
        commercial: {
          commercialNumber: '&é&&',
          firstname: 'Michel',
          lastname: 'Jean',
          phoneNumber: '2003éZ312'
        },
        status: 'waiting',
      }
    ];
   }
}
