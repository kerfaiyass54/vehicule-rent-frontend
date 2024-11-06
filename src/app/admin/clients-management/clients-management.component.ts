import { Component } from '@angular/core';
import {NavBarAdminComponent} from "../nav-bar-admin/nav-bar-admin.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clients-management',
  standalone: true,
    imports: [
        NavBarAdminComponent
    ],
  templateUrl: './clients-management.component.html',
  styleUrl: './clients-management.component.css'
})
export class ClientsManagementComponent {

  constructor(private router:Router) {

  }

  goToAddClient(){
    this.router.navigate(['admin/clients/add-client']);
  }
}
