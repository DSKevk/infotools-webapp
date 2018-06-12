import { Component, Input } from '@angular/core';
import { RendezVousService } from '../rendez-vous.service';
import { MatDialog } from '@angular/material';
import { UpdateRdvDialogComponent } from '../update-rdv-dialog/update-rdv-dialog.component';
import { format } from 'date-fns';

@Component({
  selector: 'app-rdv-summary',
  templateUrl: './rdv-summary.component.html',
  styleUrls: ['./rdv-summary.component.css']
})
export class RdvSummaryComponent {

  @Input() rendezVous: any;

  constructor(private rdvService: RendezVousService, private dialog: MatDialog) {}

  update() {
    console.log('update');
    const formatedDate = format(new Date(this.rendezVous.date), 'YYYY-MM-DD HH:mm');
    const dialogRef = this.dialog.open(UpdateRdvDialogComponent, { data: { date: formatedDate } });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.rdvService.updateRdv(this.rendezVous.id_rdv, result.date).subscribe(() => location.reload());
      }
    });
  }

  delete() {
    console.log('delete');
    this.rdvService.deleteRdv(this.rendezVous.id_rdv).subscribe(() => location.reload());
  }
}
