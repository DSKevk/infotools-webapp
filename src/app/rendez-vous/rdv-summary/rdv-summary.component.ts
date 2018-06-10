import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { RendezVous, Client, Commercial } from '../../models';

@Component({
  selector: 'app-rdv-summary',
  templateUrl: './rdv-summary.component.html',
  styleUrls: ['./rdv-summary.component.css']
})
export class RdvSummaryComponent {

  @Input() rendezVous: RendezVous;

  constructor() { }
}
