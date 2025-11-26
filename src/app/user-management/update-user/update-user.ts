import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-user',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatButtonModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './update-user.html',
  styleUrl: './update-user.css'
})
export class UpdateUser {

  constructor(private dialogRef: MatDialogRef<UpdateUser>) {}


}
