import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavBarAdminComponent} from "./nav-bar-admin/nav-bar-admin.component";

@Component({
  selector: 'app-admin',
  standalone: true,
    imports: [
        RouterOutlet,
        NavBarAdminComponent,
    ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
