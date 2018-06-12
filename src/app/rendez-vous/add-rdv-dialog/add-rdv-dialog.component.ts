import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RendezVousService } from '../rendez-vous.service';

@Component({
  selector: 'app-add-rdv-dialog',
  templateUrl: './add-rdv-dialog.component.html',
  styleUrls: ['./add-rdv-dialog.component.css']
})
export class AddRdvDialogComponent {

  clients$: Observable<any>;

  data = {
    clientID: '',
    inputDate: ''
  };

  constructor(private rdvService: RendezVousService) {
    this.clients$ = this.rdvService.getAllClients();
  }
}
