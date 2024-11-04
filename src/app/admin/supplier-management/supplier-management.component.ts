import { Component } from '@angular/core';
import {NavBarAdminComponent} from "../nav-bar-admin/nav-bar-admin.component";

@Component({
  selector: 'app-supplier-management',
  standalone: true,
    imports: [
        NavBarAdminComponent
    ],
  templateUrl: './supplier-management.component.html',
  styleUrl: './supplier-management.component.css'
})
export class SupplierManagementComponent {

}
