import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import { MatDialogRef } from '@angular/material/dialog';
import {KeycloakService} from "../../shared/keycloak.service";
import {UserManage} from "../services/user-manage";

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

  userForm: FormGroup;
  userInfo?: any;
  emails = [];
  users = [];


  constructor(private dialogRef: MatDialogRef<UpdateUser>,private fb: FormBuilder,
              private keycloakService: KeycloakService, private userManager: UserManage) {

    this.userInfo = this.keycloakService.loadUserProfile();
    this.userForm = this.fb.group({
      firstName: new FormControl(this.userInfo.firstName, [Validators.required]),
      email: new FormControl(this.userInfo.email, [Validators.required, Validators.email]),
      lastName: new FormControl(this.userInfo.lastName, [Validators.required])
    });





  }


  onSubmit(){

  }


}
