import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-rdv-dialog',
  templateUrl: './update-rdv-dialog.component.html',
  styleUrls: ['./update-rdv-dialog.component.css']
})
export class UpdateRdvDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
