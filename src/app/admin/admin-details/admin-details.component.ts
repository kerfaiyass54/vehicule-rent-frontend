import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "../../shared/keycloak.service";
import {UserManagement} from "../../user-management/user-management";




@Component({
  selector: 'app-admin-details',
  standalone: true,
  imports: [
    UserManagement
  ],
  templateUrl: './admin-details.component.html',
  styleUrl: './admin-details.component.css'
})
export class AdminDetailsComponent implements OnInit{
  isLoggedIn = false;
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
