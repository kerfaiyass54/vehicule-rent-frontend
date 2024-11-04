import { Component } from '@angular/core';
import {NavBarAdminComponent} from "../nav-bar-admin/nav-bar-admin.component";

@Component({
  selector: 'app-location-management',
  standalone: true,
    imports: [
        NavBarAdminComponent
    ],
  templateUrl: './location-management.component.html',
  styleUrl: './location-management.component.css'
})
export class LocationManagementComponent {

}
