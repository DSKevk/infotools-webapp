import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandeSummaryComponent } from './commande-summary/commande-summary.component';
import { MatExpansionModule, MatIconModule, MatSelectModule, MatDividerModule } from '@angular/material';
import { CommandeListComponent } from './commande-list/commande-list.component';
import { CommandeService } from './commande.service';
import { FormsModule } from '@angular/forms';

const matModules = [
  MatExpansionModule,
  MatIconModule,
  MatSelectModule,
  MatDividerModule,
];

@NgModule({
  imports: [
    CommonModule,

    FormsModule,

    ...matModules
  ],
  declarations: [CommandeSummaryComponent, CommandeListComponent],
  exports: [
    CommandeSummaryComponent,
    CommandeListComponent,
  ],
  providers: [
    CommandeService,
  ]
})
export class CommandeModule { }
