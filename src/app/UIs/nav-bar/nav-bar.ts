import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {KeycloakService} from "../../shared/keycloak.service";

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterLink
  ],
  standalone: true,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

  @Input() mainRoute: any;
  @Input() list: any[] = [];

  constructor(private keycloak:KeycloakService) {

  }


  logout() {
    this.keycloak.logout();
  }
}
