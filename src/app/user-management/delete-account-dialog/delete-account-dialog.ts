import {Component, OnInit} from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {UserManage} from "../services/user-manage";
import {KeycloakService} from "../../shared/keycloak.service";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-account-dialog',
  imports: [
    MatDialogActions,
    MatDialogTitle,
    MatDialogContent,
    MatButton,
    MatDialogClose
  ],
  standalone:true,
  templateUrl: './delete-account-dialog.html',
  styleUrl: './delete-account-dialog.css'
})
export class DeleteAccountDialog implements OnInit{

  id: any;
  isLoggedIn = false;

  constructor(private dialogRef: MatDialogRef<DeleteAccountDialog>, private userManage: UserManage, private keycloakService: KeycloakService) {}

  async ngOnInit() {
    this.isLoggedIn = this.keycloakService.isLoggedIn();
    if(this.isLoggedIn){
      this.id = (await this.keycloakService.loadUserProfile()).id;
    }
  }

  confirmDelete() {
    this.userManage.deleteUser(this.id).subscribe(
      ()=>{
        this.keycloakService.logout();
      }
    )
  }

}
