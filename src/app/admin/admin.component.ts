import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {KeycloakService} from "../shared/keycloak.service";
import {NavBar} from "../UIs/nav-bar/nav-bar";



@Component({
  selector: 'app-admin',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    RouterLink,
    NavBar
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  mainRoute: any = '/admin';
  list: any[] = [
    {route: '', name: 'Users', drop: true, sublinks : [
        {link: '/admin/clients', name: 'Clients'},
        {link: '/admin/repair', name: 'Repairs'},
        {link: '/admin/supplier', name: 'Suppliers'},
      ]},
    {route: '/admin/dashboard', name: 'Dashboard', drop: false, sublinks :[
      ]},
    {route: '/admin/location', name: 'Locations', drop: false, sublinks : [
      ]},
  ]

  constructor(private keycloak:KeycloakService) {

  }


  logout() {
      this.keycloak.logout();
  }








}
