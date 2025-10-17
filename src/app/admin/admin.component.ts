import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NbCardModule, NbTabsetModule} from "@nebular/theme";
import {KeycloakService} from "../shared/keycloak.service";



@Component({
  selector: 'app-admin',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NbCardModule,
    NbTabsetModule,
    RouterOutlet,
    RouterLink


  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {


  logout() {
      this.keycloak.logout();
  }

  constructor(private keycloak:KeycloakService) {

  }






}
