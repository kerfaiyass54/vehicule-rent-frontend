import { Component } from '@angular/core';
import {NavBarAdminComponent} from "../nav-bar-admin/nav-bar-admin.component";

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

}
