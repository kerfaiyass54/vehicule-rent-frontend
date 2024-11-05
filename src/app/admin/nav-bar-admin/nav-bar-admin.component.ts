import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav-bar-admin',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav-bar-admin.component.html',
  styleUrl: './nav-bar-admin.component.css'
})
export class NavBarAdminComponent {

}
