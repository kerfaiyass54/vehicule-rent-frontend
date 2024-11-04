import { Component } from '@angular/core';
import {NavBarAdminComponent} from "../nav-bar-admin/nav-bar-admin.component";

@Component({
  selector: 'app-repair-management',
  standalone: true,
    imports: [
        NavBarAdminComponent
    ],
  templateUrl: './repair-management.component.html',
  styleUrl: './repair-management.component.css'
})
export class RepairManagementComponent {

}
