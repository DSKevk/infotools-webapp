import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddRdvDialogComponent } from './rendez-vous/add-rdv-dialog/add-rdv-dialog.component';
import { RendezVousService } from './rendez-vous/rendez-vous.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialog: MatDialog, private rdvService: RendezVousService) { }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddRdvDialogComponent);
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.rdvService.postNewRdv(data.clientID, data.inputDate).subscribe(() => location.reload());
      }
    });
  }
}
