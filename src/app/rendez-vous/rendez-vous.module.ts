import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdvSummaryComponent } from './rdv-summary/rdv-summary.component';
import {
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule,
  MatInputModule
} from '@angular/material';
import { ListRdvComponent } from './list-rdv/list-rdv/list-rdv.component';
import { RendezVousService } from './rendez-vous.service';
import { HttpClientModule } from '@angular/common/http';
import { AddRdvDialogComponent } from './add-rdv-dialog/add-rdv-dialog.component';
import { FormsModule } from '@angular/forms';
import { UpdateRdvDialogComponent } from './update-rdv-dialog/update-rdv-dialog.component';

const matModules = [
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatDialogModule,
  MatButtonModule,
  MatSelectModule,
  MatInputModule,
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    FormsModule,

    ...matModules,
  ],
  declarations: [
    RdvSummaryComponent,
    ListRdvComponent,
    AddRdvDialogComponent,
    UpdateRdvDialogComponent,
  ],
  exports: [
    RdvSummaryComponent,
    ListRdvComponent
  ],
  providers: [
    RendezVousService,
  ],
  entryComponents: [
    AddRdvDialogComponent,
    UpdateRdvDialogComponent,
  ]
})
export class RendezVousModule { }
