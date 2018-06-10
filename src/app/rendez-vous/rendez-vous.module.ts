import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdvSummaryComponent } from './rdv-summary/rdv-summary.component';
import { MatIconModule, MatCardModule, MatMenuModule } from '@angular/material';
import { ListRdvComponent } from './list-rdv/list-rdv/list-rdv.component';

const matModules = [
  MatIconModule,
  MatCardModule,
  MatMenuModule,
];

@NgModule({
  imports: [
    CommonModule,

    ...matModules,
  ],
  declarations: [
    RdvSummaryComponent,
    ListRdvComponent,
  ],
  exports: [
    RdvSummaryComponent,
    ListRdvComponent
  ]
})
export class RendezVousModule { }
