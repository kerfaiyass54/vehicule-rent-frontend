import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-session-details-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './session-details-dialog.html',
  styleUrl: './session-details-dialog.css',
})
export class SessionDetailsDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
