import {Component, OnInit} from '@angular/core';
import {MatList, MatListItem} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {KeycloakService} from "../../shared/keycloak.service";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatFabButton, MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {UpdateUser} from "../update-user/update-user";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-account-info',
  imports: [
    MatList,
    MatListItem,
    MatDivider,
    MatFormField,
    MatLabel,
    FormsModule,
    MatIcon,
    MatInput,
    MatIconButton,
    MatFabButton,
    RouterLink,
    MatDialogModule
  ],
  standalone: true,
  templateUrl: './account-info.html',
  styleUrl: './account-info.css'
})
export class AccountInfo implements OnInit{
  isLoggedIn = false;
  userInfo?: any;
  roles: string[] = [];
  password: string = '';
  role = '';

  constructor(private keycloakService: KeycloakService,private dialog: MatDialog) {
  }

  async ngOnInit() {
    await this.keycloakService.init();
    this.isLoggedIn = this.keycloakService.isLoggedIn();

    if (this.isLoggedIn) {
      this.userInfo = await this.keycloakService.loadUserProfile();
      console.log(this.userInfo);
      this.roles = this.keycloakService.getRoles();
      if (this.roles.includes('admin')) this.role='You are an administrator';
      if (this.roles.includes('client')) this.role='You are a client';
      if (this.roles.includes('supplier')) this.role='You are a supplier';
      if (this.roles.includes('repairer')) this.role='You are a repairer';
    }

  }


  openUpdateUser() {
    this.dialog.open(UpdateUser, {
      width: '700px',
      maxWidth: '95vw',
      disableClose: true
    });
  }

}
