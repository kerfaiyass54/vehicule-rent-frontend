import {Component, Input, OnInit} from '@angular/core';
import {MatList, MatListItem} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatButton, MatFabButton, MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {UpdateUser} from "../update-user/update-user";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {KeycloakService} from "../../shared/keycloak.service";
import {UpdatePassword} from "../update-password/update-password";
import {DeleteAccountDialog} from "../delete-account-dialog/delete-account-dialog";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexTitleSubtitle,
  NgApexchartsModule
} from 'ng-apexcharts';
import {BarCharts} from "../../components/bar-charts/bar-charts";




@Component({
    selector: 'app-account-info',
  imports: [
    MatList,
    MatListItem,
    MatDivider,
    FormsModule,
    MatIcon,
    MatFabButton,
    MatDialogModule,
    NgApexchartsModule,
    BarCharts
  ],
    templateUrl: './account-info.html',
    styleUrl: './account-info.css'
})
export class AccountInfo implements OnInit{
  isLoggedIn = false;
  userInfo?: any;
  roles: string[] = [];
  password: string = '';
  role = '';
  id: any;
  @Input() sessionsTotal = 0;
  @Input() days: any[] = [];
  @Input() count:any[] = [];
  colors: any[] = ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'];





  constructor(private keycloakService: KeycloakService,private dialog: MatDialog) {
  }

  async ngOnInit() {
    this.isLoggedIn = await this.keycloakService.isLoggedIn();

    if (this.isLoggedIn) {
      console.log(this.keycloakService.getToken());
      this.userInfo = await this.keycloakService.loadUserProfile();
      this.id = this.userInfo.id;
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

  openChangePassword(){
    this.dialog.open(UpdatePassword, {
      width: '700px',
      maxWidth: '95vw',
      disableClose: true
    });
  }

  openDeleteDialog() {
  this.dialog.open(DeleteAccountDialog, {
    width: '350px',
    panelClass: 'delete-dialog'
  });}


}
