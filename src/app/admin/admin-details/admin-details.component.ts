import {Component, OnInit} from '@angular/core';
import {NavBarAdminComponent} from "../nav-bar-admin/nav-bar-admin.component";
import {KeycloakService} from "../../shared/keycloak.service";
import {MatTab, MatTabGroup} from "@angular/material/tabs";



@Component({
  selector: 'app-admin-details',
  standalone: true,
  imports: [
    NavBarAdminComponent,
    MatTabGroup,
    MatTab
  ],
  templateUrl: './admin-details.component.html',
  styleUrl: './admin-details.component.css'
})
export class AdminDetailsComponent implements OnInit{
  isLoggedIn = false;
  username?: string;
  userInfo?: any;
  roles: string[] = [];

  constructor(private keycloakService: KeycloakService) {
  }

  async ngOnInit() {
    await this.keycloakService.init();
    this.isLoggedIn = this.keycloakService.isLoggedIn();

    if (this.isLoggedIn) {
      this.userInfo = await this.keycloakService.loadUserProfile();
      console.log(this.userInfo);
      this.roles = this.keycloakService.getRoles();
    }

  }



}
