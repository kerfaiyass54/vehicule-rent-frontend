import { Component } from '@angular/core';
import {NavBarAdminComponent} from "../nav-bar-admin/nav-bar-admin.component";

@Component({
  selector: 'app-admin-details',
  standalone: true,
  imports: [
    NavBarAdminComponent
  ],
  templateUrl: './admin-details.component.html',
  styleUrl: './admin-details.component.css'
})
export class AdminDetailsComponent {

}
